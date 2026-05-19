// /api/stripe-webhook.js
// Vercel serverless function that receives Stripe webhook events.
// When a Saitama Driving Test payment succeeds, it grants the user premium
// access in Supabase — either on their existing profile (if logged in already)
// or in pending_purchases (if they haven't logged in yet).

import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { buffer } from "micro";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
});

// Service role client — bypasses RLS. NEVER expose this key in frontend code.
const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } }
);

const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;
const PRICE_ID = process.env.STRIPE_PRICE_ID;
const PRODUCT_TAG = "saitama_driving_test_premium";

// IMPORTANT: disable Vercel's default body parser so we get the raw body.
// Stripe signature verification fails on a parsed body.
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  let event;
  try {
    const rawBody = await buffer(req);
    const signature = req.headers["stripe-signature"];
    event = stripe.webhooks.constructEvent(rawBody, signature, WEBHOOK_SECRET);
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // We only care about successful checkouts.
  if (event.type !== "checkout.session.completed") {
    // Still respond 200 so Stripe doesn't retry.
    return res.status(200).json({ received: true, ignored: event.type });
  }

  const session = event.data.object;

  // Filter: this Stripe account is shared with TableBell. Only handle our product.
  // We check two ways: metadata tag (set when we create the session) and the
  // price ID on the line items.
  const isOurProduct =
    session.metadata?.product === PRODUCT_TAG ||
    (await sessionUsesOurPrice(session.id));

  if (!isOurProduct) {
    console.log(`Ignoring session ${session.id} — not Saitama product`);
    return res.status(200).json({ received: true, ignored: "wrong_product" });
  }

  const email = (
    session.customer_details?.email ||
    session.customer_email ||
    ""
  ).toLowerCase().trim();

  const stripeCustomerId = session.customer || null;

  if (!email) {
    console.error(`Session ${session.id} has no email — cannot grant premium`);
    return res.status(200).json({ received: true, error: "no_email" });
  }

  try {
    // Does a user already exist in auth.users with this email?
    // If yes, we update their profile directly. If no, we write to pending_purchases.
    const { data: existingProfile, error: lookupErr } = await supabaseAdmin
      .from("profiles")
      .select("id, email, is_premium")
      .ilike("email", email)
      .maybeSingle();

    if (lookupErr) throw lookupErr;

    if (existingProfile) {
      // User already has an account — grant premium directly.
      const { error: updateErr } = await supabaseAdmin
        .from("profiles")
        .update({
          is_premium: true,
          stripe_customer_id: stripeCustomerId,
          purchased_at: new Date().toISOString(),
        })
        .eq("id", existingProfile.id);

      if (updateErr) throw updateErr;
      console.log(`Granted premium to existing user ${email}`);
    } else {
      // No user yet — record the purchase. It will be claimed when they
      // log in for the first time (handled by the on_auth_user_created trigger).
      const { error: insertErr } = await supabaseAdmin
        .from("pending_purchases")
        .upsert(
          {
            email,
            stripe_customer_id: stripeCustomerId,
            stripe_session_id: session.id,
            purchased_at: new Date().toISOString(),
            claimed: false,
          },
          { onConflict: "stripe_session_id" }
        );

      if (insertErr) throw insertErr;
      console.log(`Recorded pending purchase for ${email}`);
    }

    return res.status(200).json({ received: true });
  } catch (err) {
    console.error("Webhook handler error:", err);
    // Return 500 so Stripe will retry. Stripe retries failed webhooks for ~3 days.
    return res.status(500).json({ error: "internal_error" });
  }
}

// Backup check: if metadata is missing (e.g. legacy Payment Link purchase),
// look up the line items and verify the price ID matches ours.
async function sessionUsesOurPrice(sessionId) {
  try {
    const lineItems = await stripe.checkout.sessions.listLineItems(sessionId, {
      limit: 10,
    });
    return lineItems.data.some((item) => item.price?.id === PRICE_ID);
  } catch (err) {
    console.error("Failed to list line items:", err);
    return false;
  }
}

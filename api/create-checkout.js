// /api/create-checkout.js
// Vercel serverless function that creates a Stripe Checkout session.
// Called by Paywall.js when the user clicks "Upgrade".

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
});

const PRICE_ID = process.env.STRIPE_PRICE_ID;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email } = req.body || {};

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: PRICE_ID,
          quantity: 1,
        },
      ],
      // If the user is already logged in, pre-fill their email.
      // Otherwise Stripe will collect it during checkout.
      ...(email ? { customer_email: email } : {}),
      // Always create a customer record so we can link it later.
      customer_creation: "always",
      // Metadata helps us identify which product/site this purchase is for
      // — critical because this Stripe account is shared with TableBell.
      metadata: {
        product: "saitama_driving_test_premium",
      },
      payment_intent_data: {
        metadata: {
          product: "saitama_driving_test_premium",
        },
      },
      success_url: `${process.env.PUBLIC_SITE_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.PUBLIC_SITE_URL}/`,
      // Tell Stripe to show prices in JPY (already set on the price, but explicit).
      locale: "auto",
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("create-checkout error:", err);
    return res.status(500).json({ error: "Failed to create checkout session" });
  }
}

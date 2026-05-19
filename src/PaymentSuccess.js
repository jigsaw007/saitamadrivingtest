// src/PaymentSuccess.js
// After Stripe redirects here, we read the session_id, fetch the email
// from Stripe (via a tiny helper endpoint isn't needed — we just ask the
// user to enter their email or auto-send a magic link if already logged in).
//
// Simplest reliable flow: show the email they paid with (from Stripe's
// customer_email in the session), and auto-send them a magic link.

import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { supabase } from "./lib/supabase";

function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMessage, setErrorMessage] = useState("");

  // If the user is already logged in, we don't need to send a magic link —
  // the webhook will have updated their profile already. Just show success.
  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user?.email) {
        setEmail(session.user.email);
        setStatus("already_logged_in");
      }
    })();
  }, []);

  const sendMagicLink = async (e) => {
    e?.preventDefault();
    if (!email.trim()) return;
    setStatus("sending");
    setErrorMessage("");
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: email.trim().toLowerCase(),
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
          shouldCreateUser: true,
        },
      });
      if (error) throw error;
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message || "Could not send login email.");
      setStatus("error");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.iconWrap}>
          <div style={styles.icon}>✓</div>
        </div>

        <p style={styles.badge}>Payment Successful</p>

        {status === "already_logged_in" ? (
          <>
            <h1 style={styles.title}>You’re all set!</h1>
            <p style={styles.subtitle}>
              Premium has been activated on your account ({email}). You can
              access all questions on any device — just log in with the same
              email.
            </p>
            <Link to="/" style={styles.button}>
              Start Practicing Now
            </Link>
          </>
        ) : status === "sent" ? (
          <>
            <h1 style={styles.title}>Check your email</h1>
            <p style={styles.subtitle}>
              We sent a login link to <strong>{email}</strong>.<br />
              Click the link in the email to activate premium and start
              practicing.
            </p>
            <p style={styles.note}>
              Don’t see it? Check your spam folder. The link expires in 1 hour.
            </p>
          </>
        ) : (
          <>
            <h1 style={styles.title}>One last step</h1>
            <p style={styles.subtitle}>
              To unlock premium on any device, enter the email you used at
              checkout. We’ll send you a one-click login link.
            </p>
            <form onSubmit={sendMagicLink} style={styles.form}>
              <input
                type="email"
                required
                autoFocus
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                disabled={status === "sending"}
              />
              <button
                type="submit"
                style={{
                  ...styles.button,
                  opacity: status === "sending" ? 0.7 : 1,
                }}
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send login link"}
              </button>
            </form>
            {status === "error" && (
              <p style={styles.errorText}>{errorMessage}</p>
            )}
          </>
        )}

        {sessionId && (
          <p style={styles.receiptNote}>
            Reference: {sessionId.slice(0, 12)}...
          </p>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    background:
      "linear-gradient(135deg, #eef5ff 0%, #f8fbff 45%, #eaf7ef 100%)",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: "560px",
    background: "#ffffff",
    borderRadius: "28px",
    padding: "42px 34px",
    textAlign: "center",
    boxShadow: "0 24px 70px rgba(15, 23, 42, 0.12)",
    border: "1px solid rgba(226, 232, 240, 0.9)",
  },
  iconWrap: { display: "flex", justifyContent: "center", marginBottom: "18px" },
  icon: {
    width: "76px",
    height: "76px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #22c55e, #16a34a)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "42px",
    fontWeight: "700",
    boxShadow: "0 12px 30px rgba(34, 197, 94, 0.35)",
  },
  badge: {
    display: "inline-block",
    margin: "0 0 14px",
    padding: "7px 14px",
    borderRadius: "999px",
    background: "#ecfdf5",
    color: "#15803d",
    fontSize: "14px",
    fontWeight: "700",
  },
  title: { margin: "0 0 14px", color: "#0f172a", fontSize: "30px", lineHeight: "1.2" },
  subtitle: { margin: "0 auto 24px", color: "#475569", fontSize: "16px", lineHeight: "1.6", maxWidth: "460px" },
  note: { margin: "0 0 6px", color: "#94a3b8", fontSize: "13px" },
  receiptNote: { marginTop: "20px", color: "#cbd5e1", fontSize: "11px", fontFamily: "monospace" },
  form: { display: "flex", flexDirection: "column", gap: "12px", marginTop: "8px" },
  input: {
    padding: "14px 16px",
    fontSize: "16px",
    borderRadius: "12px",
    border: "1.5px solid #cbd5e1",
    outline: "none",
    fontFamily: "inherit",
  },
  button: {
    display: "inline-block",
    padding: "14px 22px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: "16px",
    border: "none",
    boxShadow: "0 12px 26px rgba(37, 99, 235, 0.25)",
    cursor: "pointer",
  },
  errorText: { marginTop: "14px", color: "#dc2626", fontSize: "14px" },
};

export default PaymentSuccess;

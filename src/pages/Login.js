// src/pages/Login.js
// Magic-link login page. User enters email -> receives email -> clicks link -> logged in.

import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

function Login() {
  const { signInWithEmail } = useAuth();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("sending");
    setErrorMessage("");
    try {
      await signInWithEmail(email);
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Log in</h1>

        {status === "sent" ? (
          <div style={styles.successBox}>
            <div style={styles.checkIcon}>✓</div>
            <h2 style={styles.successTitle}>Check your email</h2>
            <p style={styles.successText}>
              We sent a login link to <strong>{email}</strong>.
              <br />
              Click the link in the email to log in.
            </p>
            <p style={styles.note}>
              Don’t see it? Check your spam folder. The link expires in 1 hour.
            </p>
            <button
              type="button"
              style={styles.linkButton}
              onClick={() => {
                setStatus("idle");
                setEmail("");
              }}
            >
              Use a different email
            </button>
          </div>
        ) : (
          <>
            <p style={styles.subtitle}>
              Enter your email and we’ll send you a one-click login link.
              <br />
              No password needed.
            </p>

            <form onSubmit={handleSubmit} style={styles.form}>
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
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                }}
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send login link"}
              </button>
            </form>

            {status === "error" && (
              <p style={styles.errorText}>{errorMessage}</p>
            )}

            <p style={styles.helperText}>
              If you already paid for premium, use the same email you used at
              checkout — your access will be activated automatically.
            </p>

            <Link to="/" style={styles.backLink}>
              ← Back to home
            </Link>
          </>
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
    background: "linear-gradient(135deg, #eef5ff 0%, #f8fbff 45%, #eaf7ef 100%)",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: "440px",
    background: "#fff",
    borderRadius: "24px",
    padding: "40px 32px",
    boxShadow: "0 20px 60px rgba(15,23,42,0.1)",
    border: "1px solid rgba(226,232,240,0.9)",
  },
  title: {
    margin: "0 0 12px",
    fontSize: "28px",
    color: "#0f172a",
    textAlign: "center",
  },
  subtitle: {
    margin: "0 0 28px",
    color: "#475569",
    fontSize: "15px",
    lineHeight: 1.6,
    textAlign: "center",
  },
  form: { display: "flex", flexDirection: "column", gap: "12px" },
  input: {
    padding: "14px 16px",
    fontSize: "16px",
    borderRadius: "12px",
    border: "1.5px solid #cbd5e1",
    outline: "none",
    fontFamily: "inherit",
  },
  button: {
    padding: "14px 22px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
    color: "#fff",
    fontWeight: 700,
    fontSize: "16px",
    border: "none",
    boxShadow: "0 10px 24px rgba(37,99,235,0.25)",
  },
  errorText: {
    marginTop: "14px",
    color: "#dc2626",
    fontSize: "14px",
    textAlign: "center",
  },
  helperText: {
    marginTop: "22px",
    fontSize: "13px",
    color: "#64748b",
    textAlign: "center",
    lineHeight: 1.5,
  },
  backLink: {
    display: "block",
    marginTop: "20px",
    textAlign: "center",
    color: "#2563eb",
    textDecoration: "none",
    fontSize: "14px",
  },
  successBox: { textAlign: "center" },
  checkIcon: {
    width: "64px",
    height: "64px",
    margin: "0 auto 16px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #22c55e, #16a34a)",
    color: "#fff",
    fontSize: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
  },
  successTitle: { margin: "0 0 12px", fontSize: "22px", color: "#0f172a" },
  successText: { color: "#475569", fontSize: "15px", lineHeight: 1.6, margin: "0 0 12px" },
  note: { color: "#94a3b8", fontSize: "13px", margin: "0 0 20px" },
  linkButton: {
    background: "none",
    border: "none",
    color: "#2563eb",
    fontSize: "14px",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default Login;

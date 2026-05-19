// src/pages/AuthCallback.js
// Lands here after the user clicks the magic link in their email.
// Supabase auto-detects the URL hash and creates the session.

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

function AuthCallback() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("loading");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Supabase will auto-process the auth hash in the URL.
    // We just wait for the session to appear, then redirect.
    let attempts = 0;
    const maxAttempts = 20;

    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setStatus("success");
        // Small delay so user sees the success state briefly
        setTimeout(() => navigate("/", { replace: true }), 600);
        return;
      }
      attempts += 1;
      if (attempts >= maxAttempts) {
        setStatus("error");
        setErrorMessage(
          "We couldn't log you in. The link may have expired or already been used."
        );
        return;
      }
      setTimeout(checkSession, 200);
    };

    checkSession();
  }, [navigate]);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {status === "loading" && (
          <>
            <div style={styles.spinner} />
            <h2 style={styles.title}>Logging you in...</h2>
          </>
        )}
        {status === "success" && (
          <>
            <div style={styles.checkIcon}>✓</div>
            <h2 style={styles.title}>You’re in!</h2>
            <p style={styles.subtitle}>Redirecting...</p>
          </>
        )}
        {status === "error" && (
          <>
            <h2 style={styles.title}>Login failed</h2>
            <p style={styles.subtitle}>{errorMessage}</p>
            <button onClick={() => navigate("/login")} style={styles.button}>
              Request a new link
            </button>
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
    maxWidth: "400px",
    background: "#fff",
    borderRadius: "24px",
    padding: "44px 32px",
    textAlign: "center",
    boxShadow: "0 20px 60px rgba(15,23,42,0.1)",
  },
  spinner: {
    width: "44px",
    height: "44px",
    margin: "0 auto 18px",
    border: "4px solid #e2e8f0",
    borderTopColor: "#2563eb",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
  },
  checkIcon: {
    width: "60px",
    height: "60px",
    margin: "0 auto 16px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #22c55e, #16a34a)",
    color: "#fff",
    fontSize: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
  },
  title: { margin: "0 0 8px", color: "#0f172a", fontSize: "22px" },
  subtitle: { margin: "0 0 18px", color: "#475569", fontSize: "15px" },
  button: {
    padding: "12px 22px",
    borderRadius: "12px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    fontWeight: 600,
    cursor: "pointer",
  },
};

// Inject keyframes for spinner once
if (typeof document !== "undefined" && !document.getElementById("auth-callback-keyframes")) {
  const styleEl = document.createElement("style");
  styleEl.id = "auth-callback-keyframes";
  styleEl.textContent = "@keyframes spin { to { transform: rotate(360deg); } }";
  document.head.appendChild(styleEl);
}

export default AuthCallback;

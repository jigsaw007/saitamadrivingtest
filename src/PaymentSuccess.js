import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function PaymentSuccess() {
  useEffect(() => {
    localStorage.setItem("isPremium", "true");
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.iconWrap}>
          <div style={styles.icon}>✓</div>
        </div>

        <p style={styles.badge}>Premium Unlocked</p>

        <h1 style={styles.title}>You’re ready to practice!</h1>

        <p style={styles.subtitle}>
          Full access has been activated on this device. You can now use all
          quizzes, question sets, and practice modes.
        </p>

        <div style={styles.features}>
          <div>✅ Unlimited Karimen practice</div>
          <div>✅ Honmen Sets A, B, C, and D</div>
          <div>✅ Illustration questions</div>
          <div>✅ Lifetime access</div>
        </div>

        <Link to="/" style={styles.button}>
          Start Practicing Now
        </Link>

        <p style={styles.note}>
          Tip: Use the same browser/device to keep premium access active.
        </p>
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
  iconWrap: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "18px",
  },
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
  title: {
    margin: "0 0 14px",
    color: "#0f172a",
    fontSize: "34px",
    lineHeight: "1.15",
  },
  subtitle: {
    margin: "0 auto 26px",
    color: "#475569",
    fontSize: "17px",
    lineHeight: "1.7",
    maxWidth: "460px",
  },
  features: {
    display: "grid",
    gap: "12px",
    margin: "0 0 30px",
    padding: "22px",
    borderRadius: "18px",
    background: "#f8fafc",
    color: "#334155",
    fontSize: "16px",
    textAlign: "left",
  },
  button: {
    display: "inline-block",
    width: "100%",
    boxSizing: "border-box",
    padding: "16px 22px",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: "800",
    fontSize: "17px",
    boxShadow: "0 14px 30px rgba(37, 99, 235, 0.3)",
  },
  note: {
    margin: "18px 0 0",
    color: "#64748b",
    fontSize: "13px",
  },
};

export default PaymentSuccess;
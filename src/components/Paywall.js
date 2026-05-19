// src/components/Paywall.js
// Updated paywall: instead of redirecting to a Stripe Payment Link,
// it calls our /api/create-checkout endpoint which builds a Checkout Session
// with the user's email pre-filled (if logged in).

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PREMIUM_PRICE_LABEL } from "../config/premium";
import { useAuth } from "../hooks/useAuth";

const Paywall = ({ title = "Unlock Premium", className = "" }) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpgrade = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user?.email || null }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Could not start checkout.");
      }
      window.location.href = data.url;
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div
      className={`card p-4 shadow mt-4 text-center ${className}`}
      style={{ border: "2px solid #86b7fe" }}
    >
      <h2 className="text-primary mb-3">{title}</h2>
      <p className="mb-3" style={{ fontSize: "18px" }}>
        You can try 5 free questions. Upgrade once to unlock the full question
        bank — works on any device after you log in.
      </p>
      <ul className="list-unstyled mb-4" style={{ fontSize: "16px" }}>
        <li>✅ Unlimited Karimen practice</li>
        <li>✅ Honmen Sets A, B, C, and D</li>
        <li>✅ Illustration questions</li>
        <li>✅ Mistake review and explanations where available</li>
        <li>✅ Lifetime access on any device</li>
      </ul>
      <button
        className="btn btn-primary btn-lg"
        onClick={handleUpgrade}
        disabled={loading}
      >
        {loading ? "Loading..." : `Upgrade for ${PREMIUM_PRICE_LABEL}`}
      </button>

      {error && (
        <p className="text-danger mt-3 mb-0" style={{ fontSize: "14px" }}>
          {error}
        </p>
      )}

      <p className="text-muted mt-3 mb-0" style={{ fontSize: "13px" }}>
        Already paid?{" "}
        <Link to="/login">Log in with your email</Link> to restore access.
      </p>
    </div>
  );
};

export default Paywall;

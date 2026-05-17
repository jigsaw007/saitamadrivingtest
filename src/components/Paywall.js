import React from "react";
import { PREMIUM_PRICE_LABEL, STRIPE_PAYMENT_LINK } from "../config/premium";

const Paywall = ({ title = "Unlock Premium", className = "" }) => {
  const handleUpgrade = () => {
    if (!STRIPE_PAYMENT_LINK) {
      alert("Stripe payment link is not configured yet. Add REACT_APP_STRIPE_PAYMENT_LINK to your .env file.");
      return;
    }

    window.location.href = STRIPE_PAYMENT_LINK;
  };

  return (
    <div className={`card p-4 shadow mt-4 text-center ${className}`} style={{ border: "2px solid #86b7fe" }}>
      <h2 className="text-primary mb-3">{title}</h2>
      <p className="mb-3" style={{ fontSize: "18px" }}>
        You can try 5 free questions. Upgrade once to unlock the full question bank.
      </p>
      <ul className="list-unstyled mb-4" style={{ fontSize: "16px" }}>
        <li>✅ Unlimited Karimen practice</li>
        <li>✅ Honmen Sets A, B, C, and D</li>
        <li>✅ Illustration questions</li>
        <li>✅ Mistake review and explanations where available</li>
        <li>✅ Lifetime access</li>
      </ul>
      <button className="btn btn-primary btn-lg" onClick={handleUpgrade}>
        Upgrade for {PREMIUM_PRICE_LABEL}
      </button>
      <p className="text-muted mt-3 mb-0" style={{ fontSize: "13px" }}>
        Premium login/payment verification should be connected with Supabase/Firebase before production launch.
      </p>
    </div>
  );
};

export default Paywall;

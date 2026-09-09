import React from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />

      <main className="container content-page mt-5">
        <h1>Contact Saitama Driving Test</h1>

        <p className="lead">
          Found an outdated rule, unclear explanation, broken question, or
          technical problem? Please let us know.
        </p>

        <div className="info-card">
          <h2>Corrections and support</h2>

          <p>
            For corrections, feedback, technical issues, or general questions,
            contact us by email.
          </p>

          <a
            className="btn btn-primary"
            href="mailto:info@saitamadrivingtest.com"
          >
            Email us
          </a>

          <p className="mt-3 mb-0">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@saitamadrivingtest.com">
              info@saitamadrivingtest.com
            </a>
          </p>
        </div>

        <div className="info-card mt-4">
          <h2>Payment issues</h2>

          <p>
            If you report a premium-access problem, describe the issue without
            sending card details, passwords, ID numbers, or other sensitive
            information.
          </p>

          <p className="mb-0">
            Payment processing is handled by Stripe. We do not need your full
            card number to investigate access problems.
          </p>
        </div>
      </main>
    </div>
  );
}
import React from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div><Navbar /><main className="container content-page mt-5">
      <h1>Contact Saitama Driving Test</h1>
      <p className="lead">Found an outdated rule, unclear explanation, broken question, or technical problem? Please tell us.</p>
      <div className="info-card">
        <h2>Corrections and support</h2>
        <p>The most reliable contact channel for this project is the public GitHub issue tracker. Please avoid posting personal payment information, passwords, ID numbers, or other sensitive information.</p>
        <a className="btn btn-primary" href="https://github.com/jigsaw007/saitamadrivingtest/issues" target="_blank" rel="noreferrer">Open a GitHub issue</a>
      </div>
      <div className="info-card mt-4">
        <h2>Payment issues</h2>
        <p>If you report a premium-access problem, describe the issue without publishing card details. Payment processing is handled by Stripe; this site does not need your full card number to investigate access problems.</p>
      </div>
    </main></div>
  );
}

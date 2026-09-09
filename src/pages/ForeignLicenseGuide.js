import React from "react";
import Navbar from "../components/Navbar";

export default function ForeignLicenseGuide() {
  return (
    <div><Navbar /><main className="container content-page mt-5">
      <h1>Foreign Licence Conversion in Saitama: Study Guide</h1>
      <p className="lead">If you already hold a driving licence from another country, your route to a Japanese licence may be different from a new-driver course.</p>
      <div className="notice-box"><strong>Important:</strong> Conversion requirements depend on your licence, issuing country or region, residence history and current rules. This page is a study orientation, not an application checklist.</div>
      <h2>1. Start with the official procedure</h2>
      <p>Check the Saitama Prefectural Police driving-licence portal for the current foreign-licence conversion procedure, reservation method, eligibility and required documents before making travel plans.</p>
      <h2>2. Prepare for Japanese road-rule differences</h2>
      <p>Even experienced drivers can be unfamiliar with Japan-specific signs, left-side traffic, pedestrian priority, railway crossings, narrow roads and test terminology. Use the road-sign and vocabulary pages to identify weak areas.</p>
      <h2>3. Do not assume every applicant takes the same tests</h2>
      <p>The examination or confirmation steps can differ by licence and circumstances. Follow the instructions that apply to your case rather than relying on another person's experience.</p>
      <h2>4. Use official English material</h2>
      <p>The National Police Agency publishes English information for holders of foreign driver licences and safe driving in Japan.</p>
      <div className="d-flex flex-wrap gap-2">
        <a className="btn btn-outline-primary" href="https://www.npa.go.jp/english/bureau/traffic/" target="_blank" rel="noreferrer">NPA Traffic Bureau</a>
        <a className="btn btn-outline-primary" href="https://www.police.pref.saitama.lg.jp/menkyo/" target="_blank" rel="noreferrer">Saitama Police licence portal</a>
      </div>
      <p className="text-muted mt-4">Reviewed against official source pages: September 9, 2026.</p>
    </main></div>
  );
}

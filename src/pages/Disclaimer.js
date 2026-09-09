import React from "react";
import Navbar from "../components/Navbar";

export default function Disclaimer() {
  return (
    <div><Navbar /><main className="container content-page mt-5">
      <h1>Disclaimer</h1>
      <p className="lead">Saitama Driving Test is an independent educational website. It is not an official examination service or driving school.</p>
      <h2>No government affiliation</h2>
      <p>We are not affiliated with, endorsed by, or operated by Saitama Prefectural Police, Japan's National Police Agency, JAF, a prefectural public safety commission, or any driving school.</p>
      <h2>Practice questions are not official exam questions</h2>
      <p>The quizzes are designed for study and practice. Wording, topics, scoring, language availability, procedures, fees and legal requirements may differ from the real examination and may change over time.</p>
      <h2>Verify current requirements</h2>
      <p>For licence applications, foreign-licence conversion, reservations, required documents, fees, test eligibility and current traffic law, use the relevant official police or government source.</p>
      <h2>No pass guarantee</h2>
      <p>Using this website does not guarantee that you will pass a theory or practical driving examination.</p>
      <p className="text-muted">Last reviewed: September 9, 2026.</p>
    </main></div>
  );
}

import React from "react";
import Navbar from "../components/Navbar";

export default function SaitamaLicenseCenter() {
  return (
    <div><Navbar /><main className="container content-page mt-5">
      <h1>Saitama Driving Licence Center: Before You Go</h1>
      <p className="lead">Licence procedures are administrative services, so the exact counter, reservation, documents, fees and reception times matter more than a generic travel checklist.</p>
      <h2>Check the procedure-specific page</h2>
      <p>Saitama Prefectural Police maintains a central driving-licence section covering examinations, provisional licences, foreign-licence conversion, renewals and other procedures. Use that page immediately before your visit because requirements can change.</p>
      <a className="btn btn-primary" href="https://www.police.pref.saitama.lg.jp/menkyo/" target="_blank" rel="noreferrer">Open official Saitama licence information</a>
      <h2 className="mt-4">Before leaving home</h2>
      <ul>
        <li>Confirm whether your procedure requires a reservation.</li>
        <li>Check the current reception date and time for your exact procedure.</li>
        <li>Re-check originals, translations, photographs or residency documents requested by the official page.</li>
        <li>Confirm the accepted payment method and current fee.</li>
        <li>Allow extra time for queues and document checking.</li>
      </ul>
      <h2>Language availability</h2>
      <p>Saitama Police publishes information about foreign-language written examinations. Language availability and applicable licence categories should be checked on the official page when you book or apply.</p>
      <a href="https://www.police.pref.saitama.lg.jp/f0130/menkyo/gaikokugo.html" target="_blank" rel="noreferrer">Official Saitama Police foreign-language examination information</a>
      <p className="text-muted mt-4">Last reviewed: September 9, 2026.</p>
    </main></div>
  );
}

import React from "react";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import SourceReview from "../components/SourceReview";
import GuideCTA from "../components/GuideCTA";

export default function SaitamaLicenseCenter() {
  return (
    <div>
      <Navbar />
      <main className="container content-page mt-5">
        <Breadcrumbs items={[{ label: "Resources", to: "/resources" }, { label: "Saitama Licence Center" }]} />
        <h1>Saitama Driving Licence Center: Before You Go</h1>
        <p className="lead">Licence procedures are administrative services, so the exact reservation, documents, fees and reception times matter more than a generic travel checklist.</p>

        <div className="notice-box">
          <strong>Check your exact procedure:</strong> renewal, new examination, provisional licence and foreign-licence conversion can have different requirements.
        </div>

        <h2>Check the procedure-specific page</h2>
        <p>Saitama Prefectural Police maintains the current driving-licence information. Use the official page immediately before your visit because requirements can change.</p>
        <a className="btn btn-primary" href="https://www.police.pref.saitama.lg.jp/menkyo/" target="_blank" rel="noreferrer">Open official Saitama licence information</a>

        <h2>Before leaving home</h2>
        <ul>
          <li>Confirm whether your procedure requires a reservation.</li>
          <li>Check the current reception date and time for your exact procedure.</li>
          <li>Re-check originals, translations, photographs or residency documents requested by the official page.</li>
          <li>Confirm the current fee and accepted payment method.</li>
          <li>Allow extra time for queues and document checking.</li>
        </ul>

        <h2>Foreign-licence conversion</h2>
        <p>Foreign-licence conversion uses a document-screening process, and later knowledge or skills confirmation depends on the applicant's circumstances. Saitama Police also uses online reservations for the knowledge-confirmation step under the current procedure.</p>

        <h2>Language availability</h2>
        <p>Saitama Police publishes information about foreign-language written examinations. Language availability and applicable licence categories should be checked on the official page when you book or apply.</p>
        <a href="https://www.police.pref.saitama.lg.jp/f0130/menkyo/gaikokugo.html" target="_blank" rel="noreferrer">Official Saitama Police foreign-language examination information</a>

        <GuideCTA
          title="Plan the study side too"
          text="Administrative preparation and theory preparation are separate. These resources can help you review terminology and road rules."
          links={[
            { label: "Test-day checklist", to: "/test-day-checklist" },
            { label: "Foreign licence guide", to: "/foreign-license-guide" },
            { label: "FAQ", to: "/faq" }
          ]}
        />

        <SourceReview
          sources={[
            { label: "Saitama Prefectural Police - Driving licence information", href: "https://www.police.pref.saitama.lg.jp/menkyo/" },
            { label: "Saitama Police - Foreign-language examination information", href: "https://www.police.pref.saitama.lg.jp/f0130/menkyo/gaikokugo.html" },
            { label: "Saitama Police - Knowledge confirmation reservation", href: "https://www.police.pref.saitama.lg.jp/f0130/chishikikakuninyoyaku.html" }
          ]}
        />
      </main>
    </div>
  );
}

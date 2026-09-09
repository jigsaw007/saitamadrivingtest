import React from "react";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import SourceReview from "../components/SourceReview";
import GuideCTA from "../components/GuideCTA";

export default function ForeignLicenseGuide() {
  return (
    <div>
      <Navbar />
      <main className="container content-page mt-5">
        <Breadcrumbs items={[{ label: "Resources", to: "/resources" }, { label: "Foreign Licence Guide" }]} />
        <h1>Foreign Licence Conversion in Saitama: Study Guide</h1>
        <p className="lead">If you already hold a driving licence from another country, your route to a Japanese licence may be different from a new-driver course.</p>
        <div className="notice-box"><strong>Important:</strong> Conversion requirements depend on your licence, issuing country or region, residence history and current rules. This page is a study orientation, not an application checklist.</div>

        <h2>1. Start with the official procedure</h2>
        <p>Saitama Police requires document screening for foreign-licence conversion. Current instructions say applicants should make the required reservation and complete document screening before later application or confirmation steps. Always check the latest procedure before making travel plans.</p>

        <h2>2. Check basic eligibility before preparing documents</h2>
        <p>The current Saitama guidance lists conditions including residence in Saitama Prefecture, possession of a valid foreign licence, and evidence that you stayed in the issuing country or region for a total of at least three months after obtaining that licence.</p>

        <h2>3. Prepare for Japanese road-rule differences</h2>
        <p>Even experienced drivers can be unfamiliar with Japan-specific signs, left-side traffic, pedestrian priority, railway crossings, narrow roads and test terminology. Use the road-sign and vocabulary pages to identify weak areas.</p>

        <h2>4. Do not assume every applicant takes the same tests</h2>
        <p>The confirmation or examination steps can differ by licence and circumstances. Some applicants may qualify for exemptions. Follow the instructions that apply to your case rather than relying on another person's experience.</p>

        <h2>5. Reservation rules can change</h2>
        <p>Saitama Police states that foreign-licence conversion knowledge confirmation has required an online reservation since January 5, 2026. Only applicants who meet the stated document-screening conditions can reserve that step.</p>

        <GuideCTA
          title="Prepare before your appointment"
          text="Use these pages to review the study side while the official Saitama Police pages handle your administrative requirements."
          links={[
            { label: "Saitama licence center guide", to: "/saitama-license-center" },
            { label: "Driving vocabulary", to: "/driving-test-vocabulary" },
            { label: "Road signs", to: "/road-signs" }
          ]}
        />

        <SourceReview
          sources={[
            { label: "Saitama Police - Foreign licence conversion procedure", href: "https://www.police.pref.saitama.lg.jp/documents/438/tejyun0901.pdf" },
            { label: "Saitama Police - Knowledge confirmation online reservation", href: "https://www.police.pref.saitama.lg.jp/f0130/chishikikakuninyoyaku.html" },
            { label: "Saitama Police - Driving licence information", href: "https://www.police.pref.saitama.lg.jp/menkyo/" }
          ]}
        />
      </main>
    </div>
  );
}

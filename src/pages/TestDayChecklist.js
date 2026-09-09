import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import SourceReview from "../components/SourceReview";

export default function TestDayChecklist() {
  return (
    <div>
      <Navbar />
      <main className="container content-page mt-5">
        <Breadcrumbs items={[{ label: "Resources", to: "/resources" }, { label: "Test-day Checklist" }]} />
        <h1>Japanese Driving Theory Test Day Checklist</h1>
        <p className="lead">Use this as a preparation reminder, then compare it with the official instructions for your specific exam.</p>

        <h2>Several days before</h2>
        <ul>
          <li>Confirm your appointment or reception requirements.</li>
          <li>Read the official list of required documents and current fees.</li>
          <li>Confirm which test language you selected or can request.</li>
          <li>Review road signs and vocabulary that still slow you down.</li>
        </ul>

        <h2>The evening before</h2>
        <ul>
          <li>Prepare the documents specified by the official authority.</li>
          <li>Plan the route and arrival time.</li>
          <li>Avoid relying on last-minute memorisation; review concepts you previously misunderstood instead.</li>
        </ul>

        <h2>During the written test</h2>
        <ul>
          <li>Read every condition in the question before choosing an answer.</li>
          <li>Watch for wording about what is required, allowed, prohibited or permitted only in certain circumstances.</li>
          <li>Do not treat practice-question wording as guaranteed official wording.</li>
        </ul>

        <section className="info-card mt-4">
          <h2>Useful final review</h2>
          <p className="mb-0"><Link to="/road-signs">Road signs</Link> · <Link to="/driving-test-vocabulary">Driving vocabulary</Link> · <Link to="/road-safety-and-driving">Road safety</Link> · <Link to="/faq">FAQ</Link></p>
        </section>

        <SourceReview
          sources={[
            { label: "Saitama Prefectural Police - Driving licence information", href: "https://www.police.pref.saitama.lg.jp/menkyo/" },
            { label: "JAF - Traffic Rules in Japan", href: "https://english.jaf.or.jp/driving-in-japan/traffic-rules" }
          ]}
        />
      </main>
    </div>
  );
}

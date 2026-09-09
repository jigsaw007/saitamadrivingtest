import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import SourceReview from "../components/SourceReview";

const faqs = [
  {
    q: "What is the difference between Karimen and Honmen?",
    a: "Karimen refers to the provisional-licence stage, while Honmen refers to the full-licence stage. The exact examination route depends on how you are obtaining your licence, so use the official instructions for your application type."
  },
  {
    q: "Can I take a Japanese driving test in English?",
    a: "Foreign-language availability varies by test, licence category and authority. Saitama Prefectural Police publishes current information for foreign-language examinations, so confirm the language offered for your specific procedure before you apply."
  },
  {
    q: "Do I need a reservation at the Saitama licence center?",
    a: "Some procedures require advance reservations. For example, Saitama Police currently requires online reservations for the knowledge confirmation used in certain foreign-licence conversion cases. Check the page for your exact procedure before visiting."
  },
  {
    q: "Can I convert a foreign driving licence in Saitama?",
    a: "If you meet the eligibility conditions, Saitama has a foreign-licence conversion process. Requirements include document screening and vary by licence and country or region, so start with the official Saitama Police instructions rather than relying on another applicant's experience."
  },
  {
    q: "Are the questions on this website official exam questions?",
    a: "No. Saitama Driving Test is an independent study resource. Practice questions are intended to help you review concepts and wording, but they are not official questions and should not be treated as guaranteed exam content."
  },
  {
    q: "What should I study besides practice questions?",
    a: "Study road signs, Japanese driving vocabulary, pedestrian priority, intersections, railway crossings, emergency procedures and other everyday road rules. Use official road-rule material alongside practice so you understand why an answer is correct."
  },
  {
    q: "Where can I verify Japanese traffic rules?",
    a: "JAF publishes English traffic-rule information, and official licensing procedures should be checked with the National Police Agency or the relevant prefectural police authority."
  }
];

export default function FAQ() {
  return (
    <div>
      <Navbar />
      <main className="container content-page mt-5">
        <Breadcrumbs items={[{ label: "Resources", to: "/resources" }, { label: "FAQ" }]} />
        <h1>Japanese Driving Test FAQ</h1>
        <p className="lead">Quick answers to common questions from people preparing for a Japanese driving licence or foreign-licence conversion in Saitama.</p>

        <div className="accordion faq-accordion mt-4" id="drivingFaq">
          {faqs.map((item, index) => (
            <div className="accordion-item" key={item.q}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button${index === 0 ? "" : " collapsed"}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq-${index}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={`faq-${index}`}
                >
                  {item.q}
                </button>
              </h2>
              <div id={`faq-${index}`} className={`accordion-collapse collapse${index === 0 ? " show" : ""}`} data-bs-parent="#drivingFaq">
                <div className="accordion-body">{item.a}</div>
              </div>
            </div>
          ))}
        </div>

        <section className="info-card mt-5">
          <h2>Not sure where to begin?</h2>
          <p>Use the <Link to="/start-here">Start Here guide</Link> for a simple learning path, or browse all <Link to="/resources">study resources</Link>.</p>
        </section>

        <SourceReview
          sources={[
            { label: "Saitama Prefectural Police - Driving licence information", href: "https://www.police.pref.saitama.lg.jp/menkyo/" },
            { label: "Saitama Police - Foreign-licence knowledge confirmation reservations", href: "https://www.police.pref.saitama.lg.jp/f0130/chishikikakuninyoyaku.html" },
            { label: "JAF - Traffic Rules in Japan", href: "https://english.jaf.or.jp/driving-in-japan/traffic-rules" }
          ]}
        />
      </main>
    </div>
  );
}

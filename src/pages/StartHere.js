import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";

const steps = [
  ["1", "Understand your route", "New driver, driving-school student and foreign-licence conversion applicants can follow different procedures. Start by identifying which route applies to you.", "/guide", "Read the licence guide"],
  ["2", "Learn the road rules", "Build a foundation with road signs, road-safety guidance and Japanese driving vocabulary before relying on practice alone.", "/resources", "Browse study resources"],
  ["3", "Try the free practice", "Use the free questions to get used to the style and identify topics that need more study.", "/karimen", "Try Karimen practice"],
  ["4", "Review weak areas", "Return to the learning pages when a sign, term or rule is unclear. Focus on understanding rather than memorising a sentence.", "/road-signs", "Review road signs"],
  ["5", "Prepare for the real appointment", "Check your exact documents, reservation, reception time, language and current procedure on the official authority's website.", "/test-day-checklist", "Open the checklist"]
];

export default function StartHere() {
  return (
    <div>
      <Navbar />
      <main className="container content-page mt-5">
        <Breadcrumbs items={[{ label: "Start Here" }]} />
        <h1>Start Here: Japanese Driving Test Study Path</h1>
        <p className="lead">A simple path for learners who are not sure what to study first.</p>
        <div className="learning-path mt-4">
          {steps.map(([number, title, text, to, label]) => (
            <section className="learning-step" key={number}>
              <div className="learning-step-number" aria-hidden="true">{number}</div>
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
                <Link className="btn btn-sm btn-outline-primary" to={to}>{label}</Link>
              </div>
            </section>
          ))}
        </div>
        <div className="notice-box mt-5">
          <strong>Independent resource:</strong> This site is not an official examination provider. Always verify current administrative requirements with the relevant police authority.
        </div>
      </main>
    </div>
  );
}

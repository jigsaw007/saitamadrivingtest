import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const items = [
  ["Karimen practice", "/karimen", "Practice provisional-licence theory questions."],
  ["Honmen practice", "/honmen", "Work through full-licence practice sets."],
  ["Japanese road signs", "/road-signs", "Review common road signs and meanings."],
  ["Driving vocabulary", "/driving-test-vocabulary", "Learn useful Japanese driving and test terminology."],
  ["Road safety & driving", "/road-safety-and-driving", "Review safety concepts and everyday road rules."],
  ["Emergency guide", "/emergency-guide", "Prepare for accidents, breakdowns and emergencies."],
  ["Foreign licence guide", "/foreign-license-guide", "Start here if you hold a licence issued outside Japan."],
  ["Saitama licence center", "/saitama-license-center", "Find official Saitama procedure links and visit-planning tips."],
  ["Test-day checklist", "/test-day-checklist", "A practical pre-test preparation checklist."],
];

export default function Resources() {
  return (
    <div><Navbar /><main className="container content-page mt-5">
      <h1>Japan Driving Test Study Resources</h1>
      <p className="lead">Use the quizzes for practice, then use the learning pages to understand the rules behind the answers.</p>
      <div className="row g-3">
        {items.map(([title, path, text]) => (
          <div className="col-md-6 col-lg-4" key={path}><Link className="resource-card" to={path}><h2>{title}</h2><p>{text}</p></Link></div>
        ))}
      </div>
      <section className="mt-5 info-card">
        <h2>Official references</h2>
        <p>Procedures and traffic rules can change. For current requirements, verify information with official sources.</p>
        <ul>
          <li><a href="https://www.npa.go.jp/english/bureau/traffic/" target="_blank" rel="noreferrer">National Police Agency Traffic Bureau (English)</a></li>
          <li><a href="https://www.police.pref.saitama.lg.jp/menkyo/" target="_blank" rel="noreferrer">Saitama Prefectural Police driving licence portal</a></li>
          <li><a href="https://english.jaf.or.jp/driving-in-japan/traffic-rules" target="_blank" rel="noreferrer">JAF Traffic Rules in Japan</a></li>
        </ul>
      </section>
    </main></div>
  );
}

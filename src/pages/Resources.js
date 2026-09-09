import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import SourceReview from "../components/SourceReview";

const items = [
  { title: "Start Here", path: "/start-here", text: "A simple step-by-step learning path for new visitors.", tags: "beginner guide start" },
  { title: "Karimen practice", path: "/karimen", text: "Practice provisional-licence theory questions.", tags: "practice provisional karimen" },
  { title: "Honmen practice", path: "/honmen", text: "Work through full-licence practice sets.", tags: "practice full honmen" },
  { title: "Japanese road signs", path: "/road-signs", text: "Review common road signs and meanings.", tags: "signs road safety" },
  { title: "Driving vocabulary", path: "/driving-test-vocabulary", text: "Learn useful Japanese driving and test terminology.", tags: "language words vocabulary" },
  { title: "Road safety & driving", path: "/road-safety-and-driving", text: "Review safety concepts and everyday road rules.", tags: "rules safety driving" },
  { title: "Emergency guide", path: "/emergency-guide", text: "Prepare for accidents, breakdowns and emergencies.", tags: "emergency accident breakdown" },
  { title: "Foreign licence guide", path: "/foreign-license-guide", text: "Start here if you hold a licence issued outside Japan.", tags: "foreign conversion gaimen" },
  { title: "Saitama licence center", path: "/saitama-license-center", text: "Find official Saitama procedure links and visit-planning tips.", tags: "saitama center konosu" },
  { title: "Test-day checklist", path: "/test-day-checklist", text: "A practical pre-test preparation checklist.", tags: "test exam checklist" },
  { title: "Frequently asked questions", path: "/faq", text: "Common questions about tests, language, conversion and official sources.", tags: "faq questions help" }
];

export default function Resources() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) => `${item.title} ${item.text} ${item.tags}`.toLowerCase().includes(q));
  }, [query]);

  return (
    <div>
      <Navbar />
      <main className="container content-page mt-5">
        <Breadcrumbs items={[{ label: "Resources" }]} />
        <h1>Japan Driving Test Study Resources</h1>
        <p className="lead">Use the learning pages to understand Japanese road rules, then use practice to check what you remember.</p>

        <div className="resource-search my-4">
          <label htmlFor="resourceSearch" className="form-label fw-semibold">Find a resource</label>
          <input
            id="resourceSearch"
            className="form-control"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try: road signs, foreign licence, vocabulary..."
          />
        </div>

        <div className="row g-3">
          {filtered.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.path}>
              <Link className="resource-card" to={item.path}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </Link>
            </div>
          ))}
        </div>
        {filtered.length === 0 && <p className="text-muted mt-4">No resource matched that search. Try a broader term.</p>}

        <SourceReview
          sources={[
            { label: "National Police Agency Traffic Bureau (English)", href: "https://www.npa.go.jp/english/bureau/traffic/" },
            { label: "Saitama Prefectural Police - Driving licence information", href: "https://www.police.pref.saitama.lg.jp/menkyo/" },
            { label: "JAF - Traffic Rules in Japan", href: "https://english.jaf.or.jp/driving-in-japan/traffic-rules" }
          ]}
        />
      </main>
    </div>
  );
}

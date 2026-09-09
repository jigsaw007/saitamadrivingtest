import React from "react";

export default function SourceReview({ reviewed = "September 9, 2026", sources = [] }) {
  return (
    <aside className="source-review mt-5" aria-label="Sources and review information">
      <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
        <strong>Sources & review</strong>
        <span className="text-muted">Last reviewed: {reviewed}</span>
      </div>
      <p className="small mt-2 mb-2">
        Procedures and traffic rules can change. This page is educational and should be checked against current official guidance.
      </p>
      {sources.length > 0 && (
        <ul className="small mb-0">
          {sources.map((source) => (
            <li key={source.href}>
              <a href={source.href} target="_blank" rel="noreferrer">{source.label}</a>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

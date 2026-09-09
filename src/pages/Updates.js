import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";

const updates = [
  {
    date: "September 9, 2026",
    title: "Site quality and resource update",
    items: [
      "Expanded Saitama-specific licence resources and official-source links.",
      "Added clearer privacy, disclaimer, editorial and contact information.",
      "Improved navigation, metadata, sitemap coverage and internal linking.",
      "Added FAQ, Start Here guidance, breadcrumbs and review/source information."
    ]
  }
];

export default function Updates() {
  return (
    <div>
      <Navbar />
      <main className="container content-page mt-5">
        <Breadcrumbs items={[{ label: "Site Updates" }]} />
        <h1>Site Updates</h1>
        <p className="lead">A short record of meaningful content and site-quality changes.</p>
        {updates.map((update) => (
          <article className="info-card mt-4" key={update.date}>
            <div className="text-muted small">{update.date}</div>
            <h2 className="mt-1">{update.title}</h2>
            <ul className="mb-0">{update.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
        <p className="mt-4">Found something outdated? <Link to="/contact">Send a correction</Link>.</p>
      </main>
    </div>
  );
}

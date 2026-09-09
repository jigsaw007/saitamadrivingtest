import React from "react";
import { Link } from "react-router-dom";

export default function GuideCTA({ title = "Keep studying", text, links = [] }) {
  return (
    <section className="guide-cta mt-5" aria-label={title}>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
      <div className="d-flex flex-wrap gap-2">
        {links.map((link) => (
          <Link key={link.to} className="btn btn-outline-primary" to={link.to}>{link.label}</Link>
        ))}
      </div>
    </section>
  );
}

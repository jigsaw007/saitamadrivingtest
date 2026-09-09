import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="site-breadcrumb mb-3">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li
              key={`${item.label}-${index}`}
              className={`breadcrumb-item${last ? " active" : ""}`}
              aria-current={last ? "page" : undefined}
            >
              {!last && item.to ? <Link to={item.to}>{item.label}</Link> : item.label}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

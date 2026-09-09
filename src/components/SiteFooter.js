import React from "react";
import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="site-footer mt-5">
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-md-5">
            <strong>Saitama Driving Test</strong>
            <p className="mb-0 mt-2 small">
              Independent study and practice resources for people learning Japanese road rules and preparing for driving theory tests.
            </p>
          </div>
          <div className="col-6 col-md-3">
            <strong>Study</strong>
            <div className="d-flex flex-column gap-1 mt-2 small">
              <Link to="/start-here">Start Here</Link>
              <Link to="/resources">Resources</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/karimen">Karimen</Link>
              <Link to="/honmen">Honmen</Link>
              <Link to="/road-signs">Road Signs</Link>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <strong>Site information</strong>
            <div className="d-flex flex-column gap-1 mt-2 small">
              <Link to="/about">About</Link>
              <Link to="/editorial-policy">Editorial & Sources Policy</Link>
              <Link to="/disclaimer">Disclaimer</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/updates">Site Updates</Link>
            </div>
          </div>
        </div>
        <hr />
        <p className="small mb-0">
          Not affiliated with Saitama Prefectural Police, Japan's National Police Agency, JAF, or any driving school. Always confirm current procedures with the relevant official authority.
        </p>
      </div>
    </footer>
  );
}

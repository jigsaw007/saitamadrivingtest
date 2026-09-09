import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark site-navbar">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Saitama Driving Test</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle btn btn-link" data-bs-toggle="dropdown" aria-expanded="false">Practice</button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/karimen">Karimen</Link></li>
                <li><Link className="dropdown-item" to="/honmen">Honmen</Link></li>
                <li><Link className="dropdown-item" to="/illustrations">Illustrations</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle btn btn-link" data-bs-toggle="dropdown" aria-expanded="false">Learn</button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/start-here">Start Here</Link></li>
                <li><Link className="dropdown-item" to="/resources">All Resources</Link></li>
                <li><Link className="dropdown-item" to="/faq">FAQ</Link></li>
                <li><Link className="dropdown-item" to="/guide">Karimen & Honmen Guide</Link></li>
                <li><Link className="dropdown-item" to="/road-signs">Road Signs</Link></li>
                <li><Link className="dropdown-item" to="/driving-test-vocabulary">Vocabulary</Link></li>
                <li><Link className="dropdown-item" to="/road-safety-and-driving">Road Safety</Link></li>
                <li><Link className="dropdown-item" to="/emergency-guide">Emergency Guide</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle btn btn-link" data-bs-toggle="dropdown" aria-expanded="false">Saitama</button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/foreign-license-guide">Foreign Licence Guide</Link></li>
                <li><Link className="dropdown-item" to="/saitama-license-center">Licence Center Guide</Link></li>
                <li><Link className="dropdown-item" to="/test-day-checklist">Test-day Checklist</Link></li>
              </ul>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

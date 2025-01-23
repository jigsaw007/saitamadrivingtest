import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "#86b7fe", // Set your desired color
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Add subtle shadow
      }}
    >
      
      <div className="container">
        <Link className="navbar-brand" to="/" style={{ color: "#fff" }}>
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: "#fff" }}>
                About
              </Link>
            </li>
          <li className="nav-item">
              <Link className="nav-link" to="/honmen" style={{ color: "#fff" }}>
                Honmen
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/karimen" style={{ color: "#fff" }}>
                Karimen
              </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/road-safety-and-driving" style={{ color: "#fff" }}>
                Road Safety & Driving
              </Link>
            </li>
              <li className="nav-item">
                <Link className="nav-link" to="/road-signs" style={{ color: "#fff" }}>
                Road Signs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/emergency-guide" style={{ color: "#fff" }}>
                Emergency Guide
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/guide" style={{ color: "#fff" }}>
                Guide
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/terms" style={{ color: "#fff" }}>
                Terms
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/privacy" style={{ color: "#fff" }}>
                Privacy
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/driving-test-vocabulary" style={{ color: "#fff" }}> 
                Gloassary
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

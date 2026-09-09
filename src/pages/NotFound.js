import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <main className="container content-page not-found-page mt-5 text-center">
        <div className="display-4 fw-bold">404</div>
        <h1>Page not found</h1>
        <p className="lead">The page may have moved, or the address may be incorrect.</p>
        <div className="d-flex justify-content-center flex-wrap gap-2 mt-4">
          <Link className="btn btn-primary" to="/">Go to homepage</Link>
          <Link className="btn btn-outline-primary" to="/resources">Browse resources</Link>
        </div>
      </main>
    </div>
  );
}

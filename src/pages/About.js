import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div><Navbar /><main className="container content-page mt-5">
      <h1>About Saitama Driving Test</h1>
      <p className="lead">Saitama Driving Test is an independent study website built to make Japanese driving-test terminology and road rules easier to practice in English.</p>

      <h2>Why this site exists</h2>
      <p>Driving-test preparation can be difficult when the rules, signs and exam vocabulary are unfamiliar. This project combines practice quizzes with plain-language study pages so learners can review mistakes instead of only memorising answers.</p>

      <h2>What you can use here</h2>
      <ul>
        <li>Karimen and Honmen theory-practice quizzes.</li>
        <li>Road-sign and illustration practice.</li>
        <li>Japanese driving vocabulary with English explanations.</li>
        <li>Road-safety, emergency and test-preparation guides.</li>
        <li>Saitama-specific links that point users to current official licence information.</li>
      </ul>

      <h2>How the material is positioned</h2>
      <p>The questions and guides are independent study material. They are not official exam questions, and this website is not a government service or driving school. Where procedures or rules can change, we prefer links to Saitama Prefectural Police, the National Police Agency and other authoritative sources.</p>

      <h2>Who maintains it</h2>
      <p>The project is maintained by the creator of Saitama Driving Test. Content corrections and technical issues can be reported publicly through the project's GitHub issue tracker. We do not claim that the material is reviewed by certified driving instructors unless a specific page explicitly identifies such a reviewer.</p>

      <div className="d-flex flex-wrap gap-2 mt-4">
        <Link className="btn btn-primary" to="/resources">Browse study resources</Link>
        <Link className="btn btn-outline-primary" to="/editorial-policy">Editorial & Sources Policy</Link>
        <Link className="btn btn-outline-secondary" to="/contact">Contact</Link>
      </div>
      <p className="text-muted mt-4">About page reviewed: September 9, 2026.</p>
    </main></div>
  );
}

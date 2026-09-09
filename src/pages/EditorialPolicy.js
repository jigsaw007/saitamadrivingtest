import React from "react";
import Navbar from "../components/Navbar";

export default function EditorialPolicy() {
  return (
    <div><Navbar /><main className="container content-page mt-5">
      <h1>Editorial & Sources Policy</h1>
      <p className="lead">Our goal is to make Japanese driving rules easier to study in plain English while clearly separating independent study material from official instructions.</p>
      <h2>Source priority</h2>
      <p>When reviewing factual driving and licensing information, we prefer primary and authoritative sources, especially the National Police Agency and Saitama Prefectural Police. JAF is used as a supplementary road-safety and driving reference.</p>
      <div className="official-links">
        <a href="https://www.npa.go.jp/english/bureau/traffic/" target="_blank" rel="noreferrer">National Police Agency — Traffic Bureau</a>
        <a href="https://www.police.pref.saitama.lg.jp/menkyo/" target="_blank" rel="noreferrer">Saitama Prefectural Police — Driving licence information</a>
        <a href="https://english.jaf.or.jp/driving-in-japan/traffic-rules" target="_blank" rel="noreferrer">JAF — Traffic Rules in Japan</a>
      </div>
      <h2>How content is maintained</h2>
      <ul>
        <li>Educational pages should link to official information when a procedure can change.</li>
        <li>Unsupported success-rate or professional-review claims are not used.</li>
        <li>Practice questions are identified as independent study material, not leaked or official exam questions.</li>
        <li>Material may be corrected when an official source changes or a user reports an error.</li>
      </ul>
      <h2>Corrections</h2>
      <p>If you find a problem, use the Contact page. Reports that include the page, statement, and supporting official source are especially helpful.</p>
      <p className="text-muted">Policy reviewed: September 9, 2026.</p>
    </main></div>
  );
}

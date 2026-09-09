import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://saitamadrivingtest.com";

const seo = {
  "/": ["Japanese Driving Test Practice | Saitama Driving Test", "Practice for Japan's Karimen and Honmen theory tests with English quizzes, road-sign study, vocabulary and practical learning resources for foreign residents."],
  "/about": ["About | Saitama Driving Test", "Learn who Saitama Driving Test is for, how the study material is maintained, and the limits of this independent driving-test preparation resource."],
  "/guide": ["Karimen & Honmen Guide | Saitama Driving Test", "A plain-English overview of Japan's Karimen and Honmen stages with study guidance for learners preparing for a Japanese driving licence."],
  "/karimen": ["Karimen Practice Test | Saitama Driving Test", "Practice Japanese provisional licence (Karimen) theory questions in English and review your results."],
  "/honmen": ["Honmen Practice Tests | Saitama Driving Test", "Practice for the Japanese full licence (Honmen) written test with structured quiz sets and study resources."],
  "/road-signs": ["Japanese Road Signs in English | Saitama Driving Test", "Study common Japanese road signs and their meanings in English before taking a driving theory test in Japan."],
  "/road-safety-and-driving": ["Japan Road Safety & Driving Rules | Saitama Driving Test", "Review important road-safety concepts and driving rules for learners and foreign residents driving in Japan."],
  "/driving-test-vocabulary": ["Japanese Driving Test Vocabulary | Saitama Driving Test", "Learn useful Japanese driving-test words and traffic vocabulary with English explanations."],
  "/emergency-guide": ["Driving Emergency Guide Japan | Saitama Driving Test", "Study basic steps for traffic accidents, breakdowns and driving emergencies in Japan, with links to official resources."],
  "/resources": ["Japan Driving Test Study Resources | Saitama Driving Test", "Browse practice tests, learning guides, vocabulary, road signs, official references and Saitama-specific licence resources."],
  "/foreign-license-guide": ["Foreign Licence Conversion in Saitama: Study Guide", "A starting guide for foreign licence holders preparing for the Japanese licence conversion process in Saitama, with official links for current procedures."],
  "/saitama-license-center": ["Saitama Driving Licence Center Guide | Saitama Driving Test", "Plan your visit to the Saitama driving licence center and find the official Saitama Police pages for current procedures, documents and test information."],
  "/test-day-checklist": ["Japanese Driving Test Day Checklist | Saitama Driving Test", "A practical checklist for preparing for a Japanese driving theory test, including documents, language choice, study review and arrival planning."],
  "/editorial-policy": ["Editorial & Sources Policy | Saitama Driving Test", "How Saitama Driving Test creates, reviews and updates educational content and which official sources are preferred."],
  "/disclaimer": ["Disclaimer | Saitama Driving Test", "Important limitations and independence statement for the Saitama Driving Test educational website."],
  "/contact": ["Contact | Saitama Driving Test", "Contact Saitama Driving Test to report a correction, technical issue or content concern."],
  "/privacy": ["Privacy Policy | Saitama Driving Test", "Privacy information for Saitama Driving Test, including analytics, authentication, payments and local browser storage."],
  "/terms": ["Terms of Use | Saitama Driving Test", "Terms governing use of Saitama Driving Test practice quizzes, study resources and premium access."],
};

const NOINDEX = new Set(["/login", "/auth/callback", "/payment-success", "/setA", "/setB", "/setC", "/setD"]);

function setMeta(name, content, property = false) {
  const attr = property ? "property" : "name";
  let tag = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export default function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const [title, description] = seo[pathname] || [
      "Saitama Driving Test",
      "Independent Japanese driving-test practice and learning resources for foreign residents.",
    ];
    const canonicalUrl = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;

    document.title = title;
    setMeta("description", description);
    setMeta("robots", NOINDEX.has(pathname) ? "noindex, nofollow" : "index, follow");
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:url", canonicalUrl, true);
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [pathname]);

  return null;
}

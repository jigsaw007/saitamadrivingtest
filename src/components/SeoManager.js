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
  "/faq": ["Japanese Driving Test FAQ | Saitama Driving Test", "Answers to common questions about Karimen, Honmen, English-language testing, foreign-licence conversion and studying Japanese road rules."],
  "/start-here": ["Start Here: Japanese Driving Test Study Path", "A simple step-by-step study path for people preparing for Japanese driving theory tests or licence procedures in Saitama."],
  "/updates": ["Site Updates | Saitama Driving Test", "A record of important content, source, navigation and site-quality updates to Saitama Driving Test."],
};


const breadcrumbLabels = {
  "/about": "About",
  "/guide": "Karimen & Honmen Guide",
  "/road-signs": "Road Signs",
  "/road-safety-and-driving": "Road Safety",
  "/driving-test-vocabulary": "Driving Vocabulary",
  "/emergency-guide": "Emergency Guide",
  "/resources": "Resources",
  "/foreign-license-guide": "Foreign Licence Guide",
  "/saitama-license-center": "Saitama Licence Center",
  "/test-day-checklist": "Test-day Checklist",
  "/editorial-policy": "Editorial Policy",
  "/disclaimer": "Disclaimer",
  "/contact": "Contact",
  "/privacy": "Privacy",
  "/terms": "Terms",
  "/faq": "FAQ",
  "/start-here": "Start Here",
  "/updates": "Site Updates"
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    ["What is the difference between Karimen and Honmen?", "Karimen refers to the provisional-licence stage, while Honmen refers to the full-licence stage. The exact examination route depends on how you are obtaining your licence."],
    ["Can I take a Japanese driving test in English?", "Foreign-language availability varies by test, licence category and authority. Confirm the language offered for your specific procedure with the relevant police authority."],
    ["Do I need a reservation at the Saitama licence center?", "Some procedures require advance reservations. Check the official Saitama Police page for your exact procedure before visiting."],
    ["Are the questions on this website official exam questions?", "No. Saitama Driving Test is an independent study resource and its practice questions are not official examination questions."]
  ].map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } }))
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
    const isKnown = Object.prototype.hasOwnProperty.call(seo, pathname);
    const shouldNoIndex = NOINDEX.has(pathname) || !isKnown;
    setMeta("robots", shouldNoIndex ? "noindex, nofollow" : "index, follow");
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

    const existingStructured = document.getElementById("route-structured-data");
    if (existingStructured) existingStructured.remove();

    const graph = [];
    if (breadcrumbLabels[pathname]) {
      graph.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: breadcrumbLabels[pathname], item: canonicalUrl }
        ]
      });
    }
    if (pathname === "/faq") graph.push(faqJsonLd);

    if (graph.length) {
      const script = document.createElement("script");
      script.id = "route-structured-data";
      script.type = "application/ld+json";
      script.text = JSON.stringify(graph.length === 1 ? graph[0] : { "@context": "https://schema.org", "@graph": graph.map(({ "@context": _context, ...item }) => item) });
      document.head.appendChild(script);
    }

    return () => {
      const script = document.getElementById("route-structured-data");
      if (script) script.remove();
    };
  }, [pathname]);

  return null;
}

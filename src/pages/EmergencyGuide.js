import React from "react";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import SourceReview from "../components/SourceReview";
import GuideCTA from "../components/GuideCTA";
import { FaPhone, FaHeartbeat, FaCarCrash, FaExclamationTriangle } from "react-icons/fa";

const emergencyContacts = [
  {
    title: "Police emergency",
    number: "110",
    description: "Use 110 for emergencies involving accidents, crimes or situations requiring an immediate police response.",
    icon: <FaPhone className="text-primary" />,
  },
  {
    title: "Ambulance / Fire",
    number: "119",
    description: "Use 119 for ambulance, fire and rescue emergencies.",
    icon: <FaHeartbeat className="text-danger" />,
  },
  {
    title: "JAF Road Service",
    number: "#8139 / 0570-00-8139",
    description: "JAF lists these numbers for roadside assistance in Japan and offers interpretation support in multiple languages.",
    icon: <FaCarCrash className="text-warning" />,
  },
  {
    title: "Police consultation (non-emergency)",
    number: "#9110",
    description: "Saitama Police lists #9110 for non-emergency police consultation. Do not use 110 for ordinary inquiries.",
    icon: <FaExclamationTriangle className="text-info" />,
  },
];

export default function EmergencyGuide() {
  return (
    <div>
      <Navbar />
      <main className="container content-page mt-5">
        <Breadcrumbs items={[{ label: "Resources", to: "/resources" }, { label: "Emergency Guide" }]} />
        <h1><FaExclamationTriangle className="me-2 text-danger" />Driving Emergency Guide in Japan</h1>
        <p className="lead">Know the official emergency numbers and basic safety steps before you need them.</p>

        <div className="notice-box">
          <strong>Immediate danger?</strong> Call the appropriate emergency service. This page is a study reference, not emergency dispatch or medical advice.
        </div>

        <section className="mt-4">
          <h2><FaPhone className="me-2" />Emergency contacts</h2>
          <div className="row g-3">
            {emergencyContacts.map((contact) => (
              <div key={contact.title} className="col-md-6">
                <div className="card h-100 shadow-sm p-3">
                  <h3 className="h5">{contact.icon} {contact.title}</h3>
                  <div className="h4 mb-2">{contact.number}</div>
                  <p className="mb-0">{contact.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>After a traffic accident</h2>
          <ol>
            <li>Prioritise personal safety and avoid creating a secondary collision.</li>
            <li>If anyone is injured or needs medical help, call 119.</li>
            <li>For a traffic accident requiring police attendance, call 110.</li>
            <li>Follow instructions from emergency services and your insurer or roadside-assistance provider.</li>
          </ol>
        </section>

        <section>
          <h2>Vehicle breakdown</h2>
          <p>Move away from danger when it is safe to do so, make the vehicle visible to other traffic, and use your insurer, rental-car provider or a roadside-assistance service. On expressways, follow emergency guidance and do not remain in an unsafe position near moving traffic.</p>
          <p>JAF currently lists <strong>#8139</strong> and <strong>0570-00-8139</strong> for road service in Japan.</p>
        </section>

        <section>
          <h2>AED and medical emergency</h2>
          <p>If someone is unresponsive or appears to be in cardiac arrest, call 119 and follow the dispatcher or AED voice instructions. Public AEDs provide step-by-step prompts when used.</p>
        </section>

        <GuideCTA
          title="Continue with safety study"
          links={[
            { label: "Road safety", to: "/road-safety-and-driving" },
            { label: "Road signs", to: "/road-signs" },
            { label: "Test-day checklist", to: "/test-day-checklist" }
          ]}
        />

        <SourceReview
          sources={[
            { label: "Saitama Police - 110 emergency information", href: "https://www.police.pref.saitama.lg.jp/a0030/english/english-110ban.html" },
            { label: "JAF - Emergency Measures", href: "https://english.jaf.or.jp/driving-in-japan/emergencymeasures" },
            { label: "JAF - Call Road Service", href: "https://english.jaf.or.jp/call-road-service/call-jaf" }
          ]}
        />
      </main>
    </div>
  );
}

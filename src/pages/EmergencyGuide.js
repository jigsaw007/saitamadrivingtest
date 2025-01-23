import React from "react";
import Navbar from "../components/Navbar";
import { FaPhone, FaHeartbeat, FaCarCrash, FaExclamationTriangle } from "react-icons/fa"; // Importing icons

const EmergencyGuide = () => {
  const emergencyContacts = [
    {
      title: "Police",
      number: "110",
      description: "Call the police in case of accidents, theft, or other criminal activities.",
      icon: <FaPhone className="text-primary" />,
    },
    {
      title: "Ambulance/Fire",
      number: "119",
      description: "Call for medical emergencies, fires, or rescue services.",
      icon: <FaHeartbeat className="text-danger" />,
    },
    {
      title: "Roadside Assistance",
      number: "0120-489-632",
      description: "Call for towing services, flat tires, or vehicle breakdowns.",
      icon: <FaCarCrash className="text-warning" />,
    },
    {
      title: "Emergency Hotline (English)",
      number: "03-5774-0992",
      description: "A 24/7 hotline for English-speaking residents in Tokyo.",
      icon: <FaExclamationTriangle className="text-info" />,
    },
  ];

  const aedInfo = {
    title: "Automated External Defibrillator (AED)",
    description:
      "AEDs are life-saving devices used to help someone experiencing sudden cardiac arrest. They are available in many public places, such as train stations, schools, and shopping centers.",
    steps: [
      "Call 119 immediately.",
      "Locate the nearest AED (look for signs or ask for assistance).",
      "Follow the voice instructions provided by the AED.",
      "Perform CPR if trained, or follow the AED's guidance.",
    ],
  };

  const towTruckInfo = {
    title: "Tow Truck Services",
    description:
      "If your vehicle breaks down or is involved in an accident, you can call a tow truck service to transport your vehicle to a repair shop or safe location.",
    tips: [
      "Ensure your vehicle is in a safe location (e.g., the shoulder of the road).",
      "Turn on your hazard lights to alert other drivers.",
      "Call the roadside assistance number provided by your insurance company or use the general emergency number: 0120-489-632.",
    ],
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5 p-5 rounded shadow" style={{ backgroundColor: "#ffffff" }}>
        <h1 className="text-center mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <FaExclamationTriangle className="me-2 text-danger" /> Emergency Guide
        </h1>
        <p className="text-center mb-4" style={{ fontSize: "18px", fontFamily: "'Roboto', sans-serif" }}>
          Learn what to do in case of emergencies, including contact numbers, AED usage, and tow truck services.
        </p>

        {/* Emergency Contacts Section */}
        <section className="mb-5">
          <h2 className="text-primary" style={{ fontFamily: "'Poppins', sans-serif'" }}>
            <FaPhone className="me-2 text-primary" /> Emergency Contacts
          </h2>
          <div className="row">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card shadow-sm p-3" style={{ borderRadius: "10px" }}>
                  <h5>
                    {contact.icon} {contact.title}
                  </h5>
                  <h6 className="text-secondary">{contact.number}</h6>
                  <p style={{ fontSize: "14px", fontFamily: "'Roboto', sans-serif" }}>
                    {contact.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AED Information Section */}
        <section className="mb-5">
          <h2 className="text-primary" style={{ fontFamily: "'Poppins', sans-serif'" }}>
            <FaHeartbeat className="me-2 text-danger" /> AED Information
          </h2>
          <div className="card shadow-sm p-3" style={{ borderRadius: "10px" }}>
            <h5>{aedInfo.title}</h5>
            <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
              {aedInfo.description}
            </p>
            <ul>
              {aedInfo.steps.map((step, index) => (
                <li key={index} style={{ fontSize: "14px", fontFamily: "'Roboto', sans-serif" }}>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Tow Truck Information Section */}
        <section className="mb-5">
          <h2 className="text-primary" style={{ fontFamily: "'Poppins', sans-serif'" }}>
            <FaCarCrash className="me-2 text-warning" /> Tow Truck Services
          </h2>
          <div className="card shadow-sm p-3" style={{ borderRadius: "10px" }}>
            <h5>{towTruckInfo.title}</h5>
            <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
              {towTruckInfo.description}
            </p>
            <ul>
              {towTruckInfo.tips.map((tip, index) => (
                <li key={index} style={{ fontSize: "14px", fontFamily: "'Roboto', sans-serif" }}>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EmergencyGuide;
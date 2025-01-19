import React from "react";
import Navbar from "../components/Navbar";
import { FaCar, FaBook, FaCheckCircle } from "react-icons/fa"; // Importing icons

const Guide = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5 p-5 rounded shadow" style={{ backgroundColor: "#ffffff" }}>
        <h1 className="text-center mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <FaCar className="me-2 text-primary" /> Guide to Obtain Driving License
        </h1>
        <p className="text-center mb-5" style={{ fontSize: "18px", fontFamily: "'Roboto', sans-serif" }}>
          This guide explains the two stages of the Saitama Driving License Test: <strong>仮免許 (Karimen)</strong> and <strong>本免許 (Honmen)</strong>, including requirements, test details, and tips.
        </p>

        {/* 仮免許 (Karimen) Section */}
        <section className="mb-5">
          <h2 className="text-primary" style={{ fontFamily: "'Poppins', sans-serif'" }}>
            <FaBook className="me-2 text-success" /> 仮免許 (Karimen) - Provisional License
          </h2>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            仮免許 (Karimen) is the first step in obtaining a Japanese driving license. It allows you to practice driving under supervision on specially designed courses.
          </p>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            <strong>Requirements:</strong>
            <ul>
              <li><FaCheckCircle className="text-success me-2" /> Minimum age: 18 years.</li>
              <li><FaCheckCircle className="text-success me-2" /> Completion of mandatory lessons at a certified driving school.</li>
            </ul>
          </p>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            <strong>Test Details:</strong>
            <ul>
              <li><FaCheckCircle className="text-success me-2" /> <strong>Written Test:</strong> 50 true/false questions covering basic traffic rules and safety practices. Passing score: 45/50.</li>
              <li><FaCheckCircle className="text-success me-2" /> <strong>Practical Test:</strong> Conducted on a closed course, assessing basic driving skills like starting, stopping, turning, and parking.</li>
            </ul>
          </p>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            <strong>Tips:</strong> Study the official traffic rules handbook and practice on a closed course to familiarize yourself with the test environment.
          </p>
        </section>

        {/* 本免許 (Honmen) Section */}
        <section className="mb-5">
          <h2 className="text-primary" style={{ fontFamily: "'Poppins', sans-serif'" }}>
            <FaCar className="me-2 text-danger" /> 本免許 (Honmen) - Full License
          </h2>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            本免許 (Honmen) is the final stage of obtaining your Japanese driving license. It involves advanced testing to ensure you can safely drive on public roads.
          </p>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            <strong>Requirements:</strong>
            <ul>
              <li><FaCheckCircle className="text-success me-2" /> A valid provisional license (仮免許).</li>
              <li><FaCheckCircle className="text-success me-2" /> Completion of supervised driving hours as required.</li>
            </ul>
          </p>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            <strong>Test Details:</strong>
            <ul>
              <li><FaCheckCircle className="text-success me-2" /> <strong>Written Test:</strong> 95 questions, including true/false and multiple-choice questions. Passing score: 90/100.</li>
              <li><FaCheckCircle className="text-success me-2" /> <strong>Practical Test:</strong> Conducted on public roads, assessing skills like lane changes, merging, and adherence to traffic laws.</li>
            </ul>
          </p>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            <strong>Tips:</strong> Gain plenty of supervised driving experience and practice real-world scenarios like merging and navigating intersections.
          </p>
        </section>

        <hr className="my-5" />

        {/* Summary in Japanese */}
        <section className="mb-5">
          <h2 className="text-primary" style={{ fontFamily: "'Poppins', sans-serif'" }}>
             仮免許と本免許
          </h2>
          <h3 className="text-success">仮免許 (Karimen)</h3>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            仮免許は、指定コースでの監督付き運転練習を許可する最初のステップです。必要な要件を満たし、学科試験と実技試験を合格する必要があります。
          </p>
          <h3 className="text-danger">本免許 (Honmen)</h3>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            本免許は、最終的な運転免許であり、公共道路での安全運転能力を評価する試験です。仮免許の取得後、必要な運転経験を積むことが求められます。
          </p>
        </section>
      </div>
    </div>
  );
};

export default Guide;

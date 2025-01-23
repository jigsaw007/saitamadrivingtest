import React from "react";
import Navbar from "../components/Navbar";
import { FaCar, FaBook, FaCheckCircle, FaClock, FaRoad, FaUserGraduate, FaQuestionCircle, FaExclamationTriangle } from "react-icons/fa"; // Importing icons

const Guide = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5 p-5 rounded shadow" style={{ backgroundColor: "#ffffff" }}>
        <h1 className="text-center mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <FaCar className="me-2 text-primary" /> Guide to Obtain a Driving License in Saitama
        </h1>
        <p className="text-center mb-5" style={{ fontSize: "18px", fontFamily: "'Roboto', sans-serif" }}>
          This guide provides a detailed explanation of the two stages of the Saitama Driving License Test: <strong>仮免許 (Karimen)</strong> and <strong>本免許 (Honmen)</strong>, including requirements, test details, tips, and frequently asked questions.
        </p>

        {/* 仮免許 (Karimen) Section */}
        <section className="mb-5">
          <h2 className="text-primary" style={{ fontFamily: "'Poppins', sans-serif'" }}>
            <FaBook className="me-2 text-success" /> 仮免許 (Karimen) - Provisional License
          </h2>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            仮免許 (Karimen) is the first step in obtaining a Japanese driving license. It allows you to practice driving under supervision on specially designed courses. This stage focuses on mastering basic driving maneuvers and understanding essential traffic rules.
          </p>
          <div className="text-center my-4">
            <FaRoad className="text-warning" size={80} />
          </div>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            <strong>Requirements:</strong>
            <ul>
              <li><FaCheckCircle className="text-success me-2" /> Minimum age: 18 years.</li>
              <li><FaCheckCircle className="text-success me-2" /> Completion of mandatory lessons at a certified driving school.</li>
              <li><FaCheckCircle className="text-success me-2" /> Passing a vision and hearing test.</li>
            </ul>
          </p>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            <strong>Test Details:</strong>
            <ul>
              <li><FaCheckCircle className="text-success me-2" /> <strong>Written Test:</strong> 50 true/false questions covering basic traffic rules and safety practices. Passing score: 45/50.</li>
              <li><FaCheckCircle className="text-success me-2" /> <strong>Practical Test:</strong> Conducted on a closed course, assessing basic driving skills like starting, stopping, turning, and parking.</li>
              <li><FaCheckCircle className="text-success me-2" /> The course includes challenges such as narrow roads, T-junctions, and figure-eight turns.</li>
            </ul>
          </p>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            <strong>Tips for Success:</strong>
            <ul>
              <li><FaCheckCircle className="text-success me-2" /> Study the official traffic rules handbook thoroughly.</li>
              <li><FaCheckCircle className="text-success me-2" /> Practice on a closed course to familiarize yourself with the test environment.</li>
              <li><FaCheckCircle className="text-success me-2" /> Take mock tests to assess your knowledge and readiness.</li>
            </ul>
          </p>
        </section>

        {/* 本免許 (Honmen) Section */}
        <section className="mb-5">
          <h2 className="text-primary" style={{ fontFamily: "'Poppins', sans-serif'" }}>
            <FaCar className="me-2 text-danger" /> 本免許 (Honmen) - Full License
          </h2>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            本免許 (Honmen) is the final stage of obtaining your Japanese driving license. It involves advanced testing to ensure you can safely drive on public roads. This stage assesses your ability to handle real-world traffic scenarios and complex driving situations.
          </p>
          <div className="text-center my-4">
            <FaCar className="text-primary" size={80} />
          </div>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            <strong>Requirements:</strong>
            <ul>
              <li><FaCheckCircle className="text-success me-2" /> A valid provisional license (仮免許).</li>
              <li><FaCheckCircle className="text-success me-2" /> Completion of supervised driving hours as required.</li>
              <li><FaCheckCircle className="text-success me-2" /> Passing a vision and hearing test (if not already passed during Karimen).</li>
            </ul>
          </p>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            <strong>Test Details:</strong>
            <ul>
              <li><FaCheckCircle className="text-success me-2" /> <strong>Written Test:</strong> 95 questions, including true/false and multiple-choice questions. Passing score: 90/100.</li>
              <li><FaCheckCircle className="text-success me-2" /> <strong>Practical Test:</strong> Conducted on public roads, assessing skills like lane changes, merging, and adherence to traffic laws.</li>
              <li><FaCheckCircle className="text-success me-2" /> Special attention is given to hazard perception and defensive driving techniques.</li>
            </ul>
          </p>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            <strong>Tips for Success:</strong>
            <ul>
              <li><FaCheckCircle className="text-success me-2" /> Gain plenty of supervised driving experience in various traffic conditions.</li>
              <li><FaCheckCircle className="text-success me-2" /> Practice real-world scenarios like merging, navigating intersections, and driving in heavy traffic.</li>
              <li><FaCheckCircle className="text-success me-2" /> Review advanced traffic laws and hazard perception strategies.</li>
            </ul>
          </p>
        </section>

        <hr className="my-5" />

        {/* Frequently Asked Questions (FAQ) Section */}
        <section className="mb-5">
          <h2 className="text-primary" style={{ fontFamily: "'Poppins', sans-serif'" }}>
            <FaQuestionCircle className="me-2 text-info" /> Frequently Asked Questions (FAQ)
          </h2>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            Here are some common questions and answers about the Saitama Driving License Test:
          </p>
          <div className="text-center my-4">
            <FaQuestionCircle className="text-info" size={80} />
          </div>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            <strong>Q: How long does it take to get a driving license in Saitama?</strong><br />
            <FaCheckCircle className="text-success me-2" /> A: The process typically takes 2-3 months, depending on your progress and the driving school's schedule.
          </p>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            <strong>Q: Can I take the driving test in English?</strong><br />
            <FaCheckCircle className="text-success me-2" /> A: Yes, some driving schools offer tests in English, but it's best to confirm with your chosen school.
          </p>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            <strong>Q: What happens if I fail the practical test?</strong><br />
            <FaCheckCircle className="text-success me-2" /> A: You can retake the test, but you may need to wait for a specific period and pay a retest fee.
          </p>
        </section>

        {/* Important Notes Section */}
        <section className="mb-5">
          <h2 className="text-primary" style={{ fontFamily: "'Poppins', sans-serif'" }}>
            <FaExclamationTriangle className="me-2 text-warning" /> Important Notes
          </h2>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            Before starting the process, keep the following in mind:
          </p>
          <div className="text-center my-4">
            <FaExclamationTriangle className="text-warning" size={80} />
          </div>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            <ul>
              <li><FaCheckCircle className="text-success me-2" /> Ensure you have all required documents, including proof of identity and residency.</li>
              <li><FaCheckCircle className="text-success me-2" /> Choose a certified driving school that offers both theoretical and practical training.</li>
              <li><FaCheckCircle className="text-success me-2" /> Be prepared for both the written and practical tests by studying and practicing regularly.</li>
            </ul>
          </p>
        </section>

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
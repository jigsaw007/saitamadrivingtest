import React from "react";
import Navbar from "../components/Navbar";
import { FaRoad, FaCar, FaBook, FaCheckCircle } from "react-icons/fa"; // Importing icons

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5 p-5 rounded shadow" style={{ backgroundColor: "#ffffff" }}>
        <h1 className="text-center mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <FaCar className="me-2 text-primary" /> About Saitama Driving License Test
        </h1>
        <p className="text-center mb-5" style={{ fontSize: "18px", fontFamily: "'Roboto', sans-serif" }}>
          Learn more about the two stages of the Saitama Driving License Test: <strong>仮免許 (Karimen)</strong> and <strong>本免許 (Honmen)</strong>.
        </p>

        {/* 仮免 (Karimen) Section */}
        <section className="mb-5">
          <h2 className="text-primary" style={{ fontFamily: "'Poppins', sans-serif'" }}>
            <FaBook className="me-2 text-success" /> 仮免許 (Karimen)
          </h2>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            The provisional license test, known as 仮免許 (Karimen), is the first step in the Japanese driving license process. It allows learners to practice driving under supervision on specially designed courses. This stage focuses on mastering basic driving maneuvers and understanding essential traffic rules.
          </p>
          <div className="text-center my-4">
            <FaRoad className="text-warning" size={80} />
          </div>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            <strong>Test Details:</strong>
            <ul>
              <li><FaCheckCircle className="text-success me-2" /> Written test to evaluate knowledge of basic traffic laws.</li>
              <li><FaCheckCircle className="text-success me-2" /> Practical driving test conducted on a closed course to assess basic maneuvers, including starting, stopping, turning, and parking.</li>
              <li><FaCheckCircle className="text-success me-2" /> The course includes challenges such as narrow roads, T-junctions, and figure-eight turns.</li>
            </ul>
          </p>
        </section>

        {/* 本免許 (Honmen) Section */}
        <section className="mb-5">
          <h2 className="text-primary" style={{ fontFamily: "'Poppins', sans-serif'" }}>
            <FaCar className="me-2 text-danger" /> 本免許 (Honmen)
          </h2>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            The final driving license test, known as 本免許 (Honmen), is the culmination of the driving license process. After obtaining the provisional license (仮免許), learners must gain sufficient real-world driving experience to qualify for this stage. This test assesses advanced driving skills and the ability to safely navigate real-world traffic scenarios.
          </p>
          <div className="text-center my-4">
            <FaCar className="text-primary" size={80} />
          </div>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            <strong>Test Details:</strong>
            <ul>
              <li><FaCheckCircle className="text-success me-2" /> Written test covering advanced traffic laws and scenarios.</li>
              <li><FaCheckCircle className="text-success me-2" /> Practical driving test conducted on public roads to evaluate safe driving skills, including lane changes, merging, and roundabout navigation.</li>
              <li><FaCheckCircle className="text-success me-2" /> Special attention is given to hazard perception and adherence to traffic laws.</li>
            </ul>
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;

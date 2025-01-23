import React from "react";
import Navbar from "../components/Navbar";
import { FaRoad, FaCar, FaBook, FaCheckCircle, FaUsers, FaChartLine, FaHandsHelping } from "react-icons/fa"; // Importing icons

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

        {/* Web Application Overview Section */}
        <section className="mb-5">
          <h2 className="text-primary" style={{ fontFamily: "'Poppins', sans-serif'" }}>
            <FaUsers className="me-2 text-info" /> About This Web Application
          </h2>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            This web application is designed to assist aspiring drivers in Saitama, Japan, to prepare effectively for both stages of the driving license test. Whether you are a beginner or looking to refine your driving skills, our platform offers comprehensive resources and tools to help you succeed.
          </p>
          <div className="text-center my-4">
            <FaChartLine className="text-info" size={80} />
          </div>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            <strong>Key Features:</strong>
            <ul>
              <li><FaCheckCircle className="text-success me-2" /> Interactive practice tests for both the written and practical exams.</li>
              <li><FaCheckCircle className="text-success me-2" /> Detailed explanations of traffic rules and driving techniques.</li>
              <li><FaCheckCircle className="text-success me-2" /> Real-world driving scenarios to enhance hazard perception skills.</li>
              <li><FaCheckCircle className="text-success me-2" /> Progress tracking to monitor your improvement over time.</li>
              <li><FaCheckCircle className="text-success me-2" /> Expert tips and advice from certified driving instructors.</li>
            </ul>
          </p>
        </section>

        {/* 仮免 (Karimen) Section */}
        <section className="mb-5">
          <h2 className="text-primary" style={{ fontFamily: "'Poppins', sans-serif'" }}>
            <FaBook className="me-2 text-success" /> 仮免許 (Karimen)
          </h2>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            The provisional license test, known as 仮免許 (Karimen), is the first step in the Japanese driving license process. It allows learners to practice driving under supervision on specially designed courses. This stage focuses on mastering basic driving maneuvers and understanding essential traffic rules.
          </p>
          <div className="text-center my-4">
            <FaCar className="text-primary" size={80} />
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
            <FaRoad className="text-warning" size={80} />
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

        {/* Benefits of Using the Web Application Section */}
        <section className="mb-5">
          <h2 className="text-primary" style={{ fontFamily: "'Poppins', sans-serif'" }}>
            <FaHandsHelping className="me-2 text-warning" /> Benefits of Using This Web Application
          </h2>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            Our web application is tailored to provide a seamless and effective learning experience for all users. Here are some of the key benefits you can expect:
          </p>
          <div className="text-center my-4">
            <FaHandsHelping className="text-warning" size={80} />
          </div>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            <strong>Benefits:</strong>
            <ul>
              <li><FaCheckCircle className="text-success me-2" /> Access to a wide range of practice questions and driving scenarios.</li>
              <li><FaCheckCircle className="text-success me-2" /> Personalized learning paths based on your progress and performance.</li>
              <li><FaCheckCircle className="text-success me-2" /> Instant feedback on practice tests to help you identify areas for improvement.</li>
              <li><FaCheckCircle className="text-success me-2" /> Mobile-friendly design for learning on the go.</li>
              <li><FaCheckCircle className="text-success me-2" /> Community support and forums to connect with other learners.</li>
            </ul>
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
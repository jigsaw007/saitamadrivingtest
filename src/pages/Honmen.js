import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FaClipboardList, FaClipboard, FaChartLine, FaAward, FaCheckCircle, FaTrash } from "react-icons/fa";

const Honmen = () => {
  const [scores, setScores] = useState({
    setA: [],
    setB: [],
    setC: [],
    setD: [],
    illustrations: [],
  });

  // Load scores from localStorage on component mount
  useEffect(() => {
    const savedScores = JSON.parse(localStorage.getItem("honmenScores")) || {
      setA: [],
      setB: [],
      setC: [],
      setD: [],
      illustrations: [],
    };
    setScores(savedScores);
  }, []);

  // Function to reset scores for a specific set
  const resetScores = (setName) => {
    const updatedScores = { ...scores, [setName]: [] };
    localStorage.setItem("honmenScores", JSON.stringify(updatedScores));
    setScores(updatedScores);
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5 p-5 rounded shadow" style={{ backgroundColor: "#ffffff" }}>
        <h1 className="text-center mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <FaAward className="me-2 text-primary" /> Honmen Test Overview
        </h1>
        <p className="text-center mb-5" style={{ fontSize: "18px", fontFamily: "'Roboto', sans-serif" }}>
          Understand the structure and scoring system of the Honmen test to prepare for success.
        </p>

        {/* Buttons Section */}
        <div className="text-center mb-5">
          <div className="row justify-content-center">
            <div className="col-md-2 col-sm-4 mb-3">
              <Link to="/setA">
                <button className="btn btn-primary w-100 shadow-sm p-3" style={{ fontSize: "16px" }}>
                  <FaClipboardList className="me-2" /> Set A
                </button>
              </Link>
            </div>
            <div className="col-md-2 col-sm-4 mb-3">
              <Link to="/setB">
                <button className="btn btn-success w-100 shadow-sm p-3" style={{ fontSize: "16px" }}>
                  <FaClipboard className="me-2" /> Set B
                </button>
              </Link>
            </div>
            <div className="col-md-2 col-sm-4 mb-3">
              <Link to="/setC">
                <button className="btn btn-warning w-100 shadow-sm p-3" style={{ fontSize: "16px" }}>
                  <FaChartLine className="me-2" /> Set C
                </button>
              </Link>
            </div>
            <div className="col-md-2 col-sm-4 mb-3">
              <Link to="/setD">
                <button className="btn btn-danger w-100 shadow-sm p-3" style={{ fontSize: "16px" }}>
                  <FaAward className="me-2" /> Set D
                </button>
              </Link>
            </div>
            <div className="col-md-2 col-sm-4 mb-3">
              <Link to="/illustrations">
                <button className="btn btn-secondary w-100 shadow-sm p-3" style={{ fontSize: "16px" }}>
                  <FaCheckCircle className="me-2" /> Illustrations
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scores Section */}
        <div className="mt-5 p-4 rounded shadow" style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}>
          <h2 className="text-center mb-4 text-primary" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <FaClipboardList className="me-2" /> Quiz Score Log
          </h2>
          <div className="row">
            {/* Set A Scores */}
            <div className="col-md-2 col-sm-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-header bg-primary text-white">
                  <h5 className="card-title mb-0" style={{ fontSize: "14px" }}>Set A</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    {scores.setA.map((score, index) => (
                      <li key={index} className="list-group-item" style={{ fontSize: "12px" }}>
                        <strong>{score.score}/{score.total}</strong> - {score.date} {score.time}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-danger btn-sm w-100"
                    onClick={() => resetScores("setA")}
                  >
                    <FaTrash className="me-1" /> Reset
                  </button>
                </div>
              </div>
            </div>

            {/* Set B Scores */}
            <div className="col-md-2 col-sm-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-header bg-success text-white">
                  <h5 className="card-title mb-0" style={{ fontSize: "14px" }}>Set B</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    {scores.setB.map((score, index) => (
                      <li key={index} className="list-group-item" style={{ fontSize: "12px" }}>
                        <strong>{score.score}/{score.total}</strong> - {score.date} {score.time}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-danger btn-sm w-100"
                    onClick={() => resetScores("setB")}
                  >
                    <FaTrash className="me-1" /> Reset
                  </button>
                </div>
              </div>
            </div>

            {/* Set C Scores */}
            <div className="col-md-2 col-sm-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-header bg-warning text-white">
                  <h5 className="card-title mb-0" style={{ fontSize: "14px" }}>Set C</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    {scores.setC.map((score, index) => (
                      <li key={index} className="list-group-item" style={{ fontSize: "12px" }}>
                        <strong>{score.score}/{score.total}</strong> - {score.date} {score.time}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-danger btn-sm w-100"
                    onClick={() => resetScores("setC")}
                  >
                    <FaTrash className="me-1" /> Reset
                  </button>
                </div>
              </div>
            </div>

            {/* Set D Scores */}
            <div className="col-md-2 col-sm-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-header bg-danger text-white">
                  <h5 className="card-title mb-0" style={{ fontSize: "14px" }}>Set D</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    {scores.setD.map((score, index) => (
                      <li key={index} className="list-group-item" style={{ fontSize: "12px" }}>
                        <strong>{score.score}/{score.total}</strong> - {score.date} {score.time}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-danger btn-sm w-100"
                    onClick={() => resetScores("setD")}
                  >
                    <FaTrash className="me-1" /> Reset
                  </button>
                </div>
              </div>
            </div>

            {/* Illustrations Scores */}
            <div className="col-md-2 col-sm-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-header bg-secondary text-white">
                  <h5 className="card-title mb-0" style={{ fontSize: "14px" }}>Illustrations</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    {scores.illustrations.map((score, index) => (
                      <li key={index} className="list-group-item" style={{ fontSize: "12px" }}>
                        <strong>{score.score}/{score.total}</strong> - {score.date} {score.time}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-danger btn-sm w-100"
                    onClick={() => resetScores("illustrations")}
                  >
                    <FaTrash className="me-1" /> Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scoring System Section */}
        <div className="scoring-system p-4 rounded shadow mt-5" style={{ backgroundColor: "#f9f9f9" }}>
          <h2 className="text-center mb-4 text-primary" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Scoring System
          </h2>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            The Honmen test is scored based on two key components:
          </p>
          <ul style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            <li><strong>Text-Based Questions:</strong> Worth a total of 90 points.</li>
            <li><strong>Illustration-Based Questions:</strong> Worth a total of 10 points (5 questions, 2 points each if answered correctly).</li>
          </ul>
          <p className="text-center text-success fw-bold" style={{ fontSize: "18px" }}>
            Full Marks: 100 | Pass Marks: 90
          </p>
        </div>

        {/* Important Information Section */}
        <div className="information mt-5 p-4 rounded shadow" style={{ backgroundColor: "#f0f9ff" }}>
          <h2 className="text-center mb-4 text-success" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Important Information
          </h2>
          <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            The Honmen test evaluates advanced driving skills and road safety knowledge. To pass:
          </p>
          <ul style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif'" }}>
            <li><FaCheckCircle className="text-success me-2" /> Achieve at least <strong>90 points</strong> out of 100.</li>
            <li><FaCheckCircle className="text-success me-2" /> Text-based questions contribute <strong>90 points</strong>.</li>
            <li><FaCheckCircle className="text-success me-2" /> Illustration-based questions contribute <strong>10 points</strong>.</li>
            <li><FaCheckCircle className="text-success me-2" /> Prepare thoroughly by reviewing traffic laws, road signs, and practical driving skills.</li>
          </ul>
          <p className="text-center text-danger fw-bold" style={{ fontSize: "18px" }}>
            Stay calm, focus on safety, and aim for a perfect score!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Honmen;
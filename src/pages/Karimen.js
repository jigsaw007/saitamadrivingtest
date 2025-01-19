import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Question from "../components/Question";
import ProgressBar from "../components/ProgressBar";
import { FaLightbulb, FaBookOpen, FaCheck, FaTrafficLight } from "react-icons/fa";

const Karimen = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  // Function to dynamically load the karimen.js file
  const loadKarimenData = async () => {
    const script = document.createElement("script");
    script.src = `${process.env.PUBLIC_URL}/data/karimen.js`;

    script.async = true;
    document.body.appendChild(script);
  
    return new Promise((resolve, reject) => {
      script.onload = () => {
        if (window.karimenQuestions) {
          resolve(window.karimenQuestions); // Load the questions
        } else {
          reject(new Error("Failed to load questions from karimen.js"));
        }
      };
      script.onerror = () => reject(new Error("Failed to load karimen.js"));
    });
  };
  

  // Initialize the quiz
  const startQuiz = async () => {
    const questionsData = await loadKarimenData();
    const shuffled = [...questionsData].sort(() => Math.random() - 0.5);
    setQuestions(shuffled.slice(0, 50)); // Pick 50 random questions
    setQuizStarted(true);
  };

  const handleAnswer = (isCorrect, userResponse) => {
    const normalizedResponse = String(userResponse).trim().toLowerCase(); // Ensure user response is normalized
    setUserAnswers([...userAnswers, normalizedResponse]); // Save user response

    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsQuizComplete(true);
    }
  };

  const renderResults = () => {
    return (
      <div className="card p-4 shadow mt-4">
        <h1 className="text-center text-primary" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Quiz Results
        </h1>
        <p className="text-center" style={{ fontSize: "18px", fontFamily: "'Roboto', sans-serif" }}>
          Your Score: <strong>{score} / {questions.length}</strong>
        </p>
        <h2
          className={score >= 45 ? "text-success text-center" : "text-danger text-center"}
        >
          {score >= 45 ? "PASS" : "FAIL"}
        </h2>
        <h3 className="mt-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Review Your Mistakes</h3>
        {questions.map((question, index) => {
          const userResponse = userAnswers[index] || ""; // Default to an empty string if undefined
          const correctAnswer = question.answer.trim().toLowerCase(); // Normalize correct answer

          // Ensure userResponse is normalized and compared
          const isCorrect = correctAnswer === userResponse;

          if (isCorrect) return null; // Skip correct questions

          return (
            <div key={index} className="mt-4">
              <h5 className="text-danger">Question {index + 1}:</h5>
              <p>{question.question}</p>
              {question.image && (
                <img
                src={`${process.env.PUBLIC_URL}/karimenimg/${question.image}`}
  alt="Question"
  className="img-fluid mb-3"
  style={{ maxHeight: "200px", borderRadius: "10px" }}
/>
              )}
              <div
                className="mb-2 p-2 bg-danger text-white"
                style={{ borderRadius: "5px" }}
              >
                <strong>Correct Answer: {question.answer.toUpperCase()}</strong>
                <span className="ms-3">
                  Your Answer: {userResponse ? userResponse.toUpperCase() : "No Answer"}
                </span>
                {question.explanation && (
                  <div className="mt-2">
                    <strong>Explanation: </strong>
                    {question.explanation}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        {!quizStarted ? (
          <div className="text-center">
            <h1 className="mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Karimen Test | 仮免許
            </h1>
            <p className="mb-3 text-secondary" style={{ fontSize: "18px" }}>
              Pass Marks: 45 | Total Questions: 50
            </p>
            <div
              className="p-4 mb-4 rounded shadow"
              style={{ backgroundColor: "#f9f9f9", border: "1px solid #ddd" }}
            >
              <h4 className="text-start mb-3 text-primary" style={{ fontFamily: "'Poppins', sans-serif" }}>
                <FaLightbulb className="me-2" /> Tips and Best Wishes
              </h4>
              <ul style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
                <li><FaCheck className="me-2 text-success" /> Read each question carefully and focus on key details.</li>
                <li><FaCheck className="me-2 text-success" /> Stay calm and answer with confidence.</li>
                <li><FaTrafficLight className="me-2 text-warning" /> Review your knowledge of road signs and traffic rules.</li>
              </ul>
              <p className="mt-3 text-secondary">Good luck on your Karimen test! You can do this!</p>
            </div>
            <button className="btn btn-primary btn-lg shadow" onClick={startQuiz}>
              Start Quiz
            </button>
          </div>
        ) : (
          <>
            <ProgressBar currentIndex={currentIndex} totalQuestions={questions.length} />
            {isQuizComplete ? (
              renderResults()
            ) : (
              <div className="card p-4 shadow">
                <Question
                  question={questions[currentIndex]}
                  onAnswer={(isCorrect, userResponse) => handleAnswer(isCorrect, userResponse)}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Karimen;

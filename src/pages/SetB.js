import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Question from "../components/Question";
import ProgressBar from "../components/ProgressBar"; // New ProgressBar component

const SetB = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]); // Track user answers

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/setB.json`)
      .then((response) => response.json())
      .then((data) => {
        const shuffledQuestions = data.sort(() => Math.random() - 0.5); // Shuffle questions
        setQuestions(shuffledQuestions);
      });
  }, []);

  const handleAnswer = (isCorrect, userResponse) => {
    setUserAnswers([...userAnswers, userResponse]); // Store user response

    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1); // Move to the next question
    } else {
      setIsQuizComplete(true); // End the quiz
    }
  };

  const renderResults = () => {
    return (
      <div className="card p-4 shadow">
        <h1 className="text-center" style={{ fontFamily: "'Poppins', sans-serif", color: "#28a745" }}>
          Quiz Results
        </h1>
        <p className="text-center" style={{ fontSize: "18px", fontFamily: "'Roboto', sans-serif" }}>
          Your Score: <strong>{score} / {questions.length}</strong>
        </p>
        <h2
          className={score >= (questions.length * 0.9) ? "text-success text-center" : "text-danger text-center"}
        >
          {score >= (questions.length * 0.9) ? "PASS" : "FAIL"}
        </h2>
        <h3 className="mt-4" style={{ fontFamily: "'Roboto', sans-serif" }}>Review Your Mistakes</h3>
        {questions.map((question, index) => {
          const userResponse = userAnswers[index];
          const isCorrect = String(question.answer) === String(userResponse);

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
                className={`mb-2 p-2 ${
                  String(question.answer) !== String(userResponse)
                    ? "bg-danger text-white"
                    : "bg-success text-white"
                }`}
                style={{ borderRadius: "5px" }}
              >
                <strong>Correct Answer: {String(question.answer).toUpperCase()}</strong>
                <span className="ms-3">
                  Your Answer: {String(userResponse).toUpperCase()}
                </span>
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
      <div className="container mt-5 p-5 rounded shadow" style={{ backgroundColor: "#ffffff" }}>
        {/* Added heading and subheading */}
        <h1 className="text-center mb-4 text-success" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Set B Quiz
        </h1>
        <p className="text-center mb-4" style={{ fontSize: "18px", fontFamily: "'Roboto', sans-serif" }}>
          Test your knowledge with the Set B Quiz. Answer all questions and aim for the highest score!
        </p>

        {/* Progress Bar */}
        <ProgressBar currentIndex={currentIndex} totalQuestions={questions.length} />

        {/* Quiz Content */}
        {isQuizComplete ? (
          renderResults()
        ) : (
          questions.length > 0 && (
            <div className="card p-4 shadow mt-4" style={{ minHeight: "400px" }}>
              <Question
                question={questions[currentIndex]}
                onAnswer={(isCorrect, userResponse) =>
                  handleAnswer(isCorrect, userResponse)
                }
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SetB;

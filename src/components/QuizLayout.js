import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Question from "./Question";

const QuizLayout = ({ fetchUrl }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        const shuffledQuestions = data.sort(() => Math.random() - 0.5);
        setQuestions(shuffledQuestions);
      });
  }, [fetchUrl]);

  const handleAnswer = (isCorrect) => {
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
      <div className="card p-4 shadow text-center">
        <h1>Quiz Results</h1>
        <p>
          Your Score: <strong>{score} / {questions.length}</strong>
        </p>
        <h2
          className={score >= (questions.length * 0.9) ? "text-success" : "text-danger"}
        >
          {score >= (questions.length * 0.9) ? "PASS" : "FAIL"}
        </h2>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        {isQuizComplete ? (
          renderResults()
        ) : (
          questions.length > 0 && (
            <div className="card p-4 shadow">
              <Question
                question={questions[currentIndex]}
                onAnswer={handleAnswer}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default QuizLayout;

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import IllustrationQuestion from "../components/IllustrationQuestion";

const Illustrations = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/illustrations.json`)
      .then((response) => response.json())
      .then((data) => {
        const randomQuestions = getRandomQuestions(data, 5); // Randomly pick 5 questions
        setQuestions(randomQuestions);
      });
  }, []);

  const getRandomQuestions = (questionsArray, count) => {
    const shuffled = [...questionsArray];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
  };

  const saveScore = (score, totalQuestions) => {
    const date = new Date();
    const scoreEntry = {
      score: score,
      total: totalQuestions,
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
    };

    const savedScores = JSON.parse(localStorage.getItem("honmenScores")) || {
      setA: [],
      setB: [],
      setC: [],
      setD: [],
      illustrations: [],
    };
    savedScores.illustrations.unshift(scoreEntry); // Add new score to the beginning of the array
    localStorage.setItem("honmenScores", JSON.stringify(savedScores));
  };

  const handleAnswer = (isCorrect, userResponse) => {
    setUserAnswers([...userAnswers, userResponse]);

    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsQuizComplete(true);
      saveScore(score + (isCorrect ? 1 : 0), questions.length); // Save the score
    }
  };

  const renderResults = () => {
    return (
      <div className="card p-4 shadow">
        <h1 className="text-center" style={{ fontFamily: "'Poppins', sans-serif", color: "#6c757d" }}>
          Quiz Results
        </h1>
        <p className="text-center" style={{ fontSize: "18px", fontFamily: "'Roboto', sans-serif" }}>
          Your Score: <strong>{score} / {questions.length}</strong>
        </p>
        <h2
          className={score >= questions.length * 0.9 ? "text-success text-center" : "text-danger text-center"}
        >
          {score >= questions.length * 0.9 ? "PASS" : "FAIL"}
        </h2>
        <h3 className="mt-4" style={{ fontFamily: "'Roboto', sans-serif" }}>Review Your Mistakes</h3>
        {questions.map((question, index) => {
          const userResponse = userAnswers[index];
          const isCorrect = question.options.every(
            (option, idx) => String(option.correctAnswer) === String(userResponse[idx])
          );

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
              {question.options.map((option, idx) => (
                <div
                  key={idx}
                  className={`mb-2 p-2 ${
                    String(option.correctAnswer) !== String(userResponse[idx])
                      ? "bg-danger text-white"
                      : "bg-success text-white"
                  }`}
                  style={{ borderRadius: "5px" }}
                >
                  <strong>{option.statement}</strong>
                  <span className="ms-3">
                    (Correct: {String(option.correctAnswer).toUpperCase()}, Your Answer: {String(userResponse[idx]).toUpperCase()})
                  </span>
                </div>
              ))}
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
        <h1 className="text-center mb-4 text-secondary" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Illustrations Quiz
        </h1>
        <p className="text-center mb-4" style={{ fontSize: "18px", fontFamily: "'Roboto', sans-serif" }}>
          Test your understanding with the Illustrations Quiz. Answer all questions and aim for the highest score!
        </p>
        <p className="text-center mb-4" style={{ fontSize: "16px", fontStyle: "italic" }}>
          Showing Random 5 Questions
        </p>

        {isQuizComplete ? (
          renderResults()
        ) : (
          questions.length > 0 && (
            <div className="card p-4 shadow mt-4" style={{ minHeight: "400px" }}>
              <IllustrationQuestion
                question={questions[currentIndex]}
                onAnswer={(isCorrect, userResponse) => handleAnswer(isCorrect, userResponse)}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Illustrations;
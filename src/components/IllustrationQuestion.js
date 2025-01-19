import React, { useState, useEffect } from "react";

const IllustrationQuestion = ({ question, onAnswer }) => {
  const [userAnswers, setUserAnswers] = useState(
    question.options.map(() => null) // Initialize answers as `null`
  );

  useEffect(() => {
    // Reset answers when the question changes
    setUserAnswers(question.options.map(() => null));
  }, [question]);

  const handleAnswer = (index, userAnswer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = userAnswer; // Update the answer for the specific option
    setUserAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    const isCorrect = question.options.every(
      (option, index) => String(option.correctAnswer) === String(userAnswers[index])
    );
    onAnswer(isCorrect, userAnswers); // Pass whether the answers are correct and the user's responses
  };

  return (
    <div>
      <h2 className="mb-4">{question.question}</h2>
      {question.image && (
        <img
        src={`${process.env.PUBLIC_URL}/${question.image}`}
          alt="Illustration"
          className="img-fluid mb-3"
          style={{ maxHeight: "300px", borderRadius: "10px" }}
        />
      )}
      <div className="mb-4">
        {question.options.map((option, index) => (
          <div key={index} className="mb-3">
            <p>{option.statement}</p>
            <button
              className={`btn me-2 ${
                userAnswers[index] === true ? "btn-warning" : "btn-outline-secondary"
              }`}
              onClick={() => handleAnswer(index, true)}
            >
              True
            </button>
            <button
              className={`btn ${
                userAnswers[index] === false ? "btn-warning" : "btn-outline-secondary"
              }`}
              onClick={() => handleAnswer(index, false)}
            >
              False
            </button>
          </div>
        ))}
      </div>
      {userAnswers.every((answer) => answer !== null) && ( // Only show Submit if all options are answered
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      )}
    </div>
  );
};

export default IllustrationQuestion;

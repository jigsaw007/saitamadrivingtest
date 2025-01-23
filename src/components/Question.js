import React from "react";

const Question = ({ question, onAnswer }) => {
  const handleAnswer = (userAnswer) => {
    const isCorrect = String(userAnswer) === String(question.answer);
    onAnswer(isCorrect, userAnswer);
  };

  return (
    <div style={{ position: "relative", minHeight: "500px" }}>
      {/* Display the question */}
      <h2 className="mb-4">{question.question}</h2>

      {/* Conditional rendering for image */}
      {question.image && question.image.trim() !== "" ? ( // Check if image exists and is not empty
        <img
        src={`${process.env.PUBLIC_URL}/${question.image}`}
          alt="Question"
          className="img-fluid mb-3"
          style={{ maxHeight: "300px", borderRadius: "10px" }}
        />
      ) : (
        // Placeholder for consistent spacing when no image is available
        <div
          className="mb-3 d-flex align-items-center justify-content-center"
          style={{
            height: "300px",
            backgroundColor: "#f8f9fa",
            borderRadius: "10px",
            border: "1px dashed #ccc",
          }}
        >
          <span style={{ color: "#777", fontSize: "14px" }}>No Image Available</span>
        </div>
      )}

      {/* Fixed Buttons for True/False */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        className="d-flex justify-content-center gap-3"
      >
        <button
          className="btn btn-success btn-lg"
          onClick={() => handleAnswer(true)}
        >
          True
        </button>
        <button
          className="btn btn-danger btn-lg"
          onClick={() => handleAnswer(false)}
        >
          False
        </button>
      </div>
    </div>
  );
};

export default Question;
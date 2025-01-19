import React from "react";

const ProgressBar = ({ currentIndex, totalQuestions }) => {
  const progressPercentage = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div className="mb-4">
      <div className="progress" style={{ height: "20px" }}>
        <div
          className="progress-bar bg-primary"
          role="progressbar"
          style={{ width: `${progressPercentage}%` }}
          aria-valuenow={progressPercentage}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {currentIndex + 1} / {totalQuestions}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

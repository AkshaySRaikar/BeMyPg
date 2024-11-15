import React, { useState } from 'react';

const RatingFeedback = ({ onSubmitFeedback }) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  // Function to handle star click
  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  // Submit feedback handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please provide a rating before submitting.");
      return;
    }
    onSubmitFeedback({ rating, feedback });
    setRating(0); // Reset after submit
    setFeedback(""); // Reset after submit
  };

  return (
    <div className="rating-feedback">
      <h2>Rate Your Stay</h2>
      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            onClick={() => handleStarClick(index)}
            style={{
              cursor: "pointer",
              color: rating > index ? "#FFD700" : "#e4e5e9", // Highlight stars
              fontSize: "1.5rem",
            }}
          >
            ★
          </span>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Leave your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows="4"
          style={{ width: "100%", margin: "10px 0" }}
          required
        />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default RatingFeedback;
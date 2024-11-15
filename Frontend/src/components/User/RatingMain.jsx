import React from 'react';
import RatingFeedback from './RatingMain';

const App = () => {
  const handleFeedbackSubmit = (feedbackData) => {
    // Process or store feedbackData (e.g., send to backend or log)
    console.log("User Feedback:", feedbackData);
  };

  return (
    <div>
      <h1>PG Feedback</h1>
      <RatingFeedback onSubmitFeedback={handleFeedbackSubmit} />
    </div>
  );
};

export default App;
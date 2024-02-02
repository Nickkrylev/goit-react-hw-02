import { useState, useEffect } from 'react';
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import './App.css';

function App() {
  // Load feedbackCounts from localStorage or use default values
  const initialFeedbackCounts = JSON.parse(localStorage.getItem('feedbackCounts')) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackCounts, setFeedbackCounts] = useState(initialFeedbackCounts);

  useEffect(() => {
    // Save feedbackCounts to localStorage whenever it changes
    localStorage.setItem('feedbackCounts', JSON.stringify(feedbackCounts));
  }, [feedbackCounts]);

  const handleFeedback = (feedbackType) => {
    if (feedbackType === 'reset') {
      setFeedbackCounts({ good: 0, neutral: 0, bad: 0 });
    } else {
      setFeedbackCounts((prevCounts) => ({
        ...prevCounts,
        [feedbackType]: prevCounts[feedbackType] + 1,
      }));
    }
  };

  return (
    <>
      <Description />
      <Options handleFeedback={handleFeedback} />
      <Feedback feedbackCounts={feedbackCounts} />
    </>
  );
}

export default App;

import { useState } from 'react';
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import './App.css';

function App() {
  const [feedbackCounts, setFeedbackCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

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

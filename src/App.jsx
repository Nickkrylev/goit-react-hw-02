import { useState, useEffect } from 'react';
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notificaton from './components/Notification/Notification';
import './App.css';

function App() {
  // Load feedbackCounts from localStorage or use default values
  const initialFeedbackCounts =  {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackCounts, setFeedbackCounts] = useState(JSON.parse(localStorage.getItem('feedbackCounts')) ?? initialFeedbackCounts);

  useEffect(() => {
    // Save feedbackCounts to localStorage whenever it changes
    localStorage.setItem('feedbackCounts', JSON.stringify(feedbackCounts));
  }, [feedbackCounts]);

  const handleFeedback = (feedbackType) => {

      setFeedbackCounts((prevCounts) => ({
        ...prevCounts,
        [feedbackType]: prevCounts[feedbackType] + 1,
      }));
    
  };
 const resetFeedbackCount = () =>{
  setFeedbackCounts(initialFeedbackCounts);
 }
 const totalFeedback = feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;
let isVisible = !!totalFeedback;
const positivePercentage =  ((feedbackCounts.good / totalFeedback) * 100).toFixed(2);

  return (
    <>
      <Description />
      <Options handleFeedback={handleFeedback} resetFeedbackCount={resetFeedbackCount} isVisible = {isVisible}/>
      {isVisible ? (
  <Feedback feedbackCounts={feedbackCounts} totalFeedback={totalFeedback} positivePercentage ={positivePercentage} />
) : ( <Notificaton />)}
    </>
  );
}

export default App;

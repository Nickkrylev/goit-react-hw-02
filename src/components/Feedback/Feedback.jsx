
function Feedback({ feedbackCounts }) {
  const totalFeedback = feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;
  const positivePercentage = totalFeedback === 0 ? 0 : (feedbackCounts.good / totalFeedback) * 100;

  return (
    <>
      <div>Good: {feedbackCounts.good}</div>
      <div>Neutral: {feedbackCounts.neutral}</div>
      <div>Bad: {feedbackCounts.bad}</div>
      <div>Total: {totalFeedback}</div>
      <div>Positive: {positivePercentage.toFixed(2)}%</div>
    </>
  );
}

export default Feedback;

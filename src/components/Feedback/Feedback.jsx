
function Feedback({ feedbackCounts,totalFeedback,positivePercentage }) {

  return (
    <>
      <div>Good: {feedbackCounts.good}</div>
      <div>Neutral: {feedbackCounts.neutral}</div>
      <div>Bad: {feedbackCounts.bad}</div>
      <div>Total: {totalFeedback}</div>
      <div>Positive: {positivePercentage}%</div>
    </>
  );
}

export default Feedback;

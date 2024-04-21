

function Options({ handleFeedback , resetFeedbackCount,isVisible}) {


  return (
    <>
      <button onClick={() => handleFeedback('good')}>Good</button>
      <button onClick={() => handleFeedback('neutral')}>Neutral</button>
      <button onClick={() => handleFeedback('bad')}>Bad</button>
      {isVisible &&(<button onClick={resetFeedbackCount}>Reset</button>)}
    </>
  );
}

export default Options;

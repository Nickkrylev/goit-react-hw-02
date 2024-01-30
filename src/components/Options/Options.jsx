import { useState } from 'react';

function Options({ handleFeedback }) {
  const handleClick = (feedbackType) => {
    handleFeedback(feedbackType);
  };

  return (
    <>
      <button onClick={() => handleClick('good')}>Good</button>
      <button onClick={() => handleClick('neutral')}>Neutral</button>
      <button onClick={() => handleClick('bad')}>Bad</button>
      <button onClick={() => handleClick('reset')}>Reset</button>
    </>
  );
}

export default Options;

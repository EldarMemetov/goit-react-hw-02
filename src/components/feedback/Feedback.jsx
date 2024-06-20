const Feedback = ({feedback: {good, neutral, bad}}) => {
  const totalFeedback  = good + neutral + bad;
  const positiveFeedback  = totalFeedback  ? Math.round((good / totalFeedback ) * 100) : 0;

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback }</p>
      <p>Positive: {positiveFeedback }%</p>
    </div>
  );
}

export default Feedback;
import './App.css';
import { useState, useEffect } from 'react';
import Options from './components/Options/Options';
import Feedback from './components/feedback/Feedback';
import Notification from './components/notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    return savedFeedback || { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  useEffect(() => {
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    document.title = `Feedback (${totalFeedback})`;
  }, [feedback]);

  const updateFeedback = (feedbackType ) => { setFeedback((prevFeedback) => ({ ...prevFeedback,[feedbackType ]: prevFeedback[feedbackType ] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div className="app-container">
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? ( <Feedback feedback={feedback} />) : ( <Notification />
      )}
    </div>
  );
};

export default App

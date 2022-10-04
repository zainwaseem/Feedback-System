import { useState } from "react";
import Header from "./components/Header";
import feedbackData from "./data/FeedbackData";
import { v4 as uuidv4 } from "uuid";

import FeedbackList from "./components/FeedbackList.jsx";

import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
function App() {
  const [feedback, setfeedback] = useState(feedbackData);
  function AddFeedback(newFeed) {
    newFeed.id = uuidv4;
    setfeedback([newFeed, ...feedback]);
  }
  const deleteFeedback = (id) => {
    if (window.confirm(`Are you sure you want to delete`)) {
      const deleted = feedback.filter((feedback) => feedback.id !== id);
      setfeedback(deleted);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm AddHanlde={AddFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
import Button from "./Button";
import RatingSelect from "./RatingSelect";
import Card from "./shared/Card";

const FeedbackForm = ({ AddHanlde }) => {
  const [text, setText] = useState("");
  const [BtnDisabled, setBtnDisabled] = useState(true);
  const [rating, setRatings] = useState(10);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Please Give feedback 10 Characters Long");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      AddHanlde(newFeedback);
      setText("");
      setBtnDisabled(true);
    }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us</h2>
        <RatingSelect select={(rating) => setRatings(rating)} />
        <div className="input-group">
          <input
            type="text"
            onChange={handleChange}
            placeholder="Write a review"
            value={text}
          />
          <Button type="text" isDisabled={BtnDisabled} version="primary">
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;

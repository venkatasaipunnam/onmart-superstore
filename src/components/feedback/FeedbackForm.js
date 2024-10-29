import React, { useState } from 'react';
import './Feedback.css';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({
    fullName: '',
    email: '',
    rating: 0,
    comment: '',
  });

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(feedback);
    // Reset form fields
    setFeedback({
      fullName: '',
      email: '',
      rating: 0,
      comment: '',
    });
  };

  return (
    <div className="feedback-form">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={feedback.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={feedback.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Rating</label>
          <div className="rating" style={{alignContent:'center'}}>
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="star-label">
                <input
                  type="radio"
                  name="rating"
                  value={value}
                  checked={feedback.rating === value}
                  onChange={handleChange}
                  required
                />
                <span className="star">&#9733;</span>
              </label>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            name="comment"
            value={feedback.comment}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
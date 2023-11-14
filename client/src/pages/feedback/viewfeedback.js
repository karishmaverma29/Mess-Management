import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Viewfeedback = () => {
  const [feedback, setFeedback] = useState([]);
  const [totalStudent, setTotalStudent] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [totalFoodRating, setTotalFoodRating] = useState(0);
  const [totalServiceRating, setTotalServiceRating] = useState(0);

  const getFeedback = async () => {
    try {
      const response = await axios.get('/api/v1/general/viewfeedback'); // Replace with the actual API endpoint
      setFeedback(response.data);

      // Calculate totals and counts
      setTotalFeedback(response.data.length);
      setTotalStudent(
        response.data.reduce((total, item) => {
          // Assuming each student gives feedback only once
          return total + (item.name ? 1 : 0);
        }, 0)
      );

      setTotalFoodRating(
        response.data.reduce((total, item) => {
          return total + (item.foodRating ? parseInt(item.foodRating) : 0);
        }, 0)
      );

      setTotalServiceRating(
        response.data.reduce((total, item) => {
          return total + (item.serviceRating ? parseInt(item.serviceRating) : 0);
        }, 0)
      );
    } catch (error) {
      console.error('Error fetching feedback data:', error);
    }
  };

  useEffect(() => {
    getFeedback();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Upcoming Feedback</h1>

      {totalFeedback === 0 ? (
        <p>No upcoming feedback available</p>
      ) : (
        <div>
          <p>Total Students: {totalStudent}</p>
          <p>Total Feedback: {totalFeedback}</p>
          <p>
            Average Food Rating: {totalFoodRating / totalFeedback} (out of 5)
          </p>
          <p>
            Average Service Rating: {totalServiceRating / totalFeedback} (out of 5)
          </p>

          <ul>
            {feedback.map((item) => (
              <li key={item._id}>
                <strong>Name:</strong> {item.name}
                <br />
                <strong>Food Rating:</strong> {item.foodRating}
                <br />
                <strong>Service Rating:</strong> {item.serviceRating}
                <br />
                <strong>Feedback:</strong> {item.feedback}
                <hr />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Viewfeedback;

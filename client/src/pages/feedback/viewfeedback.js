
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap"; 

const Viewfeedback = () => {
  const [feedback, setFeedback] = useState([]);
  const [totalStudent, setTotalStudent] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [totalFoodRating, setTotalFoodRating] = useState(0);
  const [totalServiceRating, setTotalServiceRating] = useState(0);

  const getFeedback = async () => {
    try {
      const response = await axios.get("/api/v1/general/viewfeedback"); 
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
          return (
            total + (item.serviceRating ? parseInt(item.serviceRating) : 0)
          );
        }, 0)
      );
    } catch (error) {
      console.error("Error fetching feedback data:", error);
    }
  };

  useEffect(() => {
    getFeedback();
    // eslint-disable-next-line
  }, []);

  return (
  <div>
    <h1 style={{ textAlign: "center", marginBottom: "20px", fontWeight: "bold" }}>Upcoming Feedback</h1>

    {totalFeedback === 0 ? (
      <p>No upcoming feedback available</p>
    ) : (
      <div>
        <Card style={{ padding: "20px", marginBottom: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", border: "2px solid #ccc", borderRadius: "8px", fontWeight: "bold" , marginLeft: "20px", marginRight: "20px"}}>
          <p style={{textDecoration:"underline"}}>Total Students: {totalStudent}</p>
          <p style={{textDecoration:"underline"}}>Total Feedback: {totalFeedback}</p>
          <p style={{textDecoration:"underline"}}>Average Food Rating: {totalFoodRating / totalFeedback} (out of 5)</p>
          <p style={{textDecoration:"underline"}}>Average Service Rating: {totalServiceRating / totalFeedback} (out of 5)</p>
        </Card>

        <ul>
          {feedback.map((item) => (
            <li key={item._id}>
              <Card
                style={{
                  padding: "20px",
                  marginBottom: "20px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  border: "2px solid #ccc",
                  borderRadius: "8px",
                }}
              >
                <strong>Name: {item.name}</strong> 
                <br />
                <strong>Food Rating: {item.foodRating}</strong> 
                <br />
                <strong>Service Rating: {item.serviceRating}</strong> 
                <br />
                <strong>Feedback:  {item.feedback}</strong>
              </Card>
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
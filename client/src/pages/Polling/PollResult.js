import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const PollResult = () => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([{ id: "", options: "", count: "" }]);
  const [pollId, setPollId] = useState("");

  useEffect(() => {
    // Fetch existing poll data if pollId is provided
    const fetchPollData = async () => {
      try {
        const response = await axios.get("/api/v1/general/getPoll");
        const pollData = response.data; // Assuming your backend provides poll data
        setQuestion(pollData.question);
        setOptions(pollData.options);
        setPollId(pollData._id); // Set the pollId state
        console.log(pollData);
      } catch (error) {
        console.error("Error fetching poll data:", error);
        // Handle errors here
      }
    };
    fetchPollData();
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await axios.delete(`/api/v1/general/deletepoll/${pollId}`);
      navigate("/dashboard/warden");
    } catch (error) {
      console.error("Error deleting poll:", error);
      // Handle errors here
    }
  };

  return (
    <div style={{ textAlign: "center", maxWidth: "400px", margin: "auto" }}>
      {pollId ? (
        <form
          // onSubmit={handleSubmit}
          style={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <label
            htmlFor="question"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Poll Question:
          </label>
          <p>{question}</p>
          <hr />
          <label
            htmlFor="options"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Options:
          </label>
          {options.map((option, index) => (
            <div key={option.id} style={{ marginBottom: "16px" }}>
              <label htmlFor={`option-${index}`}>
                {option.options}:{option.count}
              </label>
            </div>
          ))}

          <button
            type="button"
            onClick={handleSubmit}
            style={{
              backgroundColor: "#4caf50",
              color: "#fff",
              padding: "10px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Delete Poll
          </button>
        </form>
      ) : (
        <p>No poll available</p>
      )}
    </div>
  );
};

export default PollResult;

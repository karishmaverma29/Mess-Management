// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";
// import toast from "react-hot-toast";
// import { useAuth } from "../../context/auth";

// const Viewpoll = () => {
//   const navigate = useNavigate();
//   const [auth, setAuth] = useAuth();
//   const [question, setQuestion] = useState("");
//   const [options, setOptions] = useState([{ id: "", options: "", count: "" }]);
//   const [selectedOption, setSelectedOption] = useState({});
//   const [pollId, setPollId] = useState("");
//   const [validuser, setValidUser] = useState(0);
//   const username = auth?.user?.name;

//   useEffect(() => {
//     // Fetch existing poll data if pollId is provided

//     const fetchPollData = async () => {
//       try {
//         const response = await axios.get("/api/v1/general/getPoll");
//         const pollData = response.data; // Assuming your backend provides poll data
//         setQuestion(pollData.question);
//         setOptions(pollData.options);
//         setPollId(pollData._id);
//         const userExists = pollData.votedUsers.includes(username);
//         if (userExists) {
//           setValidUser(1);
//         }
//       } catch (error) {
//         console.error("Error fetching poll data:", error);
//         // Handle errors here
//       }
//     };
//     fetchPollData();
//   }, []);

//   // when submit button is clicked
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log(options[selectedOption]);
//     try {
//       const response = await axios.post("/api/v1/general/submitPoll", {
//         selectedOption: options[selectedOption],
//         username,
//       });
//       console.log("Poll updated successfully:", response.data);
//       navigate("/dashboard/student");
//     } catch (error) {
//       console.error("Error submitting poll:", error);
//     }
//   };
//   console.log(`your id is${validuser}`);
//   return (
//     <div style={{ textAlign: "center", maxWidth: "400px", margin: "auto" }}>
//       {validuser === 0 && pollId ? (
//         <form
//           onSubmit={handleSubmit}
//           style={{
//             backgroundColor: "#fff",
//             borderRadius: "8px",
//             padding: "20px",
//             boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <label
//             htmlFor="question"
//             style={{ display: "block", marginBottom: "8px" }}
//           >
//             Poll Question:
//           </label>
//           <p>{question}</p>
//           <hr />
//           <label
//             htmlFor="options"
//             style={{ display: "block", marginBottom: "8px" }}
//           >
//             Options:
//           </label>
//           {options.map((option, index) => (
//             <div key={option.id} style={{ marginBottom: "16px" }}>
//               <input
//                 type="radio"
//                 id={`option-${index}`}
//                 name="selectedOption"
//                 value={index}
//                 checked={selectedOption === index}
//                 onChange={() => setSelectedOption(index)}
//                 style={{
//                   marginRight: "8px",
//                 }}
//               />
//               <label htmlFor={`option-${index}`}>
//                 {option.options}
//                 {/* Adjust this line to display the option value */}
//               </label>
//             </div>
//           ))}

//           <button
//             type="submit"
//             style={{
//               backgroundColor: "#4caf50",
//               color: "#fff",
//               padding: "10px",
//               border: "none",
//               borderRadius: "4px",
//               cursor: "pointer",
//             }}
//           >
//             Submit
//           </button>
//         </form>
//       ) : validuser === 1 ? (
//         <p>You have done polling</p>
//       ) : (
//         <p>No poll available</p>
//       )}
//     </div>
//   );
// };

// export default Viewpoll;

// PollComponent.jsx

import React, { useState, useEffect } from "react";
import "./Viewpoll.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";

const Viewpoll = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([{ id: "", options: "", count: "" }]);
  const [selectedOption, setSelectedOption] = useState({});
  const [pollId, setPollId] = useState("");
  const [validuser, setValidUser] = useState(0);
  const username = auth?.user?.name;

  const handleOptionClick = (index) => {
    setSelectedOption(index === selectedOption ? null : index);
  };

  useEffect(() => {
    // Fetch existing poll data if pollId is provided

    const fetchPollData = async () => {
      try {
        const response = await axios.get("/api/v1/general/getPoll");
        const pollData = response.data; // Assuming your backend provides poll data
        setQuestion(pollData.question);
        setOptions(pollData.options);
        setPollId(pollData._id);
        const userExists = pollData.votedUsers.includes(username);
        if (userExists) {
          setValidUser(1);
        }
      } catch (error) {
        console.error("Error fetching poll data:", error);
        // Handle errors here
      }
    };
    fetchPollData();
  }, []);

  // when submit button is clicked
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(options[selectedOption]);
    try {
      const response = await axios.post("/api/v1/general/submitPoll", {
        selectedOption: options[selectedOption],
        username,
      });
      console.log("Poll updated successfully:", response.data);
      navigate("/dashboard/student");
    } catch (error) {
      console.error("Error submitting poll:", error);
    }
  };
  console.log(`your id is${validuser}`);

  return (
    <div>
      {validuser === 0 && pollId ? (
        <>
          <div className="wrapper">
            <header>Poll UI Design</header>
            <form onSubmit={handleSubmit}>
              <div className="poll-area">
                {options.map((option, index) => (
                  <label
                    key={option.id}
                    className={`opt-${index} ${
                      selectedOption === index - 1 ? "selected" : ""
                    }`}
                    onClick={() => handleOptionClick(index - 1)}
                  >
                    <div className="row">
                      <div className="column">
                        <span className="circle"></span>
                        <span className="text">
                          {index}.{option.options}
                        </span>
                      </div>
                      <span className="percent">{option.count}</span>
                    </div>
                    <div
                      className="progress"
                      style={{ "--w": 30 * index }}
                    ></div>
                  </label>
                ))}
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: "#4caf50",
                  color: "#fff",
                  padding: "10px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </>
      ) : validuser === 1 ? (
        <p>You have done polling</p>
      ) : (
        <p>No poll available</p>
      )}
    </div>
  );
};

export default Viewpoll;

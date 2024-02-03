// import React from "react";
// import Layout from "./../../components/Layout/Layout";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "../../styles/AuthStyles.css";
// import { useLocation } from "react-router-dom";
// import Cookies from "js-cookie";
// import { Link } from "react-router-dom";

// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";

// import { useAuth } from "../../context/auth";

// const Feedback = () => {
//   const [auth, setAuth] = useAuth();

//   const [foodRating, setFoodRating] = useState('');
//   const [serviceRating, setServiceRating] = useState('');
//   const [feedback, setFeedback] = useState('');

//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleFoodChange = (e) => {
//     setFoodRating(e.target.value);
//   };

//   const handleServiceChange = (e) => {
//     setServiceRating(e.target.value);
//   };

//   const handleFeedbackChange = (e) => {
//     setFeedback(e.target.value);
//   };

//   const name=auth?.user?.name;

//     const handleSubmit = async (e) => {
//         e.preventDefault(); // Prevent the default form submission behavior

//         try {
//           const res = await axios.post("/api/v1/general/feedback", {
//             foodRating,
//             serviceRating,
//             feedback,
//             name,

//           });

//           navigate("/dashboard/student");
//         } catch (error) {
//           console.log(error);
//           toast.error("Something went wrong");
//         }
//       };

//     // Your form submission logic or API call can go here

//     // Example: Logging form data to the console
//     console.log('Food Rating:', foodRating);
//     console.log('Service Rating:', serviceRating);
//     console.log('Feedback:', feedback);

//   return (

//       <Layout>
//         <div className="form-container" style={{ minHeight: "90vh" }}>
//           <form onSubmit={handleSubmit}>
//             <h4 className="title">Feedback Form</h4>

//             <div>
//   <label>Food:</label>
//   {[1, 2, 3, 4, 5].map((value) => (
//     <React.Fragment key={value}>
//       <input
//         type="radio"
//         name="food"
//         value={value}
//         id={`food${value}`}
//         checked={foodRating === String(value)}
//         onChange={handleFoodChange}
//       />
//       <label htmlFor={`food${value}`}>{value}</label>
//     </React.Fragment>
//   ))}
// </div>

// <div>
//   <label>Service:</label>
//   {[1, 2, 3, 4, 5].map((value) => (
//     <React.Fragment key={value}>
//       <input
//         type="radio"
//         name="service"
//         value={value}
//         id={`service${value}`}
//         checked={serviceRating === String(value)}
//         onChange={handleServiceChange}
//       />
//       <label htmlFor={`service${value}`}>{value}</label>
//     </React.Fragment>
//   ))}
// </div>

//             <div>
//               <label>Feedback:</label>
//               <textarea
//                 id="feedback"
//                 name="feedback"
//                 value={feedback}
//                 onChange={handleFeedbackChange}
//                 placeholder="Write your feedback here..."
//               />
//             </div>

//             <div>
//               <button type="submit">Submit</button>
//             </div>
//           </form>
//         </div>
//       </Layout>

//   );
// };

// export default Feedback;

// Feedback.js
import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import "./feedback.css";
import { Link } from "react-router-dom";

const Feedback = () => {
  const [auth, setAuth] = useAuth();
  const [foodRating, setFoodRating] = useState(0);
  const [serviceRating, setServiceRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const navigate = useNavigate();

  const handleFoodChange = (newValue) => {
    setFoodRating(newValue);
  };

  const handleServiceChange = (newValue) => {
    setServiceRating(newValue);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const name = auth?.user?.name;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/v1/general/feedback", {
        foodRating,
        serviceRating,
        feedback,
        name,
      });

      navigate("/dashboard/student");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <div
        className="main-class"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margintop: 70,
        }}
      >
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h4 className="title">Feedback Form</h4>

            <div className="rating">
              <label style={{ fontSize: "1.5rem" }}>Food:</label>
              <Rating
                name="foodRating"
                value={foodRating}
                onChange={(event, newValue) => handleFoodChange(newValue)}
              />
            </div>

            <div className="rating">
              <label style={{ fontSize: "1.5rem" }}>Service:</label>
              <Rating
                name="serviceRating"
                value={serviceRating}
                onChange={(event, newValue) => handleServiceChange(newValue)}
              />
            </div>

            <div className="feedback">
              <textarea
                id="feedback"
                name="feedback"
                value={feedback}
                onChange={handleFeedbackChange}
                placeholder="Write your feedback here..."
              />
            </div>

            <div className="btn-group">
              <button type="submit" className="btn submit">
                Submit
              </button>
              <Link to="/dashboard/student" className="btn cancel">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Feedback;

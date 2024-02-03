import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
// const AnimatedForm = () => {
//   const [name, setName] = useState('');
//   const [reg, setReg] = useState('');
//   const [complain, setComplain] = useState('');

//   const navigate= useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/api/v1/general/complain", {
//         name,
//         reg,
//         complain
//       });

//       navigate("/dashboard/viewcomplain");
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }

//   };

const AnimatedForm = () => {
  const [auth, setAuth] = useAuth();
  const name = auth?.user?.name;
  const [complain, setComplain] = useState("");
  const [reg, setReg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const res = await axios.post("/api/v1/general/complain", {
        name,
        reg,
        complain,
      });

      navigate("/dashboard/student/viewcomplain");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="form-container">
      <form>
        <div className="form-group">
          <input type="text" id="name" placeholder=" " value={name} />
          <label htmlFor="name">Name</label>
        </div>

        <div className="form-group">
          <input
            type="text"
            id="reg"
            placeholder=" "
            value={reg}
            onChange={(e) => setReg(e.target.value)}
          />
          <label htmlFor="reg">Registration No.</label>
        </div>

        <div className="form-group">
          <input
            type="text"
            id="complain"
            placeholder=" "
            value={complain}
            onChange={(e) => setComplain(e.target.value)}
          />
          <label htmlFor="complain">Complain</label>
        </div>

        <button type="submit" className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
    
  );
};

export default AnimatedForm;

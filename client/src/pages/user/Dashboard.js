// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Layout from "../../components/Layout/Layout";
// import { NavLink } from "react-router-dom";
// const Dashboard = () => {
//   return (
//     <Layout>
//       <h1>User panel</h1>
//       <NavLink to="/dashboard/student/complain">
//         <button type="button" class="btn btn-outline-danger">
//           Complain
//         </button>
//       </NavLink>
//       <hr />
//       <NavLink to="/dashboard/student/viewcomplain">
//         <button type="button" className="btn btn-primary">
//           View Complain
//         </button>
//       </NavLink>
//       <hr />
//       <NavLink to="/dashboard/student/getmenu">
//         <button type="button" className="btn btn-primary">
//           mess menu
//         </button>
//       </NavLink>
//       <hr />
//       <NavLink to="/dashboard/student/viewpoll">
//         <button type="button" className="btn btn-primary">
//           View poll
//         </button>
//       </NavLink>
//       <hr />
//       <NavLink to="/dashboard/student/feedback">
//         <button type="button" className="btn btn-outline-primary">
//           Feedback
//         </button>
//       </NavLink>

//       <NavLink to="/dashboard/student/nutrition">
//         <button type="button" className="btn btn-outline-primary">
//           Nutrition
//           </button>
//       </NavLink>
//       <hr />
//       <NavLink to="/dashboard/student/tracker">
//         <button type="button" className="btn btn-outline-primary">
//           Tracker
//         </button>
//       </NavLink>
//       <hr />
//       <NavLink to="/dashboard/student/profile">
//         <button type="button" className="btn btn-outline-primary">
//           profile
//         </button>
//       </NavLink>
//     </Layout>
//   );
// };
// export default Dashboard;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import { NavLink } from "react-router-dom";
const Dashboard = () => {
  return (
    <Layout>
      <h1 style={{ textAlign: "center" }}>User Panel</h1>
      <div
        style={{
          backgroundColor: "#f4f4f4",
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px 30px",
          margin: "0 30px",
          textAlign: "center", // Center-align the content within the card
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap", // Allow items to wrap to the next line
            justifyContent: "space-around",
            margin: "5px 0",
          }}
        >
          <div style={{ width: "30%", marginBottom: "10px" }}>
            <NavLink
              to="/dashboard/student/complain"
              style={{ textDecoration: "none" }}
            >
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{
                  width: "100%", // Set the button width to 100%
                  padding: "10px 20px", // Adjusted padding for a smaller button
                  boxSizing: "border-box", // Ensure padding is included in the total width
                }}
              >
                Complain
              </button>
            </NavLink>
          </div>
          <div style={{ width: "30%", marginBottom: "10px" }}>
            <NavLink
              to="/dashboard/student/viewcomplain"
              style={{ textDecoration: "none" }}
            >
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{
                  width: "100%", // Set the button width to 100%
                  padding: "10px 20px", // Adjusted padding for a smaller button
                  boxSizing: "border-box", // Ensure padding is included in the total width
                }}
              >
                View Complain
              </button>
            </NavLink>
          </div>
          <div style={{ width: "30%", marginBottom: "10px" }}>
            <NavLink
              to="/dashboard/student/getmenu"
              style={{ textDecoration: "none" }}
            >
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{
                  width: "100%", // Set the button width to 100%
                  padding: "10px 20px", // Adjusted padding for a smaller button
                  boxSizing: "border-box", // Ensure padding is included in the total width
                }}
              >
                Mess Menu
              </button>
            </NavLink>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap", // Allow items to wrap to the next line
            justifyContent: "space-around",
            margin: "5px 0",
          }}
        >
          <div style={{ width: "30%", marginBottom: "10px" }}>
            <NavLink
              to="/dashboard/student/viewpoll"
              style={{ textDecoration: "none" }}
            >
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{
                  width: "100%", // Set the button width to 100%
                  padding: "10px 20px", // Adjusted padding for a smaller button
                  boxSizing: "border-box", // Ensure padding is included in the total width
                }}
              >
                View Poll
              </button>
            </NavLink>
          </div>
          <div style={{ width: "30%", marginBottom: "10px" }}>
            <NavLink
              to="/dashboard/student/feedback"
              style={{ textDecoration: "none" }}
            >
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{
                  width: "100%", // Set the button width to 100%
                  padding: "10px 20px", // Adjusted padding for a smaller button
                  boxSizing: "border-box", // Ensure padding is included in the total width
                }}
              >
                Feedback
              </button>
            </NavLink>
          </div>
          <div style={{ width: "30%", marginBottom: "10px" }}>
            <NavLink
              to="/dashboard/student/nutrition"
              style={{ textDecoration: "none" }}
            >
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{
                  width: "100%", // Set the button width to 100%
                  padding: "10px 20px", // Adjusted padding for a smaller button
                  boxSizing: "border-box", // Ensure padding is included in the total width
                }}
              >
                Nutrition
              </button>
            </NavLink>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap", // Allow items to wrap to the next line
            justifyContent: "space-around",
            margin: "5px 0",
          }}
        >
          <div style={{ width: "30%", marginBottom: "10px" }}>
            <NavLink
              to="/dashboard/student/tracker"
              style={{ textDecoration: "none" }}
            >
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{
                  width: "100%", // Set the button width to 100%
                  padding: "10px 20px", // Adjusted padding for a smaller button
                  boxSizing: "border-box", // Ensure padding is included in the total width
                }}
              >
                Tracker
              </button>
            </NavLink>
          </div>
          <div style={{ width: "30%", marginBottom: "10px" }}>
            <NavLink
              to="/dashboard/student/profile"
              style={{ textDecoration: "none" }}
            >
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{
                  width: "100%", // Set the button width to 100%
                  padding: "10px 20px", // Adjusted padding for a smaller button
                  boxSizing: "border-box", // Ensure padding is included in the total width
                }}
              >
                Profile
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Dashboard;

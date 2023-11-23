

// import React from "react";
// import { NavLink } from "react-router-dom";
// import Layout from "../../components/Layout/Layout";

// const CardLayout = ({ to, children }) => {
//   return (
//     <div className="col-md-4 mb-3">
//     <NavLink to={to} style={{ textDecoration: 'none' , color: 'black'}}>
//       <div className="card">
//         <div className="card-body">
//           <p style={{ fontWeight: 'bold', color: 'black' }}>{children}</p>
//         </div>
//       </div>
//     </NavLink>
//   </div>
//   );
// };

// const WardenDashboard = () => {
//   return (
//     <div>
//       <h1>Warden Page</h1>

//       <div className="row">
//         <CardLayout to="/dashboard/warden/manureq">
//           <p>Menu Update Req</p>
//         </CardLayout>

//         <CardLayout to="/dashboard/warden/viewcomplain">
//           <p>View Complain</p>
//         </CardLayout>

//         <CardLayout to="/dashboard/warden/createnewpoll">
//           <p>Create Poll</p>
//         </CardLayout>

//         <CardLayout to="/dashboard/warden/pollresult">
//           <p>Poll Result</p>
//         </CardLayout>

//         <CardLayout to="/dashboard/warden/viewfeedback">
//           <p>View Feedback</p>
//         </CardLayout>

//         <CardLayout to="/dashboard/warden/viewuser">
//           <p>View User</p>
//         </CardLayout>
//       </div>
//       <hr />
//       <NavLink to="/dashboard/warden/viewpayments">
//         <button type="button" className="btn btn-primary">
//           View payments
//         </button>
//       </NavLink>
//     </div>
//   );
// };

// export default WardenDashboard;

import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const WardenDashboard = () => {
  return (
    <Layout>
      <h1 style={{ textAlign: "center" }}>Warden Page</h1>
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
              to="/dashboard/warden/manureq"
              style={{ textDecoration: "none" }}
            >
              <button
                type="button"
                className="btn btn-primary"
                style={{
                  width: "100%", // Set the button width to 100%
                  padding: "10px 20px", // Adjusted padding for a smaller button
                  boxSizing: "border-box", // Ensure padding is included in the total width
                }}
              >
                Menu Update Req
              </button>
            </NavLink>
          </div>
          <div style={{ width: "30%", marginBottom: "10px" }}>
            <NavLink
              to="/dashboard/warden/viewcomplain"
              style={{ textDecoration: "none" }}
            >
              <button
                type="button"
                className="btn btn-primary"
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
              to="/dashboard/warden/createnewpoll"
              style={{ textDecoration: "none" }}
            >
              <button
                type="button"
                className="btn btn-primary"
                style={{
                  width: "100%", // Set the button width to 100%
                  padding: "10px 20px", // Adjusted padding for a smaller button
                  boxSizing: "border-box", // Ensure padding is included in the total width
                }}
              >
                Create Poll
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
              to="/dashboard/warden/pollresult"
              style={{ textDecoration: "none" }}
            >
              <button
                type="button"
                className="btn btn-primary"
                style={{
                  width: "100%", // Set the button width to 100%
                  padding: "10px 20px", // Adjusted padding for a smaller button
                  boxSizing: "border-box", // Ensure padding is included in the total width
                }}
              >
                Poll Result
              </button>
            </NavLink>
          </div>
          <div style={{ width: "30%", marginBottom: "10px" }}>
            <NavLink
              to="/dashboard/warden/viewfeedback"
              style={{ textDecoration: "none" }}
            >
              <button
                type="button"
                className="btn btn-primary"
                style={{
                  width: "100%", // Set the button width to 100%
                  padding: "10px 20px", // Adjusted padding for a smaller button
                  boxSizing: "border-box", // Ensure padding is included in the total width
                }}
              >
                View Feedback
              </button>
            </NavLink>
          </div>
          <div style={{ width: "30%", marginBottom: "10px" }}>
            <NavLink
              to="/dashboard/warden/viewuser"
              style={{ textDecoration: "none" }}
            >
              <button
                type="button"
                className="btn btn-primary"
                style={{
                  width: "100%", // Set the button width to 100%
                  padding: "10px 20px", // Adjusted padding for a smaller button
                  boxSizing: "border-box", // Ensure padding is included in the total width
                }}
              >
                View User
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
              to="/dashboard/warden/viewpayments"
              style={{ textDecoration: "none" }}
            >
              <button
                type="button"
                className="btn btn-primary"
                style={{
                  width: "100%", // Set the button width to 100%
                  padding: "10px 20px", // Adjusted padding for a smaller button
                  boxSizing: "border-box", // Ensure padding is included in the total width
                }}
              >
                View Payments
              </button>
            </NavLink>
          </div>
          {/* Add more buttons in the same way */}
        </div>
      </div>
    </Layout>
  );
};

export default WardenDashboard;
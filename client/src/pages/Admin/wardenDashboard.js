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
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
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
                className="btn btn-outline-primary"
                style={{
                  width: "100%",
                  padding: "10px 20px",
                  boxSizing: "border-box",
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
                className="btn btn-outline-primary"
                style={{
                  width: "100%",
                  padding: "10px 20px",
                  boxSizing: "border-box",
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
                className="btn btn-outline-primary"
                style={{
                  width: "100%",
                  padding: "10px 20px",
                  boxSizing: "border-box",
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
            flexWrap: "wrap",
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
                className="btn btn-outline-primary"
                style={{
                  width: "100%",
                  padding: "10px 20px",
                  boxSizing: "border-box",
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
                className="btn btn-outline-primary"
                style={{
                  width: "100%",
                  padding: "10px 20px",
                  boxSizing: "border-box",
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
                className="btn btn-outline-primary"
                style={{
                  width: "100%",
                  padding: "10px 20px",
                  boxSizing: "border-box",
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
            flexWrap: "wrap",
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
                className="btn btn-outline-primary"
                style={{
                  width: "100%",
                  padding: "10px 20px",
                  boxSizing: "border-box",
                }}
              >
                View Payments
              </button>
            </NavLink>
          </div>

          <div style={{ width: "30%", marginBottom: "10px" }}>
            <NavLink
              to="/dashboard/warden/viewexpenses"
              style={{ textDecoration: "none" }}
            >
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{
                  width: "100%",
                  padding: "10px 20px",
                  boxSizing: "border-box",
                }}
              >
                View Expenses
              </button>
            </NavLink>
          </div>

          <div style={{ width: "30%", marginBottom: "10px" }}>
            <NavLink
              to="/dashboard/warden/createnotice"
              style={{ textDecoration: "none" }}
            >
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{
                  width: "100%",
                  padding: "10px 20px",
                  boxSizing: "border-box",
                }}
              >
                CreateNotice
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WardenDashboard;

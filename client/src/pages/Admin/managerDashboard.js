

import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import { NavLink } from "react-router-dom";

const ManagerDashboard = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    // Fetch menu data from your backend API
    axios
      .get("/api/v1/auth/getmenu") // Replace with the actual API endpoint
      .then((response) => {
        setMenuData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching menu data:", error);
      });
  }, []);

  return (
    <Layout>
      <h1 style={{ textAlign: "center" }}>Manager Panel</h1>
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
              to="/dashboard/manager/updatemenu"
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
                Update Mess Menu
              </button>
            </NavLink>
          </div>
          <div style={{ width: "30%", marginBottom: "10px" }}>
            <NavLink
              to="/dashboard/manager/recipe"
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
                Recipe
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ManagerDashboard;
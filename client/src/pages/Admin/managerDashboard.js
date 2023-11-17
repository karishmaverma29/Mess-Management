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
      <h1>manager panel</h1>

      <NavLink to="/dashboard/manager/updatemenu">
        <button type="button" className="btn btn-primary">
          Update mess menu
        </button>
      </NavLink>
      <hr/>
      <NavLink to="/dashboard/manager/recipe">
        <button type="button" className="btn btn-primary">
         Recipe
        </button>
      </NavLink>

    </Layout>
  );
};

export default ManagerDashboard;

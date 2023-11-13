import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import { NavLink } from "react-router-dom";
const Dashboard = () => {
  return (
    <Layout>
      <h1>User panel</h1>

      <NavLink to="/dashboard/student/getmenu">
        <button type="button" className="btn btn-primary">
          mess menu
        </button>
      </NavLink>
    </Layout>
  );
};

export default Dashboard;

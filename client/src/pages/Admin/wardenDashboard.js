import React from "react";
import Layout from "../../components/Layout/Layout";
import { NavLink } from "react-router-dom";
const WardenDashboard = () => {
  return (
    <Layout>
      <h1>warden  Page</h1>
      <NavLink to="/dashboard/warden/viewcomplain">
  <button type="button" className="btn btn-primary">View Complain</button>
</NavLink>
    </Layout>
  );
};

export default WardenDashboard;
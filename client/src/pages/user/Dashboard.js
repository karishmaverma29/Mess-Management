import React from "react";
import Layout from "../../components/Layout/Layout";
import { NavLink } from "react-router-dom";
const Dashboard = () => {
  return (
    <Layout>
      <h1>Dashborad Page</h1>
      <NavLink to="/dashboard/student/complain">
      <button type="button" class="btn btn-outline-danger">Complain</button>
</NavLink>

<NavLink to="/dashboard/student/viewcomplain">
  <button type="button" className="btn btn-primary">View Complain</button>
</NavLink>
    </Layout>
  );
};

export default Dashboard;
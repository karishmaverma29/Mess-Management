import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import { NavLink } from "react-router-dom";
const WardenDashboard = () => {
  return (
    <Layout>

      <h1>warden Page</h1>
      <NavLink to="/dashboard/warden/manureq">
        <button type="button" className="btn btn-primary">
          menu update req
        </button>
      </NavLink>
      <NavLink to="/dashboard/warden/viewcomplain">
  <button type="button" className="btn btn-primary">View Complain</button>

</NavLink>
<hr/>
<NavLink to="/dashboard/warden/viewfeedback">
  <button type="button" className="btn btn-primary">View feedback</button>
</NavLink>

    </Layout>
  );
};

export default WardenDashboard;

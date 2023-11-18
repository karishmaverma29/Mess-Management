import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import { NavLink } from "react-router-dom";
const Dashboard = () => {
  return (
    <Layout>
      <h1>User panel</h1>
      <NavLink to="/dashboard/student/complain">
        <button type="button" class="btn btn-outline-danger">
          Complain
        </button>
      </NavLink>
      <hr />
      <NavLink to="/dashboard/student/viewcomplain">
        <button type="button" className="btn btn-primary">
          View Complain
        </button>
      </NavLink>
      <hr />
      <NavLink to="/dashboard/student/getmenu">
        <button type="button" className="btn btn-primary">
          mess menu
        </button>
      </NavLink>
      <hr />
      <NavLink to="/dashboard/student/viewpoll">
        <button type="button" className="btn btn-primary">
          View poll
        </button>
      </NavLink>
      <hr />
      <NavLink to="/dashboard/student/feedback">
        <button type="button" className="btn btn-outline-primary">
          Feedback
        </button>
      </NavLink>

      <NavLink to="/dashboard/student/nutrition">
        <button type="button" className="btn btn-outline-primary">
          Nutrition
          </button>
      </NavLink>
      <hr />
      <NavLink to="/dashboard/student/tracker">
        <button type="button" className="btn btn-outline-primary">
          Tracker
        </button>
      </NavLink>
    </Layout>
  );
};

export default Dashboard;

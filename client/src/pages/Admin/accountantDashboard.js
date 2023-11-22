import React from "react";
import Layout from "../../components/Layout/Layout";
import { NavLink } from "react-router-dom";
const AccountantDashboard = () => {
  return (
    <Layout>
      <h1>accountant Page</h1>
      

      <NavLink to="/dashboard/accountant/expenses">
        <button type="button" className="btn btn-danger">
          Weekly Expenses
        </button>
      </NavLink>
    </Layout>
  );
};

export default AccountantDashboard;
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import PrivateRoute from "./components/Routes/Private";
import Dashboard from "./pages/user/Dashboard";
import AdminRoute from "./components/Routes/AdminRoute";

import WardenDashboard from "./pages/Admin/wardenDashboard";
import ManagerDashboard from "./pages/Admin/managerDashboard";
import AccountantDashboard from "./pages/Admin/accountantDashboard";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* //for student */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="student" element={<Dashboard />} />
        </Route>

        {/* for admin  */}
        <Route path="/dashboard" element={<AdminRoute/>}>
          <Route path="warden" element={<WardenDashboard />} />
          <Route path="manager" element={<ManagerDashboard/>} />
          <Route path="accountant" element={<AccountantDashboard />} />
        </Route>
        


        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
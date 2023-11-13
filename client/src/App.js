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
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassward";
import Messmenu from "./pages/Messmenu/Messmenu";
import Complain from './pages/Complain/Complain';
import View from "./pages/Complain/viewComplain";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* //for student */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="student" element={<Dashboard />} />
          
        </Route>
  
        <Route path="/dashboard/student/complain" element={<Complain />} />

        <Route path="/dashboard/student/viewcomplain" element={<View />} />
        <Route path="/dashboard/warden/viewcomplain" element={<View />} />

        

        {/* for admin  */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="warden" element={<WardenDashboard />} />
          <Route path="manager" element={<ManagerDashboard />} />
          <Route path="accountant" element={<AccountantDashboard />} />
        </Route>

        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/dashboard/manager/updatemenu" element={<Messmenu/>}></Route>


        
        
        <Route
          path="/reset_password/:id/:token"
          element={<ResetPassword />}
        ></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;

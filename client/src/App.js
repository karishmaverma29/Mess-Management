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
import Complain from "./pages/Complain/Complain";
import View from "./pages/Complain/viewComplain";
import UserMenu from "./pages/user/userMenu";
import Menureq from "./pages/Admin/menureq";
import Createpoll from "./pages/Polling/Createpoll";
import Viewpoll from "./pages/Polling/Viewpoll";
import PollResult from "./pages/Polling/PollResult";
import CreatenewPoll from "./pages/Polling/CreateNewpoll";
import Feedback from "./pages/feedback/feedback";
import Viewfeedback from "./pages/feedback/viewfeedback";
import Viewuser from "./pages/user/viewuser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* //for student */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="student" element={<Dashboard />} />
        </Route>

        {/* feedback and complain routes  */}
        <Route path="/dashboard/student/complain" element={<Complain />} />

        <Route path="/dashboard/student/viewcomplain" element={<View />} />

        <Route path="/dashboard/student/feedback" element={<Feedback />} />

        <Route path="/dashboard/warden/viewcomplain" element={<View />} />
        <Route
          path="/dashboard/warden/viewfeedback"
          element={<Viewfeedback />}
        />

        {/* for admin  */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="warden" element={<WardenDashboard />} />
          <Route path="manager" element={<ManagerDashboard />} />
          <Route path="accountant" element={<AccountantDashboard />} />
        </Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/dashboard/student/getmenu" element={<UserMenu />}></Route>
        <Route path="/dashboard/warden/manureq" element={<Menureq />}></Route>
        <Route
          path="/dashboard/manager/updatemenu"
          element={<Messmenu />}
        ></Route>

        {/* poll routes  */}
        <Route
          path="/dashboard/warden/createnewpoll"
          element={<CreatenewPoll />}
        ></Route>
        <Route
          path="/dashboard/warden/createpoll"
          element={<Createpoll />}
        ></Route>
        <Route
          path="/dashboard/student/viewpoll"
          element={<Viewpoll />}
        ></Route>
        <Route
          path="/dashboard/warden/pollresult"
          element={<PollResult />}
        ></Route>
        <Route path="/dashboard/warden/viewuser" element={<Viewuser />}></Route>
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

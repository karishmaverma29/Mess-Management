// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Layout from "../../components/Layout/Layout";
// import { NavLink } from "react-router-dom";
// const CardLayout = ({ children }) => {
//   return (
//     <div className="card">
//       <div className="card-body">
//         {children}
//       </div>
//     </div>
//   );
// };
    

// const WardenDashboard = () => {
//   return (
//     <div>
//       <h1>Warden Page</h1>

//       <CardLayout>
//         <NavLink to="/dashboard/warden/manureq">
//           <button type="button" className="btn btn-primary">
//             Menu Update Req
//           </button>
//         </NavLink>
//       </CardLayout>

//       <hr />

//       <CardLayout>
//         <NavLink to="/dashboard/warden/viewcomplain">
//           <button type="button" className="btn btn-primary">
//             View Complain
//           </button>
//         </NavLink>
//       </CardLayout>

//       <hr />

//       <CardLayout>
//         <NavLink to="/dashboard/warden/createnewpoll">
//           <button type="button" className="btn btn-primary">
//             Create Poll
//           </button>
//         </NavLink>
//       </CardLayout>

//       <hr />

//       <CardLayout>
//         <NavLink to="/dashboard/warden/pollresult">
//           <button type="button" className="btn btn-primary">
//             Poll Result
//           </button>
//         </NavLink>
//       </CardLayout>

//       <hr />

//       <CardLayout>
//         <NavLink to="/dashboard/warden/viewfeedback">
//           <button type="button" className="btn btn-primary">
//             View Feedback
//           </button>
//         </NavLink>
//       </CardLayout>

//       <hr />

//       <CardLayout>
//         <NavLink to="/dashboard/warden/viewuser">
//           <button type="button" className="btn btn-primary">
//             View User
//           </button>
//         </NavLink>
//       </CardLayout>
//     </div>
//   );
// };
// export default WardenDashboard;

// import React from "react";
// import { NavLink } from "react-router-dom";
// import Layout from "../../components/Layout/Layout";

// const CardLayout = ({ children }) => {
//   return (
//     <div className="col-md-4 mb-3"> {/* Use col-md-4 for each card, mb-3 for margin-bottom */}
//       <div className="card">
//         <div className="card-body">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// const WardenDashboard = () => {
//   return (
//     <div>
//       <h1>Warden Page</h1>

//       <div className="row">
//         <CardLayout>
//           <NavLink to="/dashboard/warden/manureq">
//             <button type="button" className="btn btn-primary">
//               Menu Update Req
//             </button>
//           </NavLink>
//         </CardLayout>

//         <CardLayout>
//           <NavLink to="/dashboard/warden/viewcomplain">
//             <button type="button" className="btn btn-primary">
//               View Complain
//             </button>
//           </NavLink>
//         </CardLayout>

//         <CardLayout>
//           <NavLink to="/dashboard/warden/createnewpoll">
//             <button type="button" className="btn btn-primary">
//               Create Poll
//             </button>
//           </NavLink>
//         </CardLayout>

//         <CardLayout>
//           <NavLink to="/dashboard/warden/pollresult">
//             <button type="button" className="btn btn-primary">
//               Poll Result
//             </button>
//           </NavLink>
//         </CardLayout>

//         <CardLayout>
//           <NavLink to="/dashboard/warden/viewfeedback">
//             <button type="button" className="btn btn-primary">
//               View Feedback
//             </button>
//           </NavLink>
//         </CardLayout>

//         <CardLayout>
//           <NavLink to="/dashboard/warden/viewuser">
//             <button type="button" className="btn btn-primary">
//               View User
//             </button>
//           </NavLink>
//         </CardLayout>
//       </div>
//     </div>
//   );
// };

// export default WardenDashboard;

// import React from "react";
// import { NavLink } from "react-router-dom";
// import Layout from "../../components/Layout/Layout";

// const CardLayout = ({ to, children }) => {
//   return (
//     <div className="col-md-4 mb-3">
//       <NavLink to={to} style={{ textDecoration: 'none' }}>
//         <div className="card">
//           <div className="card-body">
//             {children}
//           </div>
//         </div>
//       </NavLink>
//     </div>
//   );
// };

// const WardenDashboard = () => {
//   return (
//     <div>
//       <h1>Warden Page</h1>

//       <div className="row">
//         <CardLayout to="/dashboard/warden/manureq">
//           <button type="button" className="btn btn-primary">
//             Menu Update Req
//           </button>
//         </CardLayout>

//         <CardLayout to="/dashboard/warden/viewcomplain">
//           <button type="button" className="btn btn-primary">
//             View Complain
//           </button>
//         </CardLayout>

//         <CardLayout to="/dashboard/warden/createnewpoll">
//           <button type="button" className="btn btn-primary">
//             Create Poll
//           </button>
//         </CardLayout>

//         <CardLayout to="/dashboard/warden/pollresult">
//           <button type="button" className="btn btn-primary">
//             Poll Result
//           </button>
//         </CardLayout>

//         <CardLayout to="/dashboard/warden/viewfeedback">
//           <button type="button" className="btn btn-primary">
//             View Feedback
//           </button>
//         </CardLayout>

//         <CardLayout to="/dashboard/warden/viewuser">
//           <button type="button" className="btn btn-primary">
//             View User
//           </button>
//         </CardLayout>
//       </div>
//     </div>
//   );
// };



// export default WardenDashboard;

import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const CardLayout = ({ to, children }) => {
  return (
    <div className="col-md-4 mb-3">
    <NavLink to={to} style={{ textDecoration: 'none' , color: 'black'}}>
      <div className="card">
        <div className="card-body">
          <p style={{ fontWeight: 'bold', color: 'black' }}>{children}</p>
        </div>
      </div>
    </NavLink>
  </div>
  );
};

const WardenDashboard = () => {
  return (
    <div>
      <h1>Warden Page</h1>

      <div className="row">
        <CardLayout to="/dashboard/warden/manureq">
          <p>Menu Update Req</p>
        </CardLayout>

        <CardLayout to="/dashboard/warden/viewcomplain">
          <p>View Complain</p>
        </CardLayout>

        <CardLayout to="/dashboard/warden/createnewpoll">
          <p>Create Poll</p>
        </CardLayout>

        <CardLayout to="/dashboard/warden/pollresult">
          <p>Poll Result</p>
        </CardLayout>

        <CardLayout to="/dashboard/warden/viewfeedback">
          <p>View Feedback</p>
        </CardLayout>

        <CardLayout to="/dashboard/warden/viewuser">
          <p>View User</p>
        </CardLayout>
      </div>
    </div>
  );
};

export default WardenDashboard;

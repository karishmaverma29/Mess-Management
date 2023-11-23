// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Layout from "../../components/Layout/Layout";
// import { NavLink } from "react-router-dom";

// const Menureq = () => {
//   const [menuRequests, setMenuRequests] = useState([]);
//   const [comments, setComments] = useState({});

//   const fetchMenuRequests = async () => {
//     try {
//       const response = await axios.get("/api/v1/general/viewmessreq");
//       setMenuRequests(response.data.data);
//     } catch (error) {
//       console.error("Error fetching menu requests:", error.message);
//     }
//   };

//   useEffect(() => {
//     fetchMenuRequests();
//   }, []);

//   const handleAction = async (menuRequestId) => {
//     try {
//       await axios.put("/api/v1/general/approvemenureq", {
//         menuRequestId,
//         comment: comments[menuRequestId] || "", // Get the comment from the state
//       });
//       // Reload the page after removing the request
//       window.location.reload();
//     } catch (error) {
//       console.error("Error fetching menu requests:", error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>Menu Requests</h1>
//       {menuRequests.map(
//         (item, index) =>
//           item.status === "0" && (
//             <div key={index}>
//               <h3>Manager Requests:</h3>
//               <ul>
//                 {item.managerreq.map((request, reqIndex) => (
//                   <li key={reqIndex}>{request}</li>
//                 ))}
//               </ul>

//               {/* Input field for comments or additional information */}
//               <input
//                 type="text"
//                 value={comments[item._id] || ""}
//                 onChange={(e) =>
//                   setComments({ ...comments, [item._id]: e.target.value })
//                 }
//                 placeholder="Enter comments..."
//               />

//               {/* Clickable buttons for approve and reject */}
//               <button onClick={() => handleAction(item._id)}>Approve</button>
//             </div>
//           )
//       )}
//     </div>
//   );
// };

// export default Menureq;
import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import { NavLink } from "react-router-dom";

const Menureq = () => {
  const [menuRequests, setMenuRequests] = useState([]);
  const [comments, setComments] = useState({});

  const fetchMenuRequests = async () => {
    try {
      const response = await axios.get("/api/v1/general/viewmessreq");
      setMenuRequests(response.data.data);
    } catch (error) {
      console.error("Error fetching menu requests:", error.message);
    }
  };

  useEffect(() => {
    fetchMenuRequests();
  }, []);

  const handleAction = async (menuRequestId) => {
    try {
      await axios.put("/api/v1/general/approvemenureq", {
        menuRequestId,
        comment: comments[menuRequestId] || "", // Get the comment from the state
      });
      // Reload the page after removing the request
      window.location.reload();
    } catch (error) {
      console.error("Error fetching menu requests:", error.message);
    }
  };

  return (
    <div>
      <h1>Menu Requests</h1>
      {menuRequests.map(
        (item, index) =>
          item.status === "0" && (
            <div key={index}>
              <h3>Manager Requests:</h3>
              <ul>
                {item.managerreq.map((request, reqIndex) => (
                  <li key={reqIndex}>{request}</li>
                ))}
              </ul>

              {/* Input field for comments or additional information */}
              <input
                type="text"
                value={comments[item._id] || ""}
                onChange={(e) =>
                  setComments({ ...comments, [item._id]: e.target.value })
                }
                placeholder="Enter comments..."
              />

              {/* Clickable buttons for approve and reject */}
              <button onClick={() => handleAction(item._id)}>Approve</button>
            </div>
          )
      )}
    </div>
  );
};

export default Menureq;
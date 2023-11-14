import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "../../context/auth";

const View = () => {
  const [complain, setComplain] = useState([]);
  const [auth, setAuth] = useAuth();

  const handleApproveComplain = async (id) => {
    try {
      // Send a PUT request to your backend API to update the complaint status
      const response = await axios.put(`/api/v1/general/resolvecomplain/${id}`); // Include the complaint ID in the URL
      window.location.reload();
    } catch (error) {
      console.error("Error in resolving complain data:", error);
    }
  };

  const Getcomplain = async () => {
    try {
      const response = await axios.get("/api/v1/general/viewcomplain"); // Replace with the actual API endpoint
      setComplain(response.data);
    } catch (error) {
      console.error("Error fetching complain data:", error);
    }
  };

  useEffect(() => {
    // Fetch complain data from your backend API
    Getcomplain();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      {complain.map((c) => (
        <div key={c.reg} style={{ marginBottom: "20px" }}>
          <h2 style={{ fontWeight: "bold" }}>Name: {c.name}</h2>
          <h3 style={{ fontWeight: "bold" }}>Reg no.: {c.reg}</h3>
          <p style={{ fontWeight: "bold" }}>Complain: {c.complain}</p>

          {auth?.user?.role === 1 ? (
            c.resolve === "1" ? (
              <p style={{ fontWeight: "bold" }}>Status: Resolved</p>
            ) : (
              <>
                <button onClick={() => handleApproveComplain(c._id)}>
                  Approve Complain
                </button>
                <p style={{ fontWeight: "bold" }}>Status: Unresolved</p>
              </>
            )
          ) : c.resolve === "0" ? (
            <p style={{ fontWeight: "bold" }}>Status: Unresolved</p>
          ) : (
            <p style={{ fontWeight: "bold" }}>Status: Resolved</p>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default View;

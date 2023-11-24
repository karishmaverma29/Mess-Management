import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from 'react-bootstrap';
import { useAuth } from "../../context/auth";

const View = () => {
  const [complain, setComplain] = useState([]);
  const [auth, setAuth] = useAuth();
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleApproveComplain = async (id) => {
    try {
      const response = await axios.put(`/api/v1/general/resolvecomplain/${id}`);
      window.location.reload();
    } catch (error) {
      console.error("Error in resolving complain data:", error);
    }
  };

  const Getcomplain = async () => {
    try {
      const response = await axios.get("/api/v1/general/viewcomplain");
      setComplain(response.data);
    } catch (error) {
      console.error("Error fetching complain data:", error);
    }
  };

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  useEffect(() => {
    Getcomplain();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "20px",fontWeight:"bold" }}>Complaints</h1>
  
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
        {complain.map((c, index) => (
          <Card
            key={c.reg}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={handleCardLeave}
            onClick={handleCardLeave}
            style={{
              width: "30%", // Adjust the width to 30%
              margin: "1.5%", // Adjust the margin
              boxSizing: "border-box",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              border: "2px solid #ccc",
              borderRadius: "8px",
              transition: "transform 0.3s ease-in-out",
              transform: `scale(${hoveredCard === index ? 1.05 : 1})`,
            }}
          >
            <div style={{ marginBottom: "10px", marginLeft: "20px", marginTop: "20px" }}>
              <h4 style={{ fontWeight: "bold" }}>Name: {c.name}</h4>
              <h4 style={{ fontWeight: "bold" }}>Reg no.: {c.reg}</h4>
              <h5 style={{ fontWeight: "bold" }}>Complain: </h5>
              <div style={{ border: "2px solid #ccc", borderRadius: "8px", padding: "10px", paddingLeft: "10px" }}>
                {c.complain}
              </div>
              <hr />
  
              {auth?.user?.role === 1 ? (
                c.resolve === "1" ? (
                  <p style={{ fontWeight: "bold" }}>Status: Resolved</p>
                ) : (
                  <>
                    <Button onClick={() => handleApproveComplain(c._id)}>
                      Approve Complain
                    </Button>
                    <hr />
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
          </Card>
        ))}
      </div>
    </div>
  );
              }
  
export default View;


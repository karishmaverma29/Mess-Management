// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Alert from "react-bootstrap/Alert";
// import Button from "react-bootstrap/Button";
// import toast from "react-hot-toast";
// import { Modal } from "react-bootstrap";

// const Viewpayments = () => {
//   const [Allpayment, setAllpayment] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedImage, setSelectedImage] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");

//   const Getallpayment = async () => {
//     try {
//       const { data } = await axios.get("/api/v1/general/getpayment");
//       if (data && data.success && Array.isArray(data.payments)) {
//         setAllpayment(data.payments);
//       } else {
//         toast.error("Invalid API response format");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Something Went Wrong");
//     }
//   };

//   const handleApprove = async (userid, id) => {
//     try {
//       const response = await axios.put(
//         `/api/v1/general/verifypayment?userid=${userid}&id=${id}`
//       );
//       console.log(response);
//       window.location.reload();
//     } catch (error) {
//       console.error(error);
//       toast.error("Something Went Wrong");
//     }
//   };

//   const handleKeyDown = (e) => {
//     // Check if the pressed key is Enter (key code 13)
//     if (e.key === "Enter") {
//       handleSearch();
//     }
//   };

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get("/api/v1/general/searchgetpayment", {
//         params: { reg: searchQuery },
//       });

//       if (response.data && response.data.success) {
//         setAllpayment(response.data.payments);
//       } else {
//         setAllpayment([]);
//       }
//     } catch (error) {
//       console.error("Error fetching filtered user data:", error);
//     }
//   };

//   useEffect(() => {
//     Getallpayment();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div>
//       <div
//         style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}
//       >
//         <input
//           type="text"
//           placeholder="Search by registration ID"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           onKeyDown={handleKeyDown}
//           style={{
//             padding: "8px",
//             marginRight: "8px",
//             borderRadius: "4px",
//             border: "1px solid #ccc",
//             width: "200px",
//           }}
//         />
//         <Button
//           variant="primary"
//           onClick={handleSearch}
//           style={{ padding: "8px", borderRadius: "4px" }}
//         >
//           Search
//         </Button>
//       </div>
//       <div style={{ display: "flex", flexWrap: "wrap" }}>
//         {Allpayment.map((c) => (
//           <div
//             key={c.reg}
//             style={{
//               width: "30%",
//               margin: "1.5%",
//               boxSizing: "border-box",
//               padding: "20px",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//               border: "2px solid #ccc",
//               borderRadius: "8px",
//               transition: "transform 0.3s ease-in-out",
//               ":hover": {
//                 transform: "scale(1.05)",
//               },
//             }}
//           >
//             <div>
//               <h4 style={{ fontWeight: "bold" }}>Name: {c.name}</h4>
//               <h4 style={{ fontWeight: "bold" }}>Reg no.: {c.reg}</h4>
//               <h4 style={{ fontWeight: "bold" }}>
//                 Description: {c.description}
//               </h4>
//               <img
//                 src={`/api/v1/general/paymentReceipt/${c._id}`}
//                 alt="Payment Image"
//                 style={{
//                   maxWidth: "100%",
//                   maxHeight: "150px",
//                   borderRadius: "8px",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => {
//                   setSelectedImage(`/api/v1/general/paymentReceipt/${c._id}`);
//                   setShowModal(true);
//                 }}
//               />
//               {c.verify === "0" ? (
//                 <button
//                   type="button"
//                   className="btn btn-success m-lg-5"
//                   onClick={() => handleApprove(c.student, c._id)}
//                 >
//                   Verify
//                 </button>
//               ) : (
//                 <span style={{ marginLeft: "50px" }}>Verified</span>
//               )}
//               <hr />
//             </div>
//             <Modal show={showModal} onHide={() => setShowModal(false)}>
//               <Modal.Header closeButton>
//                 <Modal.Title>Payment Image</Modal.Title>
//               </Modal.Header>
//               <Modal.Body>
//                 <img
//                   src={selectedImage}
//                   alt="Payment Image"
//                   style={{
//                     width: "100%",
//                     maxHeight: "500px",
//                     objectFit: "contain",
//                   }}
//                 />
//               </Modal.Body>
//             </Modal>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Viewpayments;
import axios from "axios";
import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import toast from "react-hot-toast";
import { Modal } from "react-bootstrap";

const Viewpayments = () => {
  const [Allpayment, setAllpayment] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

  const Getallpayment = async () => {
    try {
      const { data } = await axios.get("/api/v1/general/getpayment");
      if (data && data.success && Array.isArray(data.payments)) {
        setAllpayment(data.payments);
      } else {
        toast.error("Invalid API response format");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something Went Wrong");
    }
  };

  const handleApprove = async (userid, id) => {
    try {
      const response = await axios.put(
        `/api/v1/general/verifypayment?userid=${userid}&id=${id}`
      );
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.error(error);
      toast.error("Something Went Wrong");
    }
  };

  const handleKeyDown = (e) => {
    // Check if the pressed key is Enter (key code 13)
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get("/api/v1/general/searchgetpayment", {
        params: { reg: searchQuery },
      });

      if (response.data && response.data.success) {
        setAllpayment(response.data.payments);
      } else {
        setAllpayment([]);
      }
    } catch (error) {
      console.error("Error fetching filtered user data:", error);
    }
  };

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  useEffect(() => {
    Getallpayment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center", // Center the content horizontally
          marginTop: "20px", // Add margin from the top
        }}
      >
        <input
          type="text"
          placeholder="Search by registration ID"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            padding: "8px",
            marginRight: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            width: "200px",
          }}
        />
        <Button
          variant="primary"
          onClick={handleSearch}
          style={{ padding: "8px", borderRadius: "4px" }}
        >
          Search
        </Button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Allpayment.map((c, index) => (
          <div
            key={c.reg}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={handleCardLeave}
            onClick={handleCardLeave}
            style={{
              width: "30%",
              margin: "1.5%",
              boxSizing: "border-box",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              border: "2px solid #ccc",
              borderRadius: "8px",
              transition: "transform 0.3s ease-in-out",
              transform: `scale(${hoveredCard === index ? 1.05 : 1})`,
            }}
          >
            <div>
              <h4 style={{ fontWeight: "bold" }}>Name: {c.name}</h4>
              <h4 style={{ fontWeight: "bold" }}>Reg no.: {c.reg}</h4>
              <h4 style={{ fontWeight: "bold" }}>
                Description: {c.description}
              </h4>
              <img
                src={`/api/v1/general/paymentReceipt/${c._id}`}
                alt="Payment Image"
                style={{
                  maxWidth: "100%",
                  maxHeight: "150px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setSelectedImage(`/api/v1/general/paymentReceipt/${c._id}`);
                  setShowModal(true);
                }}
              />
              {c.verify === "0" ? (
                <button
                  type="button"
                  className="btn btn-success m-lg-5"
                  onClick={() => handleApprove(c.student, c._id)}
                >
                  Verify
                </button>
              ) : (
                <span style={{ marginLeft: "50px" }}>Verified</span>
              )}
              <hr />
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Payment Image</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img
                  src={selectedImage}
                  alt="Payment Image"
                  style={{
                    width: "100%",
                    maxHeight: "500px",
                    objectFit: "contain",
                  }}
                />
              </Modal.Body>
            </Modal>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Viewpayments;
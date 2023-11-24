import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useAuth } from "../../context/auth";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const [avatar, setAvatar] = useState(null);
  const [auth, setAuth] = useAuth();
  const [singleUser, setSingleUser] = useState(null);
  const [phone, setPhone] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(true);

  const currUser = auth.user;

  useEffect(() => {
    const fetchData = async () => {
      if (auth.user && auth.user._id) {
        try {
          const response = await axios.get(
            `/api/v1/general/myprofile?userId=${auth.user._id}`
          );
          setSingleUser(response.data);
          setPhone(response.data.phone);
          setYear(response.data.year);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching user data:", error);
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [auth.user]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleSave = async () => {
    try {
      const id = singleUser._id;
      const response = await axios.put(
        `/api/v1/general/updateProfile/${id}`,
        { phone, year },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Profile data saved:", response.data);
      window.alert("profile updated successfully");
    } catch (error) {
      window.alert("Profile is not updated");
      console.error("Error saving profile data:", error);
    }
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div
          className="container bootstrap snippets bootdey"
          style={{ maxWidth: "800px", margin: "50px auto" }}
        >
          <h1 className="text-primary text-center mb-4">Edit Profile</h1>
          <div className="row">
            <div className="col-md-3">
              <div className="text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  className="avatar img-circle img-thumbnail"
                  alt="avatar"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <h6 className="mt-3">Upload a different photo...</h6>
                <input
                  type="file"
                  className="form-control"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            <div className="col-md-9 personal-info">
              <h2>Personal info</h2>
              <form className="form-horizontal" role="form">
                <div className="form-group mb-3">
                  <label
                    className="col-lg-3 control-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Name
                  </label>
                  <div className="col-lg-8">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      value={currUser.name}
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label
                    className="col-lg-3 control-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Reg No.
                  </label>
                  <div className="col-lg-8">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      value={singleUser ? singleUser.reg : ""}
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label
                    className="col-lg-3 control-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Email
                  </label>
                  <div className="col-lg-8">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      value={currUser.email}
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label
                    className="col-lg-3 control-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Phone No.:
                  </label>
                  <div className="col-lg-8">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label
                    className="col-lg-3 control-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Year
                  </label>
                  <div className="col-lg-8">
                    <select
                      className="form-control form-control-lg"
                      value={year}
                      onChange={handleYearChange}
                    >
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year</option>
                    </select>
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label
                    className="col-lg-3 control-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Hostel
                  </label>
                  <div className="col-lg-8">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      value={currUser.hostel}
                      readOnly
                    />
                  </div>
                </div>

                <div className="form-group mb-3">
                  <div className="col-lg-offset-3 col-lg-8">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                  </div>
                </div>

                <NavLink to="/dashboard/student/profile/payment">
                  <button type="button" className="btn btn-danger btn-lg">
                    Payment
                  </button>
                </NavLink>
                {singleUser && singleUser.paid === "1" ? (
                  <span
                    style={{
                      margin: "0 10px",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                    }}
                  >
                    Status: Paid{singleUser.verified ? " and Verified" : ""}
                  </span>
                ) : (
                  <span
                    style={{
                      margin: "0 10px",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                    }}
                  >
                    Status: Unpaid
                  </span>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;

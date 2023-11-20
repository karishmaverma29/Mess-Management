import React, { useEffect } from "react";
import "../../styles/profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useAuth } from "../../context/auth";
import axios from "axios";

const Profile = () => {
  const [avatar, setAvatar] = useState(null);
  const [auth, setAuth] = useAuth();
  const [singleUser, setSingleUser] = useState(null);
  const [phone, setPhone] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(true); // New state variable for loading

  const currUser = auth.user;
  //getting single user data from backend

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
  }, [auth.user]); // Include auth.user in the dependency array

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
      // Show success alert
      console.log("Setting showAlert to true");
    } catch (error) {
      // Show error alert
      window.alert("Profile is not updated");
      console.error("Error saving profile data:", error);
    }
  };

  const handleYearChange = (e) => {
    // Update the state with the new value entered in the input field
    setYear(e.target.value);
  };

  const handlePhoneChange = (e) => {
    // Update the state with the new value entered in the input field
    setPhone(e.target.value);
  };

  return (
    <div>
      {loading ? ( // Display a loading indicator while data is being fetched
        <p>Loading...</p>
      ) : (
        <div className="container bootstrap snippets bootdey">
          <h1 className="text-primary">Edit Profile</h1>
          <hr />
          <div className="row">
            <div className="col-md-3">
              <div className="text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  className="avatar img-circle img-thumbnail"
                  alt="avatar"
                />
                <h6>Upload a different photo...</h6>

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
                <div className="form-group">
                  <label className="col-lg-3 control-label">Name</label>
                  <div className="col-lg-8">
                    <input
                      className="form-control"
                      type="text"
                      value={currUser.name}
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">Reg No.</label>
                  <div className="col-lg-8">
                    <input
                      className="form-control"
                      type="text"
                      value={singleUser ? singleUser.reg : ""}
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">Email</label>
                  <div className="col-lg-8">
                    <input
                      className="form-control"
                      type="text"
                      value={currUser.email}
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">Phone No.:</label>
                  <div className="col-lg-8">
                    <input
                      className="form-control"
                      type="text"
                      value={phone}
                      onChange={handlePhoneChange} // Attach the onChange event handler
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">Year</label>
                  <div className="col-lg-8">
                    <select
                      className="form-control"
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
                <div className="form-group">
                  <label className="col-lg-3 control-label">Hostel</label>
                  <div className="col-lg-8">
                    <input
                      className="form-control"
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
                      className="btn btn-primary"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
};

export default Profile;

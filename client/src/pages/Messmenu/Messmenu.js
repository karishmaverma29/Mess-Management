import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/Layout/Layout";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Messmenu = () => {
  const [menuData, setMenuData] = useState([]);
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [updatedtext, setUpdatedtext] = useState("");
  const [updatedText, setUpdatedText] = useState("");
  const [value, setValue] = useState([]);
  const [combinedValues, setCombinedValues] = useState([]);
  const [menuRequests, setMenuRequests] = useState([]);

  const Getmenu = async () => {
    try {
      await axios
        .get("/api/v1/auth/getmenu") // Replace with the actual API endpoint
        .then((response) => {
          setMenuData(response.data);
        });
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  const fetchMenuRequests = async () => {
    try {
      const response = await axios.get("/api/v1/general/viewmessreq");
      setMenuRequests(response.data.data);
    } catch (error) {
      console.error("Error fetching menu requests:", error.message);
    }
  };

  useEffect(() => {
    // Fetch menu data from your backend API
    Getmenu();
    fetchMenuRequests();
    //eslint-disable-next-line
  }, []);

  // for selecting weekday for update menu
  const handleChange = (event) => {
    setDay(event.target.value);
  };

  //aprove req to warden
  const aproveReqtoWarden = async () => {
    try {
      const response = await axios.post("/api/v1/general/menureqsend", {
        combinedValues,
      });
      // Reload the page after removing the request
      window.location.reload();
      console.log(response.data);
    } catch (error) {
      console.error("Error Sending req:", error.message); // Log the error message
      console.error("Error Details:", error); // Log the entire error object for more details
    }
  };

  // for selecting time for update menu
  const handleChangetime = (event) => {
    setTime(event.target.value);
  };

  const updatemenu = async () => {
    // Update the value state properly
    axios
      .post("/api/v1/auth/updatemenu", { day, time, updatedtext }) // Replace with the actual API endpoint
      .then((response) => {
        Getmenu();
        setUpdatedText(updatedtext); // Set the updated text to be displayed

        const newCombinedValue = `${day ? day : ""}  ${time ? time : ""} ${
          updatedtext ? updatedtext : ""
        }`;

        // Add the new combined value to the array
        setCombinedValues((prevValues) => [
          ...prevValues,
          newCombinedValue + ",",
        ]);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching menu data:", error);
      });
  };
  //button for verified req;
  const handleRemoveRequest = (id) => {
    axios
      .delete("/api/v1/general/deletereq")
      .then((response) => {
        console.log(response.data);
        // Reload the page after removing the request
        window.location.reload();
      })
      .catch((error) => {
        // Handle error response from the server
        console.error("Error:", error);
      });
  };

  return (
    <Layout>
      <div>
        <h2>Weekly Menu</h2>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Breakfast</th>
              <th>Lunch</th>
              <th>Dinner</th>
            </tr>
          </thead>
          <tbody>
            {menuData.map((menu) => (
              <tr key={menu.dayOfWeek}>
                <td>{menu.dayOfWeek}</td>
                <td>{menu.breakfast}</td>
                <td>{menu.lunch}</td>
                <td>{menu.dinner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Select day</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={day}
            label="select day"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Sunday"}>Sunday</MenuItem>
            <MenuItem value={"Monday"}>Monday</MenuItem>
            <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
            <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
            <MenuItem value={"Thursday"}>Thursday</MenuItem>
            <MenuItem value={"Friday"}>Friday</MenuItem>
            <MenuItem value={"Saturday"}>Saturday</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Select time</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={time}
            label="select time"
            onChange={handleChangetime}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"breakfast"}>Breakfast</MenuItem>
            <MenuItem value={"lunch"}>Lunch</MenuItem>
            <MenuItem value={"dinner"}>Dinner</MenuItem>
          </Select>
        </FormControl>

        <input
          type="text"
          value={updatedtext}
          onChange={(e) => {
            setUpdatedtext(e.target.value);
          }}
        />

        <button type="button" className="btn btn-primary" onClick={updatemenu}>
          Update
        </button>

        {/* message field  */}
        <div>
          <div>
            {/* Display the combined updated and previous values in a single input box */}
            <input
              type="text"
              value={combinedValues.join("\n")}
              onChange={(e) => {
                setCombinedValues(e.target.value.split("\n"));
              }}
              style={{ width: "300px", height: "90px" }}
            />
          </div>
          <button
            type="button"
            className="btn btn-danger"
            onClick={aproveReqtoWarden}
          >
            Aprove Request
          </button>
        </div>
      </div>

      <div>
        <h1>Warden Reply</h1>
        {menuRequests.map(
          (item, index) =>
            item.status === "1" && (
              <div key={index}>
                <h3>Manager Requests:</h3>
                <ul>
                  {item.managerreq.map((request, reqIndex) => (
                    <li key={reqIndex}>{request}</li>
                  ))}
                </ul>
                <h4>Comment: {item.wardenmessage}</h4>
                <button onClick={() => handleRemoveRequest(item._id)}>
                  okk
                </button>
              </div>
            )
        )}
      </div>
    </Layout>
  );
};

export default Messmenu;

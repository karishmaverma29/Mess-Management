import React, { useState , useEffect} from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';



import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


const Messmenu= () => {
  const [menuData, setMenuData] = useState([]);
  const [day,setDay]=useState("");
  const [time,setTime]=useState("");
  const [updatedtext,setUpdatedtext]=useState("");
  

  const Getmenu=()=>{
    axios.get('/api/v1/auth/getmenu') // Replace with the actual API endpoint
    .then((response) => {
      setMenuData(response.data);
    })
    .catch((error) => {
      console.error('Error fetching menu data:', error);
    });
  }


  useEffect(() => {
    // Fetch menu data from your backend API
    Getmenu();
//eslint-disable-next-line
  }, []);
  
  //for selecting weekday for update menu
  const handleChange = (event) => {
    setDay(event.target.value);
  };
//for selecting time for update menu
  const handleChangetime = (event) => {
    setTime(event.target.value);
  };

  const updatemenu=()=>{
    axios.post('/api/v1/auth/updatemenu',{day,time,updatedtext})// Replace with the actual API endpoint
    .then((response) => {
      Getmenu();
      console.log(response);
    })
    .catch((error) => {
      console.error('Error fetching menu data:', error);
    });
  }


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

              <input type="text" value={updatedtext} onChange={(e)=>{
                setUpdatedtext(e.target.value)
              }}/>

<button type="button" className="btn btn-primary" onClick={updatemenu}>Update </button>
              
            </div>


          


    </Layout>
  );
};

export default Messmenu;
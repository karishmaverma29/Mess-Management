import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/Layout/Layout";

const UserMenu = () => {
  const [menuData, setMenuData] = useState([]);

  const Getmenu = () => {
    axios
      .get("/api/v1/auth/getmenu")
      .then((response) => {
        setMenuData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching menu data:", error);
      });
  };

  useEffect(() => {
    Getmenu();
    // eslint-disable-next-line
  }, []);

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
    </Layout>
  );
};

export default UserMenu;

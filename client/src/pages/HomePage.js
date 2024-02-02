import React from "react";
import Layout from "./../components/Layout/Layout";
import { useAuth } from "../context/auth";
import image from "./user/images/food.jpg"


const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
   
      
    </Layout>
  );
};
export default HomePage;

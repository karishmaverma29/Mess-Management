import React from "react";
import Layout from "./../components/Layout/Layout";
import { useAuth } from "../context/auth";
import image from "./user/images/food.jpg";

const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <h1>HomePage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
      <div>
        {/* https://images.unsplash.com/photo-1546069901-5ec6a79120b0?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
      <img src={image} alt="Description of the image" /> */}
      </div>
    </Layout>
  );
};
export default HomePage;

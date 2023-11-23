import React from "react";
import Layout from "./../components/Layout/Layout";
import { useAuth } from "../context/auth";
import image from "./user/images/food.jpg"


const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <h1>HomePage </h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
      <div>
     
     
    </div>
    </Layout>
  );
};
export default HomePage;

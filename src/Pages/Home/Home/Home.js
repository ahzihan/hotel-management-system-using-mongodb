import React from "react";
import Double from "../Double/Double";
import Family from "../Family/Family";
import Single from "../Single/Single";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <h2>Our Services</h2>
      <Single></Single>
      <Double></Double>
      <Family></Family>
    </div>
  );
};

export default Home;

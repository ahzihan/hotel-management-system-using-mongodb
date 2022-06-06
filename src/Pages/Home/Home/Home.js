import React from "react";
import Banner from "../../Banner/Banner";
import Double from "../Double/Double";
import Family from "../Family/Family";
import Single from "../Single/Single";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Single></Single>
      <Double></Double>
      <Family></Family>
    </div>
  );
};

export default Home;

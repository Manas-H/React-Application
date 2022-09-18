import React from "react";
import "../styles/home.css";
import Navigationbar from "../Navigationbar";
import Autop from "./Autoplay";

const Home = () => {
  return (
    <div>   
    <Navigationbar />
    <div className="main-body">
      <Autop />
    </div>
    </div>
  );
};

export default Home;




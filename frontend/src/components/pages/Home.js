import React from "react";
import "../styles/home.css";
import Navigationbar from "../Navigationbar";
import Autop from "./Autoplay";
import Choose from "./chooseus";

const Home = () => {
  return (
    <div>   
    <Navigationbar />
    <div className="main-body">
      <Autop />
    </div>
    <Choose />
    </div>
  );
};

export default Home;




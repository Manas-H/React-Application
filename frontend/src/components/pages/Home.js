import React from "react";
import "../styles/home.css";
import Navigationbar from "../Navigationbar";
import Autop from "./Autoplay";
import Choose from "./chooseus";
import Categories from "../products/Categories"

export const Home = () => {
  return (
    <div>
      <Navigationbar />
      <div className="main-body">
        <Autop />
      </div>
      <Choose />
      <Categories />
    </div>
  );
};

export default Home;

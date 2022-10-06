import React from "react";
import "../styles/home.css";
import Navigationbar from "../Navigationbar";
import Autop from "./Autoplay";
import Choose from "./chooseus";
import Categories from "../products/Categories"
import Footer from "./Footer"

const Home = () => {
  return (
    <div>
      <Navigationbar />
      <div className="main-body">
        <Autop />
      </div>
      <Choose />
      <Categories />
      <Footer />
    </div>
    
  );
};

export default Home;

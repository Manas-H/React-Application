import React from "react";
import "../styles/home.css";
import Navigationbar from "../Navigationbar";
import Autop from "./Autoplay";
// import Choose from "./chooseus";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>   
    <Navigationbar />
    <div className="main-body">
      <Autop />
    </div>
    <Footer/>
    {/* <Choose /> */}
    </div>
  );
};

export default Home;




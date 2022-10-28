import React from "react";
import "../styles/home.css";
import Navigationbar from "../Navigationbar";
import Autop from "./Autoplay";
// import Choose from "./chooseus";
// import Products from "../products/Products"
import Footer from "./Footer";

const Home = () => {
  return (
    <div>   
    <Navigationbar />
    <div className="main-body">
      <Autop />
    </div>
    <Choose />
      
      {/* <Products /> */}
      <div className="products">
         <div className="product_header"><h1> Demo Products </h1> </div>
      
      <div className="products_cards">
      <div className="p1"><Products /></div>
      <div className="p1"><Products /></div>
      <Products />
      </div>
      </div>


    </div>
  );
};

export default Home;

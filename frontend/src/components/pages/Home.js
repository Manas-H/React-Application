import React from "react";
import "../styles/home.css";
import Navigationbar from "../Navigationbar";
import Autop from "./Autoplay";
import Choose from "./chooseus";


export const Home = () => {

  return (
    //  <Carousel /> 
      // <Navigationbar />     
      // <div className="main-body">
      //   <div className="div-img">
      //     <img src={images} alt="BigCo Inc. logo" />
      //   </div>
      //   <div className="div-text">
      //     <h1>
      //       We are the Leading Manufacturers in Fiberglass lanters and Services
      //     </h1>
      //     <p>
      //       {" "}
      //       We are committed to providing <br /> top notch quality Products
      //     </p>
      //     <button>Learn More</button>
      //   </div>
      // </div>
      
      //  <Products /> 
      // <div className="products">
      //    <div className="product_header"><h1> Demo Products </h1> </div>
      
      // <div className="products_cards">
      // <div className="p1"><Products /></div>
      // <div className="p1"><Products /></div>
      // <Products />
      // </div>
      // </div>


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

      
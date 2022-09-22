import React from "react";
import "../styles/home.css";
<<<<<<< HEAD
import images from "../images/a1.png";
import Products from "../products/Products";
// import Carousel from '../Carousel'
// import { CCarousel, CCarouselItem } from '@coreui/react'
=======
import Navigationbar from "../Navigationbar";
import Autop from "./Autoplay";
import Choose from "./chooseus";
>>>>>>> e45f544a31c1f98d2117c5f778b031daac8214c0

const Home = () => {

  return (
<<<<<<< HEAD
    <div>
      {/* <Carousel /> */}
      <Navigationbar />     
      <div className="main-body">
        <div className="div-img">
          <img src={images} alt="BigCo Inc. logo" />
        </div>
        <div className="div-text">
          <h1>
            We are the Leading Manufacturers in Fiberglass lanters and Services
          </h1>
          <p>
            {" "}
            We are committed to providing <br /> top notch quality Products
          </p>
          <button>Learn More</button>
        </div>
      </div>
      
      {/* <Products /> */}
      <div className="products">
         <div className="product_header"><h1> Demo Products </h1> </div>
      
      <div className="products_cards">
      <div className="p1"><Products /></div>
      <div className="p1"><Products /></div>
      <Products />
      </div>
      </div>


=======
    <div>   
    <Navigationbar />
    <div className="main-body">
      <Autop />
    </div>
    <Choose />
>>>>>>> e45f544a31c1f98d2117c5f778b031daac8214c0
    </div>
  );
};

export default Home;




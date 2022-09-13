import React from "react";
import Navigationbar from "../Navigationbar";
import "../styles/home.css";
import images from "../images/a1.png";
// import Carousel from '../Carousel'
// import { CCarousel, CCarouselItem } from '@coreui/react'

const Home = () => {
  return (
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
    </div>
  );
};

export default Home;




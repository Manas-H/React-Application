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
      {/* <Categories /> */}
      <Products className="products-temp" />
      <Footer />
    </div>
    
  );
};

export default Home;

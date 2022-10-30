import React from "react";
import "../styles/home.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import Navigationbar from "../Navigationbar";
import Autop from "./Autoplay";
import Choose from "./chooseus";
import Products from "../products/Products"
import Preminum from "./premium";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>  
      <ToastContainer /> 
    <Navigationbar />
    <div className="main-body">
      <Autop />
    </div>
    <Choose />
    <Preminum />
      
      {/* <Products /> */}
      <div className="products">
      <Products />
      </div>
      <Footer />
      </div>
  );
};

export default Home;

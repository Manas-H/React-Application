import React from "react";
import "./product.css";
import { NavLink } from "react-router-dom";
import images from "../images/mainbody-img(1).jpg"

const Products = () => {
  return (
    <div>
      <div className="product">
        <img src={images} alt="" />

        <div className="product_info">
          <p className="info_name">Product 1</p>
          <p className="info_description">
            Redux is a predictable state container for JavaScript apps. It helps
            you write applications that behave consistently, run in different
            environments (client, server, and native), and are easy to test.
          </p>
          <p className="info_price"> $499.00 </p>

          <NavLink to={""} className="info_button">
            View
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Products;

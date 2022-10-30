import React from "react";
import img from "../images/premium-q.png";
import "../styles/chooseus.css";

const premium = () => {
  return (
    <>
      <div className="p-container">
        <div className="p-wrapper">
          <div className="p-flex-box">
            <div className="p-title">
              <h2>Premium products</h2>
            </div>
            <div className="p-text">
              <p>
                If you are looking for premium products of the highest quality,
                dedicated to really demanding food products, choose premium
                products from the Custom Fiber product line. If you want to know
                the offer of premium products, please contact the sales
                department. We will answer all your questions.
              </p>

              <p>
                <img alt="Premium Quality" src={img} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default premium;

import React, { useState } from "react";
import "./Navigationbar.css";
import { FaBars, FaCartArrowDown, FaUser } from "react-icons/fa";

const Navigationbar = () => {
  const [showMediaIcon, setShowMediaIcon] = useState(false);
  
  return (
    <div>
      <nav className="main-nav">
        {/* Logo name */}
        <div className="logo">
          <h1>Purva Fiber Industry</h1>
        </div>

        {/* Menu links that is Navigation */}
        <div
          className={showMediaIcon ? "mobile-menu-link" : "menu-links"}>
            <ul>
              <li>
                <a href="./">Products</a>
              </li>
              <li>
                <a href="./">About</a>
              </li>
              <li>
                <a href="./">Contact us</a>
              </li>
              <li>
                <a href="./" title="Cart">
                <span>Add to Cart</span> <FaCartArrowDown color="#ffa500" size="20px " /> 
                </a>
              </li>
              <li>
                <a href="./" title="Register or Log In">
                  {" "}
                 <span> Account </span> <FaUser /> 
                </a>
              </li>
            </ul>
          {/* sign in and sign up button */}

          {/* <div className="sign-button">
            <button>Sign In</button>
            <span>  </span>
            <button>Sign Up</button>
          </div> */}
        </div>
        
          <button className="hamburger-menu"
           onClick={() => setShowMediaIcon(!showMediaIcon)}>
            <FaBars />
          </button>
      </nav>
    </div>
    
  );
};

export default Navigationbar;

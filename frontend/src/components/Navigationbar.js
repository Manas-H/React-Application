import React, { useState } from "react";
import {Link } from 'react-router-dom'
import "./Navigationbar.css";
import OutsideClickHandler from "react-outside-click-handler";
// import onClickOutside from "react-onclickoutside";
import Logoimage from "./images/pfi.jpg";
import Rect from "./images/idk3.png";
import Bowl from "./images/idk4.png";
import Vert from "./images/idk5.png";
import Round from "./images/idk6.png";
import All from "./images/idk7.png";
import {
  FaAngleDown,
  FaAngleRight,
  FaBars,
  FaCartArrowDown,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigationbar = () => {
  const [showMediaIcon, setShowMediaIcon] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const [showModal, setShowModal] = useState(false);
  
  const quantity = useSelector(state => state.cart.quantity)
  console.log(quantity);

  // const openModal = () => {
  //   setShowModal(true);
  //   console.log("modal is open");
  // };

  return (
    <div className="navigation">
      <nav className="main-nav">
        {/* Logo name */}
        <div className="logo">
          <img className="logo-img" src={Logoimage} alt="Logo"></img>
          <h1>Purva Fiber Industry</h1>
        </div>

        {/* Menu links that is Navigation */}
        <div className={showMediaIcon ? "mobile-menu-link" : "menu-links"}>
          <ul>
            <li>
              <NavLink to="/" className="link">
                Home
              </NavLink>
            </li>

            <li>
                <button
                  className={showProducts ? "bg-sal" : "btn-hov"}
                  onClick={handleClick}
                >
                   <p className="link">Products
                  <FaAngleDown style={{ fontSize: 15, fontWeight: 200 }} /></p>
                </button>
                {/* <FaAngleDown style={{ fontSize: 15, fontWeight: 200 }} /> */}
            </li>

            <li>
              <NavLink to="/about" className="link">
                About
              </NavLink>

              {/* <NavLink to="/" className="">About</NavLink> */}
            </li>

            {/* <li>
              <NavLink to="/contact" className="link">
                {" "}
                Contact us{" "}
              </NavLink>
            </li> */}

          <li title="Cart" className="cart">
            <NavLink to="/cart" className="link">
              <span>Add to Cart</span>{" "}
              <div>
              <FaCartArrowDown
                onMouseOver={({ target }) => (target.style.color = "orange")}
                onMouseOut={({ target }) => (target.style.color = "white")}
                size="20px "
              />
              <sup className="badge">{ quantity }</sup>
              </div>
              
              
            </NavLink>
          </li>

            {/* this is for account where when click outside then closes */}
            <div className="li">
              <li className="account">
                <OutsideClickHandler
                  onOutsideClick={() => {
                    setShowButton(false);
                  }}
                >
                  <span onClick={() => setShowButton(true)}> Account </span>{" "}
                  <FaUser
                    title=" Register or Login"
                    onClick={() => setShowButton(true)}
                    onMouseOver={({ target }) =>
                      (target.style.color = "orange")
                    }
                    onMouseOut={({ target }) => (target.style.color = "white")}
                  />
                </OutsideClickHandler>
              </li>
              {showButton && (
                <div className="account-button">
                  <div className="button-text">
                    <button>Register</button>
                    <button>Log In</button>
                  </div>
                </div>
              )}
            </div>
          </ul>
        </div>
        {/* sign in and sign up button */}

        {/* <div className="sign-button">
            <button>Sign In</button>
            <span>  </span>
            <button>Sign Up</button>
          </div> */}
        <button
          className="hamburger-menu"
          onClick={() => setShowMediaIcon(!showMediaIcon)}
        >
          {showMediaIcon ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {showProducts && (
        <div className="newdiv1">
        
          <Link to="/Rectangle" className="Series-1">
            <img className="Serie-img" src={Rect} alt="Rectangle"></img>
            <h3 className="serie-des">The Rectangle Series</h3>
            </Link>

          <Link to="/Round" className="Series-2">
            <img className="Serie-img" src={Round} alt="Rectangle"></img>
            <h3 className="serie-des">The Round Series</h3>
            </Link>

          <Link to="/Vertical" className="Series-3">
            <img className="Serie-img" src={Vert} alt="Rectangle"></img>
            <h3 className="serie-des">The Vertical Series</h3>
            </Link>
         
          <Link to="/Bowl" className="Series-4">
            <img className="Serie-img" src={Bowl} alt="Rectangle"></img>
            <h3 className="serie-des">The Bowl Series</h3>
            </Link>
        
          
          <Link to="/allProducts" className="Series-5">
            <img className="Serie-img" src={All} alt="Rectangle"></img>
            <h3 className="serie-des">View All Products</h3>
            </Link>
         
  
          <Link to="/Customize" className="DIY">
            {/* <img className="Serie-img" src={Rect} alt="Rectangle"></img> */}
            <h3 className="serie-desc">Quote<br/>Your Design</h3> <FaAngleRight style={{fontSize: 50, fontWeight: 200,}} />
            </Link>
        </div>
      )}
    </div>
  );
};

export default Navigationbar;

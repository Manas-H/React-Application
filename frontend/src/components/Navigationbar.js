import React, { useState } from "react";
// import {Link } from 'react-router-dom'
import "./Navigationbar.css";
import OutsideClickHandler from "react-outside-click-handler";
import RegisterationModal from "./forms/RegisterationModal";
import {
  FaAngleDown,
  FaBars,
  FaCartArrowDown,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navigationbar = () => {
  const [showMediaIcon, setShowMediaIcon] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const [showModal, setShowModal] = useState(false);

  // const openModal = () => {
  //   setShowModal(true);
  //   console.log("modal is open");
  // };

  return (
    <div>
      <nav className="main-nav">
        {/* Logo name */}
        <div className="logo">
          <h1>Purva Fiber Industry</h1>
        </div>

        {/* Menu links that is Navigation */}
        <div className={showMediaIcon ? "mobile-menu-link" : "menu-links"}>
          <ul>
            <li>            
              <NavLink to="/home" className="link">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/" className="link">
                Products
                <FaAngleDown style={{ fontSize: 15, fontWeight: 200 }} />
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className="link">
                About
              </NavLink>

              {/* <NavLink to="/" className="">About</NavLink> */}
            </li>

            <li>
              <NavLink to="/contact" className="link">
                {" "}
                Contact us{" "}
              </NavLink>
            </li>

            <li title="Cart">
              <NavLink to="/" className="link">
                <span>Add to Cart</span>{" "}
                <FaCartArrowDown
                  onMouseOver={({ target }) => (target.style.color = "orange")}
                  onMouseOut={({ target }) => (target.style.color = "white")}
                  size="20px "
                />
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
                  {/* <FaUser onClick={() => setShowModal(true)}/> */}
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
                      <button onClick={() => setShowModal(true)}>
                      Register
                    </button>
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
     
      {showModal ? (<RegisterationModal closeModal={setShowModal} />): null}
    </div>
  );
};

export default Navigationbar;

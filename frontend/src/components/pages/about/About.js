import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Navigationbar from "../../Navigationbar";
import Form from "./form";
import "./about.css";
import WhoAreWe from "./WhoAreWe";
import QA from "./QA";
import Aim from "./Aim";
import Team from "./Team";

const About = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
      <Navigationbar />
      <div className="about-top">
        <div className="abt-heading">About</div>
        <div className="abt-links">
          <ul>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaWhatsapp />
            </li>
          </ul>
        </div>
      </div>
      <div className="abt-main-sec">
        <div className="abt-bx-content">
          <div
            className={toggleState === 1 ? "bx bx-1 active-tabs" : "bx bx-1"}
            onClick={() => toggleTab(1)}
          >
            AboutUs
          </div>
          <div className={toggleState === 1 ? "bx bx-2" : "bx bx-2"} onClick={() => toggleTab(2)}>
            QA
          </div>
          <div className={toggleState === 1 ? "bx bx-3" : "bx bx-3"} onClick={() => toggleTab(3)}>
            Aim
          </div>
          <div className={toggleState === 1 ? "bx bx-4" : "bx bx-4"} onClick={() => toggleTab(4)}>
            Team
          </div>
        </div>
        <div className="abt-click-contents">
          <div className="abt-left">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <WhoAreWe />
            </div>
            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <QA />
            </div>

            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
            >
              <Aim />
            </div>

            <div
              className={
                toggleState === 4 ? "content  active-content" : "content"
              }
            >
              <Team />
            </div>

          </div>
          <div className="abt-right">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;



import React from "react";
import Navigationbar from "../Navigationbar";
import classes from "../styles/Rectangle.module.css";
import rect from "../images/ve.png";
import Product from "./AllProducts";
// import newz from "../images/newz.png";
import newz2 from "../images/newz2.jpg";
import fsh from "../images/fsh.jpg";
import { useRef } from 'react'
import {
 FaArrowCircleDown,
} from "react-icons/fa";
const Vertical= () =>{
  const firstItemRef = useRef(null);
    return (
   <div>
    <Navigationbar/>
    <div className="main-body2">
      <div className ={classes.header}>
        <h1 className={classes.title}>THE <br/>Vertical Series</h1>
        <div className={classes.Imagediv}>
        <img className={classes.mainimage} src= {rect} alt ="Rectangle"></img>
        <h3 className={classes.br1}> BROWSE PRODUCTS</h3>
        <button className={classes.btnfa1} onClick={() => firstItemRef.current.scrollIntoView()}><FaArrowCircleDown style={{fontSize: 80, fontWeight: 200,}} /></button>
        {/* <img className={classes.mainimg3} src ={newz} alt ="rectangular fiberglass"></img> */}
        </div>
        {/* <img className={classes.mainimg} src={(Name.Image1)} alt = "nothing"></img> */}
        </div>
        <div className={classes.ent}>
        <h4 className={classes.desc}> Our Premium Tall planters ideal for your Outdoor Lawns,Garden and Commercial workspaces!!</h4>
        {/* <h6 className={classes.des}>Sturdy and widespread horizontal planters precisely made to give you more area for your plants </h6> */}
        <img className={classes.mainimg3} src ={newz2} alt ="rectangular fiberglass"></img>
        <img className={classes.mainimg2} src ={fsh} alt ="rectangular fiberglass"></img>
        </div>
       
   </div>
   <div ref={firstItemRef}>
   <Product value={3}/>
   </div>
   </div>
    );
}

export default Vertical;

import React from "react";
import Navigationbar from "../Navigationbar";
import { useState,useEffect}  from 'react';
import classes from "../styles/Rectangle.module.css";
const Rectangle= () =>{
    const [hasError, setErrors] = useState(false);
    const [Name,setName] = useState([]);
    async function fetchData() {
        let arrr =[];
        const res= await fetch("http://localhost:5000/api/Series/");
        let data= await res.json();
        arrr= data;
        let Name = arrr.find(e => e.Series_id === 1);
        setName(Name);
        console.log(Name);
       res
       .json()
       .catch(err => setErrors(err))
       .then(hasError);
     }
     
     useEffect(() =>{
       fetchData();
       // eslint-disable-next-line
     },[]);
    return (
   <div>
    <Navigationbar/>
    <div className="main-body2">
      <div className ={classes.header}>
        <h1>{Name.Series_name}</h1>
        <img src={(Name.Series_images)} alt = "nothing"></img>


        {/* <img src = {JSON.stringify(Name.Series_images)} alt ="Rectangle"></img> */}
        {/* {Object.keys.Name.map((name,idx) =>(
        <img key={idx.Series_images} src={name.Series_images} alt="beer images"></img>
       ))} */}
        {/* <img src={Name.Series_images} alt="Series_images"></img>
        <img src={Name.Series_images} alt="Series_images2"></img> */}
        </div>
   </div>
   </div>
    );
}

export default Rectangle;




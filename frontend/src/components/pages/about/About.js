import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Navigationbar from "../../Navigationbar";
import "./about.css";

const About = () => {
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
          <div className="bx bx-1">1</div>
          <div className="bx bx-2">2</div>
          <div className="bx bx-3">3</div>
          <div className="bx bx-4">4</div>
        </div>
      </div>
    </div>
  );
};
export default About;

// import React from 'react';
// import { useState,useEffect}  from 'react';
// const About = () => {
// const [hasError, setErrors] = useState(false);
// const [Name,setName] = useState([]);

// async function fetchData() {
//    const res= await fetch("https://api.sampleapis.com/beers/ale");
//    let data= await res.json();
//    data = data.sort((a, b) =>  b.name.localeCompare(a.name));
//    const sort= [...data].sort((a, b) => b[1] - a[-1]);
//    setName(data);
//   res
//   .json()
//   .catch(err => setErrors(err));
// }

// useEffect(() =>{
//   fetchData();
// },[]);
//   return (
//     <div>
//        {Name.map(name =>(
//         <li key={name.id}>{name.name}</li>
//        ))}
//         {Name.map(name =>(
//         <img key={name.id} src={name.image} alt="beer images"></img>
//        ))}
//       <span>{JSON.stringify(hasError)}</span>
//     </div>
//   )
// }

// export default About;

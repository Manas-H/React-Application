import React from "react";
//import Navigationbar from "./components/Navigationbar";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact"
import Home from "./components/pages/Home"
import Login from "./components/forms/Login"
import Register from "./components/forms/RegisterationModal"
// import RegisterationModal from "./components/forms/RegisterationModal";
// import RegistrationMain from "./components/forms/RegistrationMain";
// import From from './components/'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
		    <Route path="/register" exact element={<Register />} />
			  <Route path="/login" exact element={<Login />} />
			  <Route path="/" element={<Navigate replace to="/login" />} /> 
      </Routes>
      {/* <RegistrationMain /> */}
    </div>
   );
}

export default App;

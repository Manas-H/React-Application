import React from "react";
//import Navigationbar from "./components/Navigationbar";
import { Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact"
import Home from "./components/pages/Home"
// import RegisterationModal from "./components/forms/RegisterationModal";
// import From from './components/'


function App() {
  return (

    <div>
<<<<<<< HEAD
      {/* <RegisterationModal /> */}
      {/* <Navigationbar /> */}
=======
         
>>>>>>> e45f544a31c1f98d2117c5f778b031daac8214c0
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
<<<<<<< HEAD
      </Routes>

=======
      </Routes> 
>>>>>>> e45f544a31c1f98d2117c5f778b031daac8214c0
    </div>
);}

export default App;

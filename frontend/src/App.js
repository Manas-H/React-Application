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
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
   );
}

export default App;

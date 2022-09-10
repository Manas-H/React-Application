import React from "react";
// import Navigationbar from "./components/Navigationbar";
import { Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact"
import Home from "./components/pages/Home"

function App() {
  return (
    <div>
      {/* <Navigationbar /> */}
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

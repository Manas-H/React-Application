import React from "react";
//import Navigationbar from "./components/Navigationbar";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./components/pages/about/About";
import Contact from "./components/pages/Contact"
import Home from "./components/pages/Home"
import Login from "./components/forms/Login"
import Rectangle from "./components/products/Rectangle";
import Round from "./components/products/Round";
import Register from "./components/forms/RegisterationModal"
import Vertical from "./components/products/Vertical";
import Bowl from "./components/products/Bowl";
import Product from "./components/products/AllProducts";
import Prd from "./components/products/prdinfo";
import Cart from "./components/products/Cart";
// import RegisterationModal from "./components/forms/RegisterationModal";
// import RegistrationMain from "./components/forms/RegistrationMain";
// import From from './components/'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
		    <Route path="/register" exact element={<Register />} />
			  <Route path="/login" exact element={<Login />} />
        <Route path="/Rectangle" exact element={<Rectangle/>} />
        <Route path="/Round" exact element={<Round/>} />
        <Route path="/Vertical" exact element={<Vertical/>} />
        <Route path="/Bowl" exact element={<Bowl/>} />
        <Route path="/All" exact element={<Product/>} />
			  <Route path="/" element={<Navigate replace to="/login" />} /> 
        <Route path="/Rectangle/:id" exact element={<Prd/>} />
        <Route path="/Vertical/:id" exact element={<Prd/>} />
      </Routes>
      {/* <RegistrationMain /> */}
    </div>
   );
}

export default App;

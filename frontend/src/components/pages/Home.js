import React from 'react'
import Navigationbar from '../Navigationbar'
import "../styles/home.css"

const Home = () => {
  return (
 
    <div> 
           <Navigationbar />
        <div className="main-body">
         <div className='div-img'>
          <img src='../'  alt="BigCo Inc. logo"/>
         </div>
         <div className='div-text'>
          <p>We are the <br/> Leading <br/> Manufacturers <br/> in Fiberglass <br/> planters and <br/> Services</p>
          <p> We are committed to providing <br/> top notch quality Products</p>
          <button>Learn More</button>
         </div>
        </div>
    </div>
  )
}

export default Home
import React from 'react'
import "./profile.css"
import { useState, useEffect } from 'react';
import Navigationbar from '../../Navigationbar';

const UserProfile = () => {

    // useEffect(() => {
    //     const data = JSON.parse(localStorage.getItem("token"));
    //     console.log(data);
    // },[])
    const [items, setItems] = useState([]);

useEffect(() => {
  const items = JSON.parse(localStorage.getItem('token'));
  console.log(items);
  if (items) {
   setItems(items);
  }
}, []);
  return (
    <div className='profi'>
    <Navigationbar />
              <div className="cardd">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src=""
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    Name :  {items.name}
                  </h5>
                  <p className="card-text">
                    <br />
                    <span className="phone">Number : {items.tel}</span>
                  </p>
                  <h5>Email : {items.email}</h5>
                </div>
              </div>
    </div>
  )
}

export default UserProfile

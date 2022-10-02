// import React from "react";
// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import images from "../images/mainbody-img(1).jpg";
import "./product.css";
import "bootstrap/dist/css/bootstrap.min.css";

// const Products = () => {
//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState(data);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const getProducts = async () => {
//       setLoading(true);
//       const response = await fetch("https://fakestoreapi.com/products/1");
//       let componentMounted = true;
//       if (componentMounted) {
//         setData(await response.clone().json());
//         setFilter(await response.json());
//         setLoading(false);
//         console.log(filter);
//       }
//       return () => {
//         componentMounted = false;
//       };
//     };
//     getProducts();
//   }, []);
//   console.log(filter);
//   const Loading = () => {
//     return <>Loading .....</>;
//   };

//   const ShowProducts = () => {
//     return (
//       <>
//         <div className="buttons d-flex justify-content-center mb-5 pb-5">
//           <button className="btn btn-outline-dark me-2">A</button>
//           <button className="btn btn-outline-dark me-2">B</button>
//           <button className="btn btn-outline-dark me-2">C </button>
//         </div>
//         {filter.map((product) => {
//           return (
//             <>
//              <div className="col-md-3">
//              <div class="card">
//                 <img src={product.image} class="card-img-top" alt={product.title} />
//                 <div class="card-body">
//                   <h5 class="card-title">{product.title}</h5>
//                   <p class="card-text">
//                     ${product.price}
//                   </p>
//                   <a href="./" class="btn btn-primary">
//                     Go somewhere
//                   </a>
//                 </div>
//               </div>
//              </div>
//             </>
//           );
//         })}
//         {Object.filter.map((product) => {
//           return (
//             <>
//               <div className="product">
//                 <img src={product.image} alt="" />

//                 <div className="product_info">
//                   <p className="info_name">{product.title}</p>
//                   <p className="info_description">{product.price}</p>
//                   <p className="info_price"> $499.00 </p>

//                   <NavLink to={""} className="info_button">
//                     View
//                   </NavLink>
//                 </div>
//               </div>
//             </>
//           );
//         })}
//       </>
//    );
//    };
//   return (
//     <div>
//       <div className="container my-5 py-5">
//         <div className="row">
//           <div className="col-12 mb-5">
//             <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
//             <hr />
//           </div>
//         </div>
//         <div className="row justify-content-center">
//           {/* <ShowProducts /> */}
//         </div>
//       </div>
//       <div className="container">
//         <div className="row">
//           <div>
//             {" "}
//             <h1>Latest Products</h1>
//           </div>
//         </div>
//         <div className="row">
//         {loading ? <Loading /> : <ShowProducts/>}
//         </div>
//       </div>
//     </div>
//   );
// };

const Products = () => {

}
export default Products;

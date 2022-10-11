import React, { useState, useEffect } from "react";
import { publicRequest } from "../../requestMethod";
import "./product.css";
import { useLocation } from "react-router-dom";
import { addProduct } from "../redux/cartReducer";
import { useDispatch } from "react-redux";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

const Products = ({ product }) => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [products, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  // const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    // setIsLoading(true)
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/${id}` + id);
        setProduct(res.data);
      } catch(err){
        setError(err)
      }
      // setIsLoading(false);
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...products, quantity }));
  };

  // if (isLoading) {
  //   return <p>Data is loading...</p>;
  // }

  if (error || !Array.isArray(products)) {
    return <p>There was an error loading your data!</p>;
  }
  return (
    <div className="products-temp">
    {
       products.map((product) => (
    <div className="card" key={product.id}>
      <img src={product.img} alt="Products" />
      <h1>{product.title}</h1>
      {/* <p class="price">$19.99</p> */}
      <p>{product.desc}</p>
      <div className="amount_sec">
        {/* <p onClick={() => handleQuantity("dec")}> - </p> */}
        <AiOutlineMinus onClick={() => handleQuantity("dec")} />

        <p className="amount">{quantity}</p>
        {/* <p onClick={() => handleQuantity("inc")}> + </p> */}
        <AiOutlinePlus onClick={() => handleQuantity("inc")} />
      </div>
      <p>
        <button className="info_button" onClick={handleClick}>
          Add to Cart
        </button>
      </p>
    </div>
     ))
    } 
    </div>
  );
};
export default Products;
import React, { useState, useEffect } from "react";
import { publicRequest } from "../../requestMethod";
import "./product.css";
import { useLocation } from "react-router-dom";
import { addProduct } from "../redux/cartReducer";
import { useDispatch } from "react-redux";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

const Products = ({ item }) => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
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
    dispatch(addProduct({ product, quantity }));
  };
  return (
    <div className="card">
      <img src={item.img} alt="Products" />
      <h1>{item.title}</h1>
      {/* <p class="price">$19.99</p> */}
      <p>{item.desc}</p>
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
  );
};
export default Products;

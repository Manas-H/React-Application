import React from "react";
import { useSelector } from "react-redux";
import "../styles/cart.css";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";

const TopBottom = styled.div`
  display: block;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Summary = styled.div`
  width: 80%;
  margin-left: 40px;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

// const Hr = styled.hr`
//   background-color: #eee;
//   border: none;
//   height: 1px;
// `;

const Button = styled.button`
  min-width: 72%;
  margin: 25px 17%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div className="cart-container">
      <div className="wrapper">
        <div className="top">
          <h3>Cart</h3>
        </div>
        <TopBottom className="info">
          {cart.products.map((product) => (
            <div className="product">
              <div className="product-details">
                <img src={product.img} alt="Products" />
                <div className="details">
                  <p className="product_name">
                    <span>Product</span> {product.title}{" "}
                  </p>
                  <p className="product_id">ID: {product._id}</p>
                  <div className="price_details">
                    <div className="product-amount-quan">
                      <p className="product-quan-title">Quantity:</p>
                      <AiOutlinePlus />
                      <p className="product-quantity">{product.quantity}</p>
                      <AiOutlineMinus />
                    </div>
                    <div className="product-price">
                      <p>Price:</p>$ {product.price * product.quantity}
                    </div>
                  </div>
                </div>
                <div className="delete-icon">
                  <AiOutlineDelete />
                </div>
              </div>
            </div>
          ))}
        </TopBottom>
        <TopBottom className="info">
          <div className="product">
            <div className="product-details">
              <img
                src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
                alt="Products"
              />
              <div className="details">
                <p className="product_name">Product</p>
                <p className="product_id">ID:</p>
                <div className="price_details">
                  <div className="product-amount-quan">
                    <p className="product-quan-title">Quantity:</p>
                    <AiOutlinePlus />
                    <p className="product-quantity"> 122</p>
                    <AiOutlineMinus />
                  </div>
                  <div className="product-price">
                    <p>Price:</p>$ 1222
                  </div>
                </div>
              </div>
              <div className="delete-icon">
                <AiOutlineDelete />
              </div>
            </div>
          </div>
        </TopBottom>

        <Summary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>$ 80</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Estimated Shipping</SummaryItemText>
            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Shipping Discount</SummaryItemText>
            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem type="total">
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>$ 80</SummaryItemPrice>
          </SummaryItem>
          <Button>CHECKOUT NOW</Button>
        </Summary>
      </div>
    </div>
  );
};

export default Cart;
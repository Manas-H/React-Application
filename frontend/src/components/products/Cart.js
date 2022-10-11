import React from "react";
import { useSelector } from "react-redux"; 
import "../styles/cart.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";

const TopBottom = styled.div`
  display:block;  
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Summary = styled.div`
  width:80%;
  margin-left:40px;
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
  width: 50%;
  margin:10px 25%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;`;


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div className="cart-container">
      <div className="wrapper">
        <div className="top">
          <h3>You Bag</h3>
        </div>
        <TopBottom className="info">
        {cart.products.map((product) => (
          <div className="product">
            <div className="product-details">
              <img src={product.img} alt="Products" />
              <div className="details">
                <p className="product_name"><span>Product</span> {product.title} </p>
                <p className="product_id">ID: {product._id}</p>
                <div className="price_details">
              <div className="product-amount-quan">
                <p className="product-quan-title">Quantity:</p>
                <AiOutlinePlus />
                <p className="product-quantity">{product.quantity}</p>
                <AiOutlineMinus />
              </div>
              <div className="product-price">
                <p>Price:</p>
                $ {product.price * product.quantity}
              </div>
            </div>
              </div>
            </div>

          </div>
          ))}
        </TopBottom>
        <TopBottom className="info">
          <div className="product">
            <div className="product-details">
              <img src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt="Products" />
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
                <p>Price:</p>
                $ 1222
              </div>
            </div>
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

// const Container = styled.div``;

// const Wrapper = styled.div`
//   padding: 20px;
// `;

// const Title = styled.h1`
//   font-weight: 300;
//   text-align: center;
// `;

// const Top = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 20px;
// `;

// const TopButton = styled.button`
//   padding: 10px;
//   font-weight: 600;
//   cursor: pointer;
//   border: ${(props) => props.type === "filled" && "none"};
//   background-color: ${(props) =>
//     props.type === "filled" ? "black" : "transparent"};
//   color: ${(props) => props.type === "filled" && "white"};
// `;

// const TopTexts = styled.div`
// `;
// const TopText = styled.span`
//   text-decoration: underline;
//   cursor: pointer;
//   margin: 0px 10px;
// `;

// const Bottom = styled.div`

//   justify-content: space-between;
// `;

// const Info = styled.div`
//   flex: 3;
//   width:50px;
// `;

// const Product = styled.div`

//   justify-content: space-between;
// `;

// const ProductDetail = styled.div`
//   flex: 2;
//   display: flex;
// `;

// const Image = styled.img`
//   width: 200px;
// `;

// const Details = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
// `;

// const ProductName = styled.span`
// display:flex;
// `;

// const ProductId = styled.span``;

// const ProductColor = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
// `;

// const PriceDetail = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const ProductAmountContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const ProductAmount = styled.div`
//   font-size: 24px;
//   margin: 5px;
// `;

// const ProductPrice = styled.div`
//   font-size: 26px;
//   font-weight: 200;
// `;


// const Cart = () => {

//   return (
//     <Container>
//     <Navigationbar />
//     <Wrapper>
//       <Title>YOUR BAG</Title>
//       <Top>
//         <TopButton>CONTINUE SHOPPING</TopButton>
//         <TopTexts>
//           <TopText>Shopping Bag(2)</TopText>
//           <TopText>Your Wishlist (0)</TopText>
//         </TopTexts>
//         <TopButton type="filled">CHECKOUT NOW</TopButton>
//       </Top>
//       <Bottom>
//         <Info>
//         {cart.products.map((product) => (
//               <Product>
//                 <ProductDetail>
//                   <Image src={product.img} />
//                   <Details>
//                     <ProductName>
//                       <b>Product:</b> {product.title}
//                     </ProductName>
//                     <ProductId>
//                       <b>ID:</b> {product._id}
//                     </ProductId>
//                     {/* <ProductColor color={product.color} /> */}
//                   </Details>
//                 </ProductDetail>
//                 <PriceDetail>
//                   <ProductAmountContainer>
//                    <AiOutlinePlus/>
//                     <ProductAmount>Quantity:  {product.quantity}</ProductAmount>
//                     <AiOutlineMinus />
//                   </ProductAmountContainer>
//                   <ProductPrice>
//                     $ {product.price * product.quantity}
//                   </ProductPrice>
//                 </PriceDetail>
//               </Product>
//             ))}
//           <Hr />
//           <Product>
//             <ProductDetail>
//               <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
//               <Details>
//                 <ProductName>
//                   <b>Product:</b> HAKURA T-SHIRT
//                 </ProductName>
//                 <ProductId>
//                   <b>ID:</b> 93813718293
//                 </ProductId>
//                 <ProductColor color="gray" />
//               </Details>
//             </ProductDetail>
//             <PriceDetail>
//               <ProductAmountContainer>
//               Quantity:
//               <AiOutlinePlus/>
//                 <ProductAmount>  1</ProductAmount>
//                 <AiOutlineMinus/>
//               </ProductAmountContainer>
//               <ProductPrice> Price : $ 20</ProductPrice>
//             </PriceDetail>
//           </Product>
//         </Info>

//       </Bottom>
//     </Wrapper>
//   </Container>
//   )
// }

export default Cart

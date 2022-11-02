import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  products: localStorage.getItem("product")
    ? JSON.parse(localStorage.getItem("product"))
    : [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const itemIndex = state.products.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.products[itemIndex].cartQuantity += 1;
        state.quantity += 0;
        toast.info(
          `increased ${state.products[itemIndex].title} product quantity`,
          {
            position: "top-center",
          }
        );
      } else {
        const data  = axios.post('http://localhost/api/cart/addtocart')
        const tempProduct = { ...action.payload, data, cartQuantity: 1 };
        state.products.push(tempProduct);
        // state.products.axios.post('localhost:5000/api/cart/addtocart')
        state.quantity += 1;
        toast.success(`${action.payload.title} added to cart`, {
          position: "top-center",
        });
      }
      
      state.total += action.payload.price * action.payload.quantity;

      localStorage.setItem("product", JSON.stringify(state.products));
    },
    removeFromCart(state, action) {
      const nextCartItems = state.products.filter (
        product => product._id !== action.payload._id
      );
      state.products = nextCartItems
      localStorage.setItem("product", JSON.stringify(state.products));
      toast.error(`${action.payload.title} removed from cart`, {
        position: "top-center",
      });
      state.quantity -= 1;
    },
    decreaseCart(state, action) {
      const itemIndex = state.products.findIndex(
      product => product._id === action.payload._id)
      if(state.products[itemIndex].cartQuantity > 1){
        state.products[itemIndex].cartQuantity -= 1

        toast.info(`Decreased ${action.payload.title} cart quantity`, {
          position: "top-center",
        });
      }else if (state.products[itemIndex].cartQuantity === 1){
        const nextCartItems = state.products.filter (
          product => product._id !== action.payload._id
        );
        state.products = nextCartItems
        
        toast.error(`${action.payload.title} removed from cart`, {
          position: "top-center",
        });
      }
      localStorage.setItem("product", JSON.stringify(state.products));
    },
  },
});

export const { addProduct, removeFromCart, decreaseCart, getTotals} = cartSlice.actions;
export default cartSlice.reducer;

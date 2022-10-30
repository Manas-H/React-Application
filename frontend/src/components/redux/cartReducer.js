import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
        toast.info(
          `increased ${state.products[itemIndex].title} product quantity`,
          {
            position: "top-center",
          }
        );
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.products.push(tempProduct);
        toast.success(`${action.payload.title} added to cart`, {
          position: "top-center",
        });
      }
      state.quantity += 1;
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

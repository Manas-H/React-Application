import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTotals } from "./cartReducer";

const store =  configureStore({
    reducer: {
        cart: cartReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
store.dispatch(getTotals());
// import { applyMiddleware } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducers';
// import thunk from "redux-thunk";

// const store = (rootReducer, composeWithDevTools(
//     applyMiddleware(thunk)
// ));

export default store;
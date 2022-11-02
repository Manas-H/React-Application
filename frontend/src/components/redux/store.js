import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";

export default configureStore({
    reducer: {
        cart: cartReducer
    },
});
// import { applyMiddleware } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducers';
// import thunk from "redux-thunk";

// const store = (rootReducer, composeWithDevTools(
//     applyMiddleware(thunk)
// ));

// export default store;
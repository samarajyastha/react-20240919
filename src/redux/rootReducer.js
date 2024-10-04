import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import authReducer from "./auth/authSlice";
import productsReducer from "./products/productSlice";
import cartReducer from "./cart/cartSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;

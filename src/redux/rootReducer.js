import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import authReducer from "./auth/authSlice";
import productsReducer from "./products/productSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
  products: productsReducer,
});

export default rootReducer;

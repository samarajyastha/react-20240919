import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addProductToCart: (state, action) => {
      state.products.push(action.payload);
    },
    removeProductFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id != action.payload
      );
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;

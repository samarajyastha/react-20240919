import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories, getProducts } from "../../api/products";

const getAllProducts = createAsyncThunk(
  "products/all",
  async ({ limit, sort, filters }, { rejectWithValue }) => {
    try {
      const response = await getProducts({ limit, sort, filters });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const getProductCategories = createAsyncThunk(
  "products/categories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCategories();

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export { getAllProducts, getProductCategories };

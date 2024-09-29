import axios from "axios";
import config from "../config/config";

const authToken = localStorage.getItem("authToken");

const getProducts = async () => {
  const response = await axios.get(
    `${config.baseApiUrl}/api/products?limit=50`
  );

  return response;
};

const getProductById = async (id) => {
  const response = await axios.get(`${config.baseApiUrl}/api/products/${id}`);

  return response;
};

const addProduct = async (data) => {
  const response = await axios.post(`${config.baseApiUrl}/api/products`, data, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response;
};

export { getProducts, getProductById, addProduct };

// HTTP Methods
/**
 * GET = Read (Done)
 * POST = Create
 * PUT = Update
 * DELETE = Delete
 */

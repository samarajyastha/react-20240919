import axios from "axios";
import config from "../config/config";

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

export { getProducts, getProductById };

// HTTP Methods
/**
 * GET = Read (Done)
 * POST = Create
 * PUT = Update
 * DELETE = Delete
 */

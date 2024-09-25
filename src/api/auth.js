import axios from "axios";
import config from "../config/config";

const login = async ({ email, password }) => {
  const response = await axios.post(`${config.baseApiUrl}/api/auth/login`, {
    email,
    password,
  });

  return response;
};

export { login };

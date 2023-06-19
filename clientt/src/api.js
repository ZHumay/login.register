import axios from "axios";

export const registerUser = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:3004/api/webuser/register", {
      email,
      password,
    });
    return response.data; 
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const confirmUser = async (code) => {
  try {
    const response = await axios.post("http://localhost:3004/api/webuser/confirm", {
      code,
    });
    return response.data; 
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

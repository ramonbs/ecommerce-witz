import axios from 'axios';

const url = 'http://localhost:3002/user';

export const registerUser = async (user: object) => {
  const response = await axios.post(`${url}/register`, user);
  return response.data;
};

export const loginUser = async (user: object) => {
  const response = await axios.post(`${url}/login`, user);
  return response.data;
};

export const findUserByEmail = async (email: object) => {
  const response = await axios.get(`${url}/email`, email);
  return response.data;
};

export const updateEmail = async (user: object) => {
  const response = await axios.put(`${url}/email`, user);
  return response.data;
};

export const updatePassword = async (user: object) => {
  const response = await axios.put(`${url}/password`, user);
  return response.data;
};

export const updatePhone = async (user: object) => {
  const response = await axios.put(`${url}/phone`, user);
  return response.data;
};

export const deleteUser = async (user: object) => {
  const response = await axios.delete(`${url}/delete`, user);
  return response.data;
};

export const getAllUsers = async () => {
  const response = await axios.get(`${url}/all`);
  return response.data;
};

export const verifyToken = async (token: string) => {
  const response = await axios.get(`${url}/token`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

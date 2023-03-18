import axios from 'axios';

const url = 'http://localhost:3000/address';

export const registerAddress = async (address: string) => {
  const response = await axios.post(url, { address });
  return response.data;
};

export const getAddressesByID = async (id: string) => {
  const response = await axios.get(`${url}/${id}`);
  return response.data;
};

export const getAllAddresses = async () => {
  const response = await axios.get(url);
  return response.data;
};

export const updateAddress = async (address: string) => {
  const response = await axios.put(url, { address });
  return response.data;
};

export const deleteAddress = async (id: string) => {
  const response = await axios.delete(`${url}/${id}`);
  return response.data;
};

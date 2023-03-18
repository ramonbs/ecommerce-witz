import axios from 'axios';

const url = 'http://localhost:3002/mercadopago';

export const createPreference = async (preference: object) => {
  const response = await axios.post(`${url}/createpreference`, preference);
  return response.data;
};

export const getAllPreferences = async () => {
  const response = await axios.get(`${url}/getallpreferences`);
  return response.data;
};

export const getPreferenceByID = async (id: object) => {
  const response = await axios.get(`${url}/getpreferencebyid/${id}`);
  return response.data;
};

export const getAllPayments = async () => {
  const response = await axios.get(`${url}/getallpayments`);
  return response.data;
};

export const getPaymentByOrderID = async (id: object) => {
  const response = await axios.get(`${url}/getpaymentbyorderid/${id}`);
  return response.data;
};

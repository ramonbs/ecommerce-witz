import axios from 'axios';

const url = 'http://localhost:3002/product';

export const fetchAllProducts = () => axios.get(url);
export const fetchProductsById = (id: string) => axios.get(`${url}/${id}`);
export const fetchProductsByTitle = (title: string) => axios.get(`${url}/title/${title}`);

export const createProduct = (newProduct: object) => axios.post(url, newProduct);

export const updateProduct = (id: string, updatedProduct: object) => axios.patch(`${url}/${id}`, updatedProduct);

export const deleteProduct = (id: string) => axios.delete(`${url}/${id}`);

export const uploadImage = (formData: FormData) => axios.post(`${url}/upload`, formData);

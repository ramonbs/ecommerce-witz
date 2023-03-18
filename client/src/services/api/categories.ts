import axios from 'axios';

const url = 'http://localhost:3000/category';

export const fetchAllCategories = () => axios.get(url);
export const fetchCategoriesById = (id: string) => axios.get(`${url}/${id}`);
export const fetchCategoriesByName = (name: string) => axios.get(`${url}/name/${name}`);

export const createCategory = (newCategory: object) => axios.post(url, newCategory);

export const updateCategory = (id: string, updatedCategory: object) => axios.patch(`${url}/${id}`, updatedCategory);

export const deleteCategory = (id: string) => axios.delete(`${url}/${id}`);

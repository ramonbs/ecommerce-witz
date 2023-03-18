import IProduct from '@interfaces/Product';
import { createSlice } from '@reduxjs/toolkit';

export interface IfilteredProducts {
  filteredProducts: {
    products: IProduct[];
  }
}

const initialState = {
  products: [],
};

const filteredProductsSlice = createSlice({
  name: 'filteredProducts',
  initialState,
  reducers: {
    setFilteredProducts(state, action) {
      state.products = action.payload;
    }
  }
});

export const { setFilteredProducts } = filteredProductsSlice.actions;

export default filteredProductsSlice.reducer;

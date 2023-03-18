import IProduct from '@interfaces/Product';
import { createSlice } from '@reduxjs/toolkit';

export interface IrelatedProducts {
  relatedProducts: {
    products: IProduct[],
  }
}

const initialState = {
  products: [],
};

const relatedProductsSlice = createSlice({
  name: 'relatedProducts',
  initialState,
  reducers: {
    setRelatedProducts: (state, action) => {
      state.products = action.payload;
    }
  }
});

export const { setRelatedProducts } = relatedProductsSlice.actions;
export default relatedProductsSlice.reducer;

import IProduct from '@interfaces/Product';
import { createSlice } from '@reduxjs/toolkit';

export interface IproductDetails {
  productDetails: {
    product: IProduct,
  }
}

const initialState = {
  product: null,
};

const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {
    setProductDetails: (state, action) => {
      state.product = action.payload;
    },
  }
});

export const { setProductDetails } = productDetailsSlice.actions;
export default productDetailsSlice.reducer;

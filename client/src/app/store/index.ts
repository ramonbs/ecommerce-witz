import { configureStore } from '@reduxjs/toolkit';

import filteredProducts from '@app/reducers/filteredProducts';
import menu from '../reducers/menu';
import productDetails from '../reducers/productDetails';
import relatedProducts from '../reducers/relatedProducts';
import user from '../reducers/user';

export const store = configureStore({
  reducer: {
    user,
    menu,
    productDetails,
    relatedProducts,
    filteredProducts,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

import { createSlice } from '@reduxjs/toolkit';

export interface Imenu {
  menu: {
    isOpen: boolean;
  }
}

const initialState = {
  isOpen: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu(state) {
      state.isOpen = !state.isOpen;

      if (state.isOpen) document.body.style.overflow = 'hidden';
      else document.body.style.overflow = 'auto';
    },

    closeMenu(state) {
      state.isOpen = false;

      if (state.isOpen) document.body.style.overflow = 'hidden';
      else document.body.style.overflow = 'auto';
    }
  }
});

export const { toggleMenu, closeMenu } = menuSlice.actions;

export default menuSlice.reducer;

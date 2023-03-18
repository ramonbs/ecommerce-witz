import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { verifyToken } from '@services/api/user';

export interface Iuser {
  user: {
    isAuthed: boolean;
  }
}

export const verifyUserToken = createAsyncThunk(
  'user/verifyToken',
  async () => {
    const token = localStorage.getItem('token');
    const response = await verifyToken(token || '');
    return response;
  }
);

const initialState = {
  isAuthed: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthed = true;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(verifyUserToken.fulfilled, (state, action) => {
      if (action.payload.message === 'Token verified') {
        state.isAuthed = true;
      }
    });
  }
});

export const { login } = userSlice.actions;
export default userSlice.reducer;

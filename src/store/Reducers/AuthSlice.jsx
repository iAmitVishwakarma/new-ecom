import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
  user: JSON.parse(localStorage.getItem('user')) || null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('user');
    },
    signup: (state, action) => {
      // For now, signup will also log the user in
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
  },
});

export const { login, logout, signup } = authSlice.actions;

export default authSlice.reducer;
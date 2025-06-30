import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    addToCart: JSON.parse(localStorage.getItem('cart')) || []
};

export const addToCartSlice = createSlice({
  name: 'addToCart data',
  initialState,
  reducers: {
    setaddToCart: (state, action) => {
      state.addToCart.push(action.payload)
      localStorage.setItem('cart', JSON.stringify(state.addToCart));
    },
    removeaddToCart: (state, action) => {
        state.addToCart = state.addToCart.filter(item => item !== action.payload);
        localStorage.setItem('cart', JSON.stringify(state.addToCart));
      },
    clearCart: (state) => {
      state.addToCart = [];
      localStorage.removeItem('cart');
    }
  }
});

export const { setaddToCart ,  removeaddToCart, clearCart} = addToCartSlice.actions;

export default addToCartSlice.reducer;
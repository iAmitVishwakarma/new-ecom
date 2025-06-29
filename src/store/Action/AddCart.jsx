import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    addToCart: []
};

export const addToCartSlice = createSlice({
  name: 'addToCart data',
  initialState,
  reducers: {
    setaddToCart: (state, action) => {
      state.addToCart.push(action.payload)
    },
    removeaddToCart: (state, action) => {
        state.addToCart = state.addToCart.filter(item => item !== action.payload);
      }
  }
});

export const { setaddToCart ,  removeaddToCart} = addToCartSlice.actions;

export default addToCartSlice.reducer;
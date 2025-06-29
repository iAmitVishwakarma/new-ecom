import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: []
};

export const productSlice = createSlice({
  name: 'Product data',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  }
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlist: JSON.parse(localStorage.getItem('wishlist')) || []
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));

    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(item => item !== action.payload);
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
      // console.log(state.wishlist);
    }
  }}
);

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;


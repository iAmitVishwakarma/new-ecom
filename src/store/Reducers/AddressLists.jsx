import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
  addressList: JSON.parse(localStorage.getItem('addressList')) || []
};

export const addressListSlice = createSlice({
  name: 'addressList',
  initialState,
  reducers: {
    addAddress: (state, action) => {
      state.addressList.push(action.payload);
      localStorage.setItem('addressList', JSON.stringify(state.addressList));
    },
    removeAddress: (state, action) => {
      // Filter the address list to remove the specified address
    state.addressList = state.addressList.filter((address, index) => index !== action.payload)
      
      // Update local storage with the new address list
      localStorage.setItem('addressList', JSON.stringify(state.addressList));
    }
  }
});

export const { addAddress, removeAddress } = addressListSlice.actions;
export default addressListSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: JSON.parse(localStorage.getItem('orders')) || [],
};

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    placeOrder: (state, action) => {
      state.orders.push({ ...action.payload, orderId: new Date().getTime() });
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },
     removeOrder: (state, action) => {
      state.orders = state.orders.filter(order => order.orderId !== action.payload);
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },
    clearOrders: (state) => {
      state.orders = [];
      localStorage.removeItem('orders');
    },
     
  },
});

export const { placeOrder , clearOrders ,removeOrder } = orderSlice.actions;

export default orderSlice.reducer;
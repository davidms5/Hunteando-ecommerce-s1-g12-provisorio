import { createSlice } from '@reduxjs/toolkit';

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
  },
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload.orders;
    },
  },
});
export const { setOrders } = ordersSlice.actions;

export default ordersSlice.reducer;

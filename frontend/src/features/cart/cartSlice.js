import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state.cart[itemIndex].cartQuantity += 1;
        return;
      }

      const product = { ...action.payload, cartQuantity: 1 };
      state.cart.push(product);
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

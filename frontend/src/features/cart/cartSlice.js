import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex((item) => item.id === action.payload.product.id);

      if (itemIndex >= 0) {
        state.cart[itemIndex].cartQuantity += action.payload.quantity;
        return;
      }

      const product = { ...action.payload.product, cartQuantity: action.payload.quantity };

      state.cart.push(product);
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    decreaseCart(state, action) {
      const itemIndex = state.cart.findIndex((item) => item.id === action.payload.product.id);
      if (state.cart[itemIndex].cartQuantity > 1) {
        state.cart[itemIndex].cartQuantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

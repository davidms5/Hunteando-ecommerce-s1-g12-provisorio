import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cart.findIndex((item) => item.ID_PRODUCTO === action.payload.product.ID_PRODUCTO);

      if (itemIndex >= 0) {
        state.cart[itemIndex].cartQuantity += action.payload.quantity;
        return;
      }

      const product = { ...action.payload.product, cartQuantity: action.payload.quantity };

      state.cart.push(product);
    },

    decreaseCart(state, action) {
      const itemIndex = state.cart.findIndex((item) => item.ID_PRODUCTO === action.payload.product.ID_PRODUCTO);

      if (state.cart[itemIndex].cartQuantity > 1) {
        state.cart[itemIndex].cartQuantity -= 1;
        return;
      }

      state.cart = state.cart.filter((item) => item.ID_PRODUCTO !== action.payload.product.ID_PRODUCTO);
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.ID_PRODUCTO !== action.payload.ID_PRODUCTO);
    },
    clearCart(state) {
      state.cart = [];
    },
    getTotals(state, action) {
      let { total, quantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { PRECIO_VENTA, cartQuantity } = cartItem;
          console.log('price', PRECIO_VENTA);
          const itemTotal = PRECIO_VENTA * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } = cartSlice.actions;
export default cartSlice.reducer;

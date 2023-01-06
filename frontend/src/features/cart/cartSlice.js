import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0,
    order: {},
    alerts: ['success', 'danger'],
  },
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cart.findIndex((item) => item.ID_PRODUCTO === action.payload.product.ID_PRODUCTO);

      if (itemIndex >= 0) {
        state.cart[itemIndex].cartQuantity += action.payload.quantity;
        localStorage.setItem('cart', JSON.stringify(state.cart));

        toast.success('Producto(s) añadido', { position: 'bottom-left', autoClose: 1000 });
        return;
      }

      const product = { ...action.payload.product, cartQuantity: action.payload.quantity };

      state.cart.push(product);
      localStorage.setItem('cart', JSON.stringify(state.cart));

      toast.success('Producto(s) añadido', { position: 'bottom-left', autoClose: 1000 });
    },

    decreaseCart(state, action) {
      const itemIndex = state.cart.findIndex((item) => item.ID_PRODUCTO === action.payload.product.ID_PRODUCTO);

      if (state.cart[itemIndex].cartQuantity > 1) {
        state.cart[itemIndex].cartQuantity -= 1;

        localStorage.setItem('cart', JSON.stringify(state.cart));

        toast.error('Producto disminuido', { position: 'bottom-left', autoClose: 1000 });
        return;
      }

      state.cart = state.cart.filter((item) => item.ID_PRODUCTO !== action.payload.product.ID_PRODUCTO);
      localStorage.setItem('cart', JSON.stringify(state.cart));

      toast.error('Producto(s) eliminado', { position: 'bottom-left', autoClose: 1000 });
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.ID_PRODUCTO !== action.payload.ID_PRODUCTO);

      localStorage.setItem('cart', JSON.stringify(state.cart));

      toast.error('Producto(s) eliminado', { position: 'bottom-left', autoClose: 1000 });
    },
    clearCart(state) {
      state.cart = [];

      localStorage.setItem('cart', JSON.stringify(state.cart));

      toast.error('Vaciaste el carrito', { position: 'bottom-left', autoClose: 1000 });
    },
    getTotals(state, action) {
      let { total, quantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { PRECIO_VENTA, cartQuantity } = cartItem;
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
    setOrder(state, action) {
      state.order = action.payload.order;
    },
  },
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals, setOrder } = cartSlice.actions;
export default cartSlice.reducer;

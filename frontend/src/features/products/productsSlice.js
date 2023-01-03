import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    product: {},
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products;
    },
    setProduct: (state, action) => {
      state.product = action.payload.product;
    },
    deleteProduct: (state, action) => {
      console.log(action.payload);
      state.products = action.payload.products;
    },
  },
});
export const { setProducts, setProduct, deleteProduct } = productsSlice.actions;

export default productsSlice.reducer;

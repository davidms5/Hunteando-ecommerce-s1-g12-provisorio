import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    product: {},
  },
  reducers: {
    setProducts: (state, action) => {
      console.log(action.payload.products);
      state.products = action.payload.products;
    },
    setProduct: (state, action) => {
      state.product = action.payload.product;
    },
  },
});
export const { setProducts, setProduct } = productsSlice.actions;

export default productsSlice.reducer;

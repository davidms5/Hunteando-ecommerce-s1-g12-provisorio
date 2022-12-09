import { createSlice } from '@reduxjs/toolkit';

//PRODUCTOS FALSOS
// const products = [
//   {
//     id: 1,
//     title: 'toallitas',
//     description: '',
//     back: 'prod1.jpg',
//     price: 300,
//   },
//   {
//     id: 2,
//     title: 'protectores',
//     description: '',
//     back: './prod2.jpg',
//     price: 300,
//   },
//   {
//     id: 3,
//     title: 'pañales',
//     description: '',
//     back: './prod3.jpg',
//     price: 300,
//   },
// ];

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products;
    },
  },
});
export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;

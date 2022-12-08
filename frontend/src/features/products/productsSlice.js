import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [
      {
        id: 1,
        title: 'toallitas',
        description: '',
        back: 'prod1.jpg',
        price: 300,
      },
      {
        id: 2,
        title: 'protectores',
        description: '',
        back: './prod2.jpg',
        price: 300,
      },
      {
        id: 3,
        title: 'pañales',
        description: '',
        back: './prod3.jpg',
        price: 300,
      },
    ],
  },
  reducers: {},
});

export default productsSlice.reducer;

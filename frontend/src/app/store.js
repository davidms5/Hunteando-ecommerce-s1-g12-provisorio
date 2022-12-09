import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/carSlice';
import productsReducer from '../features/products/productsSlice';

export const store = configureStore({
  reducer: {
    car: carReducer,
    products: productsReducer,
  },
});

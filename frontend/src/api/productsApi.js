import axios from 'axios';

export const productsApi = axios.create({
  baseURL: 'http://localhost:3000',
});
// baseURL: 'https://ecommerce-s1-g12-production-5830.up.railway.app',

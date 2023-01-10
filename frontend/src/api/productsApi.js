import axios from 'axios';

export const productsApi = axios.create({
  baseURL: 'https://ecommerce-s1-g12-production-5830.up.railway.app', // 'http://localhost:3000' En Desarrollo
});

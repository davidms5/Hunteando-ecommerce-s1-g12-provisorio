import axios from 'axios';

const URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://ecommerce-s1-g12-production-5830.up.railway.app';

export const productsApi = axios.create({
  baseURL: URL,
});

console.log(URL);

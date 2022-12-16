import axios from 'axios';

export const productsApi = axios.create({
  baseURL: 'http://localhost:3000/',
});

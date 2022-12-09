import { productsApi } from '../../api/productsApi';
import { setProducts, setProduct } from './productsSlice';
import axios from 'axios';
export const getProducts = () => {
  return async (dispatch) => {
    //TODO: realizar peticion http
    const { data } = await productsApi.get('');
    console.log(data.results);
    dispatch(setProducts({ products: data.results }));
  };
};
export const getProduct = (id) => {
  return async (dispatch) => {
    //TODO: realizar peticion http
    // const { data } = await productsApi.get(`2`);
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    console.log(data);
    dispatch(setProduct({ product: data }));
  };
};

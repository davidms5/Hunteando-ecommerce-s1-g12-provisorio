import { productsApi } from '../../api/productsApi';
import { setProducts, setProduct } from './productsSlice';
import axios from 'axios';
export const getProducts = () => {
  return async (dispatch) => {
    //TODO: realizar peticion http
    const { data } = await productsApi.get('');

    dispatch(setProducts({ products: data.results }));
  };
};
export const getProduct = (id) => {
  return async (dispatch) => {
    //TODO: realizar peticion http
    // const { data } = await productsApi.get(`2`);
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);

    dispatch(setProduct({ product: data }));
  };
};

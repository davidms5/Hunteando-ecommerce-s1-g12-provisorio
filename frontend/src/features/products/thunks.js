import { productsApi } from '../../api/productsApi';
import { setProducts } from './productsSlice';

export const getProducts = () => {
  return async (dispatch, getState) => {
    //TODO: realizar peticion http
    const { data } = await productsApi.get('');
    console.log(data.results);
    dispatch(setProducts({ products: data.results }));
  };
};

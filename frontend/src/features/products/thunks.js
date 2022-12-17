import { productsApi } from '../../api/productsApi';
import { setProducts, setProduct } from './productsSlice';

export const getProducts = () => {
  return async (dispatch) => {
    //TODO: realizar peticion http
    const { data } = await productsApi.get('/products');

    dispatch(setProducts({ products: data }));
  };
};
export const getProduct = (id) => {
  return async (dispatch) => {
    //TODO: realizar peticion http
    // const { data } = await productsApi.get(`2`);
    const { data } = await productsApi.get(`/products/${id}`);

    dispatch(setProduct({ product: data }));
  };
};

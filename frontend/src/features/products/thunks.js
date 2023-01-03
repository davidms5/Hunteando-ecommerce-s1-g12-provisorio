import { productsApi } from '../../api/productsApi';
import { setProducts, setProduct, deleteProduct } from './productsSlice';

export const getProducts = () => {
  return async (dispatch) => {
    const { data } = await productsApi.get('/products');

    dispatch(setProducts({ products: data }));
  };
};
export const getProduct = (id) => {
  return async (dispatch) => {
    const { data } = await productsApi.get(`/products/${id}`);

    dispatch(setProduct({ product: data }));
  };
};

export const onDeleteProduct = (id) => {
  return async (dispatch) => {
    const { data } = await productsApi.delete(`/products/${id}`);
    console.log(data);
    const prod = await getProducts();
    console.log(prod);
    dispatch(setProduct({ products: prod }));
  };
};

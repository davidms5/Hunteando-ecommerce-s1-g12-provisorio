import { productsApi } from '../../api/productsApi';
import { setProducts, setProduct } from './productsSlice';
import { toast } from 'react-toastify';

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
export const deleteProduct = (id) => {
  return async (dispatch) => {
    await productsApi.delete(`/products/${id}`);
    toast.error('Producto eliminado', { position: 'bottom-left', autoClose: 1000 });
    await getProducts();
  };
};

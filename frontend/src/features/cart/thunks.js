import { productsApi } from '../../api/productsApi';
import { setOrder } from './cartSlice';

export const sendOrder = (order) => {
  return async (dispatch) => {
    const { data } = await productsApi.post('/cart', order);

    console.log('order-creada', data);

    return data;
  };
};
export const getOrder = (id) => {
  console.log('id ingresado', id);
  return async (dispatch) => {
    const { data } = await productsApi.get(`/cart/${id}`);
    console.log('order-data', data);
    dispatch(setOrder({ order: data }));
  };
};

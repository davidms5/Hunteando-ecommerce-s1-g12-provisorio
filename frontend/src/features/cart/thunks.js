import { productsApi } from '../../api/productsApi';
import { setOrder } from './cartSlice';

export const sendOrder = (order) => {
  return async (dispatch) => {
    console.log('Orden creada', order);

    const { data } = await productsApi.post('/cart', order);

    console.log('Orden creada', data);

    return data;
  };
};
export const getOrder = (ID) => {
  console.log('id ingresado', ID);
  return async (dispatch) => {
    const { data } = await productsApi.get(`/cart/${ID}`);

    console.log('order-data', data);
    dispatch(setOrder({ order: data }));
  };
};

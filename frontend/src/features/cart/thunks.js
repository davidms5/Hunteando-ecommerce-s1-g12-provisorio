import { productsApi } from '../../api/productsApi';
import { setOrder } from './cartSlice';

export const sendOrder = (order) => {
  return async (dispatch) => {
    const { data } = await productsApi.post('/carrito', order);
    console.log(data);
    getOrder(data.id);
  };
};
export const getOrder = (id) => {
  return async (dispatch) => {
    const { data } = await productsApi.get(`/carrito/${id}`);
    console.log(data);
    dispatch(setOrder({ order: data }));
  };
};

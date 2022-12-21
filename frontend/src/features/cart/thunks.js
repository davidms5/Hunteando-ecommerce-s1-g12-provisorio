import { productsApi } from '../../api/productsApi';
import { setOrder } from './cartSlice';

export const sendOrder = (order) => {
  return async (dispatch) => {
<<<<<<< HEAD
    const { data } = await productsApi.post('/carrito', order);
=======
    const { data } = await productsApi.post('/cart', order);
>>>>>>> 9d37b4b6077e154af6f354f9894ea273ea23b452

    console.log('order-creada', data);

    return data;
  };
};
export const getOrder = (id) => {
  console.log('id ingresado', id);
  return async (dispatch) => {
<<<<<<< HEAD
    const { data } = await productsApi.get(`/carrito/${id}`);
=======
    const { data } = await productsApi.get(`/cart/${id}`);
>>>>>>> 9d37b4b6077e154af6f354f9894ea273ea23b452
    console.log('order-data', data);
    dispatch(setOrder({ order: data }));
  };
};

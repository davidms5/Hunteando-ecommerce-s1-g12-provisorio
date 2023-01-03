import { productsApi } from '../../api/productsApi';
import { setOrders } from './ordersSlice';

export const getOrders = () => {
  return async (dispatch) => {
    const { data } = await productsApi.get('/cart');
    console.log(data);
    dispatch(setOrders({ orders: data }));
  };
};

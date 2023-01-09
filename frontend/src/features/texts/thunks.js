import { productsApi } from '../../api/productsApi';
import { setTexts, setProduct } from './productsSlice';
import { toast } from 'react-toastify';

export const getTexts = () => {
  return async (dispatch) => {
    const { data } = await productsApi.get('');

    dispatch(setTexts({ products: data }));
  };
};

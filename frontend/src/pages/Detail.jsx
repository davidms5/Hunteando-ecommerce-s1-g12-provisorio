import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProduct } from '../features/products/thunks';
import { useParams } from 'react-router-dom';
export const Detail = () => {
  const product = useSelector((state) => state.products.product);

  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(id));
  }, []);
  console.log(product);
  return <div>Detail </div>;
};

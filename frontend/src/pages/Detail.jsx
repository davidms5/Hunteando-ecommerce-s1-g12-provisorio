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

  return (
    <div className="container detail">
      <h2>{product.name}</h2>
      <div className="row">
        <img className="detail__img col-12 col-md-6 " alt="Articulo en carrito" src={product.image}></img>
        <div className="detail__info col-12 col-md-6 d-flex flex-column justify-content-end">
          <span>Categoria: {product.gender}</span>
          <span>Existencia: {product.species}</span>
          <span>Precio: {product.status}</span>
        </div>
      </div>
    </div>
  );
};

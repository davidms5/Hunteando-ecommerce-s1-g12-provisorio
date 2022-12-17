import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProduct } from '../features/products/thunks';
import { useParams } from 'react-router-dom';
import ItemCount from '../components/ItemCount';

export const Detail = () => {
  const product = useSelector((state) => state.products.product);

  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  return (
    <div>
      {!product ? (
        <div>hola</div>
      ) : (
        <div className="container detail">
          <h2>{product.NOMBRE_PRODUCTO}</h2>
          <div className="row">
            <img className="detail__img col-12 col-md-6 " src={product.IMAGEN} alt={product.NOMBRE_PRODUCTO} />
            <div className="detail__info col-12 col-md-6 d-flex flex-column justify-content-end">
              <span>marca: {product.MARCA}</span>

              <span>Precio: {product.PRECIO_VENTA}</span>
              <ItemCount product={product} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

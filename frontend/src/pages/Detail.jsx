import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProduct } from '../features/products/thunks';
import { useParams } from 'react-router-dom';
import ItemCount from '../components/ItemCount';
import '../css/detail.css';

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
        <div className="container detail py-3">
          <h2>{product.NOMBRE_PRODUCTO}</h2>
          <div className="row">
            <div className="col-12 col-md-6 img-fluid ">
              <img
                className="detail__img img-fluid rounded "
                src={product.IMAGEN ? product.IMAGEN : require('../assets/no-disponible.png')}
                alt={product.NOMBRE_PRODUCTO}
              />
            </div>
            <div className="detail__info col-12 col-md-6 d-flex flex-column justify-content-end">
              <p>
                <span className="fw-bold">Descripcion:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Porro animi soluta facere doloremque! Dolore placeat perspiciatis facere autem ullam, accusamus
                voluptates asperiores sequi cumque maiores suscipit error? Perferendis, architecto dolorem.
              </p>
              <span>
                <span className="fw-bold">Existencia:</span> {product.EXISTENCIA}
              </span>
              <span>
                <span className="fw-bold">Stock:</span> {product.CANTIDAD}
              </span>

              <span>
                <span className="fw-bold">Precio:</span> ${product.PRECIO_VENTA}
              </span>
              <div className="pt-4 pb-2">
                <ItemCount product={product} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

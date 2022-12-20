import React from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';
import '../css/card.css';

/* Creo un nuevo objeto product con datos falsos para poder pintar mientras el backend nos disponibiliza la API real.   */

export const Card = ({ product }) => {
  // const product = { NOMBRE_PRODUCTO, PRECIO_VENTA, IMAGEN, ID_PRODUCTO };

  const navigate = useNavigate();
  return (
    <div>
      {!product ? (
        <div>HOla</div>
      ) : (
        <div className="cards h-100 pb-2">
          <div onClick={() => navigate(`/detail/${product.ID_PRODUCTO}`)} className="card-header">
            <img
              className="img-fluid card-header-img"
              src={product.IMAGEN ? product.IMAGEN : require('../assets/no-disponible.png')}
              alt={product.NOMBRE_PRODUCTO}
            />
          </div>
          <div className="card-body">
            <div className="card-description">
              <h5 className="text-center">{product.NOMBRE_PRODUCTO}</h5>
              <span>Precio: ${product.PRECIO_VENTA}</span>
            </div>
            <div className="card-button">
              <ItemCount product={product} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import React from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';
import '../css/card.css';

/* Creo un nuevo objeto product con datos falsos para poder pintar mientras el backend nos disponibiliza la API real.   */

export const Card = ({ NOMBRE_PRODUCTO, PRECIO_VENTA, MARCA, IMAGEN, id, addId }) => {
  const product = { name, price: 300, image, id };

  const navigate = useNavigate();
  return (
    <div className="cards">
      <div onClick={() => navigate(`/detail/${id}`)} className="card-header">
        <img src={image} alt={name} />
      </div>
      <div className="card-body">
        <div className="card-description">
          <h5 className="text-center">{name}</h5>
          <span>Precio: ${price}</span>
        </div>
        <div className="card-button">
          <ItemCount product={product} />
        </div>
      </div>
    </div>
  );
};

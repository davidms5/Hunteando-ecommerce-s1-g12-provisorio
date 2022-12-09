import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/card.css';

export const Card = ({ title, price, back, id, addId }) => {
  const navigate = useNavigate();
  return (
    <div className="cards">
      <div onClick={() => navigate(`/detail/${id}`)} className="card-header">
        <img src={back} alt={title} />
      </div>
      <div className="card-body">
        <div className="card-description">
          <h5 className="text-center">{title}</h5>
          <span>Precio: ${price}</span>
        </div>
        <div className="card-button">
          <button onClick={() => addId(id)}>add</button>
        </div>
      </div>
    </div>
  );
};

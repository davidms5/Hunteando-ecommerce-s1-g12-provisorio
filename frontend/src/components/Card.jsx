import React from "react";
import "../css/card.css";

export const Card = ({ title, price, back, id, addId }) => {
  return (
    <div className="cards">
      <div className="card-header">
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

import React from 'react';
import { useState } from 'react';

const ThankYou = ({ total, id, order }) => {
  const [show, setShow] = useState(false);

  function openModal() {
    setShow(true);
  }
  function closeModal() {
    setShow(false);
  }

  return (
    <div
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Orden nro: {id}
            </h1>
            <button type="button" className="btn-close close" aria-label="Close" onClick={() => closeModal()}></button>
          </div>
          <div className="modal-body ">
            <p>Muchas gracias por su compra </p>
            <h2>Detalles de su orden:</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Título</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {order.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">
                      <img
                        className="logoTable"
                        alt="articulo"
                        src={item.IMAGEN ? item.IMAGEN : require('../assets/no-disponible.png')}
                      />
                    </th>
                    <td>{item.NOMBRE_PRODUCTO}</td>
                    <td>{item.PRECIO_VENTA}</td>
                    <td>{item.cartQuantity}</td>
                    <td>{item.cartQuantity * item.PRECIO_VENTA}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <span>Total compra: </span>
            <span>{total}</span>
          </div>
          <div className="modal-footer">
            <button type="button" onClick={() => closeModal()} className="btn btn-secondary">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;

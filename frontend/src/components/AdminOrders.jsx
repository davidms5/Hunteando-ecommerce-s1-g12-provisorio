import React from 'react';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrders } from '../features/orders/thunks';

const AdminOrders = () => {
  const { orders } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <div className="container">
      <h2>Ordenes:</h2>
      {orders.map((order, index) => (
        <div key={index} className="d-flex flex-column rounded shadow-lg my-2 p-4">
          <div className="d-md-flex justify-content-between">
            <h3>Order: {order.ID} </h3>
            <span>
              <span className="fw-semibold">Fecha: </span>
              {order.FECHA_DE_COMPRA}
            </span>
          </div>
          <span>
            <span className="fw-semibold">Nombre:</span> {order.NOMBRE}
          </span>
          <span>
            <span className="fw-semibold">Apellido: </span>
            {order.APELLIDO}
          </span>
          <span>
            <span className="fw-semibold">Email:</span> {order.EMAIL}
          </span>
          <span>
            <span className="fw-semibold">Precio total: </span>
            {order.PRECIO_TOTAL}
          </span>
          <span>
            <span className="fw-semibold">Cantidad: </span>
            {order.CANTIDAD}
          </span>
          <span>
            <span className="fw-semibold">Productos: </span>
            {order.PRODUCTO}
          </span>
        </div>
      ))}
    </div>
  );
};

export default AdminOrders;

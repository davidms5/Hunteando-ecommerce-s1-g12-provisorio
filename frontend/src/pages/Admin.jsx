import React from 'react';
import AdminProducts from '../components/AdminProducts';
import AdminOrders from '../components/AdminOrders';
import { useState } from 'react';

const Admin = () => {
  const [renderProducts, setRenderProducts] = useState(false);

  const changeView = () => {
    console.log('das');
    setRenderProducts(!renderProducts);
  };
  return (
    <div className="d-flex flex-column justify-content-center">
      <h1 className="text-center">ADMIN</h1>
      <div className="d-flex justify-content-center gap-3">
        {renderProducts ? (
          <button onClick={changeView} className="button">
            Ver ordenes
          </button>
        ) : (
          <button onClick={changeView} className="button">
            Administrar productos
          </button>
        )}
      </div>
      {!renderProducts ? <AdminProducts /> : <AdminOrders />}
    </div>
  );
};

export default Admin;

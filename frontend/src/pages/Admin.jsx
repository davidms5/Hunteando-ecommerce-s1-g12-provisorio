import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="d-flex flex-column justify-content-center">
      <h1 className="text-center">ADMIN</h1>
      <div className="d-flex justify-content-center gap-3">
        <Link to="productos" className="button">
          Productos
        </Link>
        <Link to="ordenes" className="button">
          Ordenes
        </Link>
        <Link to="textos" className="button">
          Textos
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Admin;

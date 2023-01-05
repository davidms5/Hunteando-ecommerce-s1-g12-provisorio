import React from 'react';
import '../css/loading.css';

const Loading = () => {
  return (
    <div className="loading d-flex flex-column justify-content-center align-items-center">
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className="text-light">Cargando...</span>
    </div>
  );
};
export default Loading;

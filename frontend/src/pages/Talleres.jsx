import React from 'react';
import talleres from '../assets/talleres.jpg';
// import '../css/talleres.css';

const Talleres = () => {
  return (
    <div className="about">
      <h1 className="text-center">Talleres</h1>
      <div className="container">
        <div className="row about-row">
          <div className="col-12 col-md-6">
            <p>
              Si estas interesad@ en tomar un taller por favor contactame a mi email autogestionmenstrual@gmail.com o
              traves del formulario que esta en el pie de la pagina.
            </p>
          </div>
          <div className="about-row__2 col-12 col-md-6">
            <img src={talleres} alt="background" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talleres;

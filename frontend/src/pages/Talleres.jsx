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
              Queremos compartir encuentros para que juntes aprendamos entre otras cosas, sobre la
              menarquía,autocuidado, autoconocimiento.
            </p>
            <p>
              {' '}
              Compartiendo herramientas para aplicar en sus vidas y decisiones con conocimiento, derribando tabúes,
              promoviendo la autoestima y el empoderamiento.{' '}
            </p>
            <p>
              {' '}
              Para más información podés escribirme a{' '}
              <a href="mailto:autogestionmenstrual@gmail.com">autogestionmenstrual@gmail.com</a> o dejándome un mensaje
              al formulario al pie de la página
            </p>
          </div>
          <div className="about-row__2col-12 col-md-6">
            <img className=" rounded " src={talleres} alt="background" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talleres;

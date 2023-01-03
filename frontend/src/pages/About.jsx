import React from 'react';
import card from '../assets/fondo.png';
import '../css/about.css';

const About = () => {
  return (
    <div className="about">
      <h1 className="text-center">Acerca de </h1>
      <div className="container">
        <div className="row about-row">
          <div className="col-12 col-md-6">
            <p>
              Somos un emprendimiento que nace en el corazón del Valle de Uco; Tunuyán Mendoza. Nos ocupa y preocupa la
              conciencia sobre el medio ambiente y el cuidado corporal. Soy Coni, confecciono productos para la gestión
              menstrual saludable y ecológica. Te ofrezco protectores diarios, toallas menstruales, protectores mamarios
              de tela e insumos sustentables.
            </p>
            <p>
              Están elaborados con telas estrictamente seleccionadas y testeadas, tales como algodón 100% en contacto
              con la piel(hipoalergenico),capas absorbentes y tela pul que es impermeable y respirable en contacto con
              el exterior. Los materiales descartables además de contaminar nuestro cuerpo con químicos y conservantes,
              tardan alrededor de 500 años en degradarse. Por lo que hay que tomar conciencia del impacto que genera. Te
              propongo una alternativa de consumo responsable, económico y respetuoso para el medio ambiente y nuestro
              cuerpo.
            </p>
            <p>
              Gestionar nuestro ciclo menstrual de manera conciente y sustentable es un camino que todes tienen derecho
              de poder acceder. Estas son las bases de este proyecto autogestivo y colaborativo, es así que se gestó
              Autogestión Menstrual. No sólo se entiende como un emprendiento donde encontrarás productos para gestionar
              tu menstruación, también se acompaña esa transición o la confección de tus propias toallitas o protectores
              como herramienta de empoderamiento y autogestión. Le damos vital importancia a la reconquista conciente de
              nuestra cuerpa como territorio desde la autogestión.
            </p>

            <p>Anímate a pasar a tela, tu pedido puede ser personalizado según tus necesidades.</p>
            <p>Usá, lavá y volvé a usar.</p>
            <p>Ciclemos en telas. ¿Tenes dudas? Escribime, te acompaño a transitar un cambio amigable.</p>
          </div>
          <div className="about-row__2 col-12 col-md-6">
            <img src={card} alt="background" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

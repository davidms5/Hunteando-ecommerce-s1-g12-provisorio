import React from "react";
import card from "../assets/fondo.png";
import "../css/about.css"

const About = () => {
  return (
    <div className="about">
      <h1 className="text-center">Acerca de </h1>
      <div className="container">
        <div className="row about-row">
          <div className="col-12 col-md-6">
            Nulla id fermentum enim. Nam vitae quam vitae diam tincidunt varius.
            Sed ante est, varius interdum molestie nec, condimentum sit amet
            tellus. Curabitur faucibus nulla nisl, mollis posuere odio eleifend
            dapibus. Praesent vitae auctor nisi, id pulvinar urna. Nulla
            tincidunt, ligula et consectetur volutpat, eros arcu feugiat leo,
            quis malesuada erat libero ac risus. Proin iaculis iaculis
            porttitor. In commodo justo sit amet hendrerit sodales. Proin
            egestas placerat auctor. Nullam suscipit, nulla nec mollis
            tincidunt, quam elit fermentum elit, eu ultrices tellus tortor quis
            nulla. Proin porta purus ut tellus ullamcorper, quis condimentum
            elit lobortis. Mauris in quam augue. Etiam elementum lectus congue,
            aliquet lorem quis, blandit felis. Donec vitae sodales sem. Cras
            porta diam arcu, sed dictum urna vulputate vel. Ut a rutrum nisl,
            euismod porttitor ex.
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

import React from 'react';
import carritoVacio from '../assets/carritoVacio.png';
import { Link } from 'react-router-dom';
import '../css/car.css';

//redux
import { useSelector } from 'react-redux';

const Car = () => {
  const car = useSelector((state) => state.car.car);
  console.log(car);
  return (
    <div className="cart-container">
      <div className="container">
        {car.length === 0 ? (
          <div className="cart">
            <img className="cart-img" src={carritoVacio} alt="carrito vacio" />
            <h1>CARRITO VACIO</h1>
            <Link to={'/products'}>
              <button className="cart-button">Ir a comprar...</button>
            </Link>
          </div>
        ) : (
          <div className="row">
            <h1 className="text-center my-5">DETALLES DE SU COMPRA</h1>
            <div className="col-12 col-md-6">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Título</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  {car.map((item, index) => (
                    <tr>
                      <th scope="row">
                        <img className="logoTable" src={item.back} />
                      </th>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>1</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className=" col-12 col-md-6">
              <div className="ticket my-3">
                <h1 className="text-center">TICKET DE COMPRA</h1>
                <form>
                  <div className="d-flex justify-content-between my-3">
                    <span>Precio :</span>
                    <span>$300</span>
                  </div>
                  <div className="d-flex justify-content-between my-3">
                    <span>Descuento :</span>
                    <span>$300</span>
                  </div>
                  <div className="d-flex justify-content-between my-3">
                    <span>envio:</span>
                    <span>$300</span>
                  </div>
                  <div className="d-flex justify-content-between my-3">
                    <span>Total</span>
                    <span>$300</span>
                  </div>
                  <button>PAGAR</button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Car;

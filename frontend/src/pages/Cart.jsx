import React from 'react';
import carritoVacio from '../assets/carritoVacio.png';
import { Link } from 'react-router-dom';
import '../css/car.css';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice.js';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const removeItem = (product) => {
    dispatch(removeFromCart(product));
  };
  console.log(cart);
  return (
    <div className="cart-container">
      <div className="container">
        {cart.length === 0 ? (
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
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Título</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">
                        <img className="logoTable" alt="articulo" src={item.image} />
                      </th>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.cartQuantity}</td>
                      <td onClick={() => removeItem(item)} className="text-danger fw-bold">
                        X
                      </td>
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

export default Cart;

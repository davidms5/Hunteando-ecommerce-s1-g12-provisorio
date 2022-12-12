import React from 'react';

import carritoVacio from '../assets/carritoVacio.png';
import { Link } from 'react-router-dom';
import '../css/car.css';
import ThankYou from '../components/ThankYou';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart, decreaseCart, clearCart } from '../features/cart/cartSlice.js';

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const { cartTotalAmount } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  let orderId = 'orderNumber';

  const removeItem = (product) => {
    dispatch(removeFromCart(product));
  };
  const increaseItem = (product) => {
    dispatch(addToCart({ product, quantity: 1 }));
  };
  const decreaseItem = (product) => {
    dispatch(decreaseCart({ product }));
  };
  const removeAllItem = () => {
    dispatch(clearCart());
  };

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
                      <td>
                        <button onClick={() => decreaseItem(item)}>-</button>
                        {item.cartQuantity}
                        <button onClick={() => increaseItem(item)}>+</button>
                      </td>
                      <td onClick={() => removeItem(item)} className="text-danger fw-bold">
                        X
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={() => removeAllItem()}>Vaciar</button>
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
                  {/* <!-- Boton de agradecimiento modal --> */}

                  <button
                    onClick={() => console.log('hola')}
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target={`#${orderId}`}
                  >
                    PAGAR
                  </button>

                  <ThankYou id={orderId} order={cart} total={cartTotalAmount} />
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

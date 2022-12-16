import React, { useState } from 'react';

import carritoVacio from '../assets/carritoVacio.png';
import { Link } from 'react-router-dom';
import '../css/cart.css';
import ThankYou from '../components/ThankYou';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart, decreaseCart, clearCart } from '../features/cart/cartSlice.js';

const Cart = () => {
  const [mostrar, setMostrar] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const { cartTotalAmount } = useSelector((state) => state.cart);

  // Se agrega descuento y delivery falso para probar funcionalidad ELIMINAR LA TENER LA API DEL BACKEND
  const discount = 100;
  const delivery = 200;

  const dispatch = useDispatch();

  let orderId = 'orderNumber';

  const removeItem = (product) => {
    dispatch(removeFromCart(product));
    setMostrar(!mostrar);
    setTimeout(() => {
      setMostrar(false);
    }, 1000);
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

            <div className="cart-alert-delete col-12 col-md-6">
              <h2 className="text-center">PRODUCTOS</h2>
              {mostrar ? (
                <div className="alert alert-danger" role="alert">
                  Producto eliminado
                </div>
              ) : (
                <></>
              )}
              <table className="table td-border-none ">
                <thead className="td-border-none">
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Título</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>

                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody className="td-border-none">
                  {cart.map((item, index) => (
                    <tr className="shadow-sm rounded td-border-none" key={index}>
                      <th scope="row">
                        <img className="logoTable" alt="articulo" src={item.image} />
                      </th>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>
                        <button className="cart-button" onClick={() => decreaseItem(item)}>
                          -
                        </button>
                        {item.cartQuantity}
                        <button className="cart-button" onClick={() => increaseItem(item)}>
                          +
                        </button>
                      </td>

                      <td className="position-relative">
                        {item.cartQuantity * item.price}
                        <span
                          onClick={() => removeItem(item)}
                          className=" text-danger p-1 fw-semibold position-absolute top-0 start-70"
                        >
                          x
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="cart-button" onClick={() => removeAllItem()}>
                Vaciar
              </button>
            </div>
            <div className=" col-12 col-md-6">
              <div className="ticket my-3 m-md-0 p-0">
                <h2 className="text-center">TICKET DE COMPRA</h2>
                <form>
                  <div className="d-flex justify-content-between my-3">
                    <span>Precio :</span>
                    <span>${cartTotalAmount}</span>
                  </div>
                  <div className="d-flex justify-content-between my-3">
                    <span>Descuento :</span>
                    <span>-${discount}</span>
                  </div>
                  <div className="d-flex justify-content-between my-3">
                    <span>envio:</span>
                    <span>${delivery}</span>
                  </div>
                  <div className="d-flex justify-content-between my-3">
                    <span>Total</span>
                    <span>${cartTotalAmount - discount + delivery}</span>
                  </div>
                  {/* <!-- Boton de agradecimiento modal --> */}

                  <button
                    type="button"
                    className="btn btn-primary cart-button"
                    data-bs-toggle="modal"
                    data-bs-target={`#${orderId}`}
                    onClick={() => removeAllItem()}
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

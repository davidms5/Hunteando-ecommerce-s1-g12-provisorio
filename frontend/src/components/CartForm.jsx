import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../css/contact.css';
import { clearCart } from '../features/cart/cartSlice.js';

import { sendOrder, getOrder } from '../features/cart/thunks';
import { useDispatch, useSelector } from 'react-redux';
import ThankYou from '../components/ThankYou';

const CartForm = ({ orden, total }) => {
  const [show, setShow] = useState(false);
  const { order, cartTotalQuantity } = useSelector((state) => state.cart);

  function openModal() {
    setShow(true);
  }
  function closeModal() {
    setShow(false);
    removeAllItem();
  }
  const dataSchema = Yup.object().shape({
    name: Yup.string().required('Debe ingresar un nombre'),
    surname: Yup.string().required('Debe ingresar un apellido'),
    email: Yup.string().required('Debe ingresar un email').email('Email invalido'),
  });
  const dispatch = useDispatch();
  const removeAllItem = () => {
    dispatch(clearCart());
  };

  const formData = {
    name: '',
    surname: '',
    email: '',
  };

  return (
    <div className="contact">
      <Formik
        initialValues={formData}
        validationSchema={dataSchema}
        onSubmit={(values, { resetForm }) => {
          const orderData = {
            NOMBRE: values.name,
            APELLIDO: values.surname,
            EMAIL: values.email,
            PRODUCTO: 19,
            CANTIDAD: cartTotalQuantity,
            PRECIO_TOTAL: total,
          };

          console.log('Orden enviada', orderData);

          dispatch(sendOrder(orderData))
            .then((data) => {
              console.log('Orden enviada return', data);
              dispatch(getOrder(data.ID));
            })
            .then((e) => {
              openModal();
              resetForm();
            });
        }}
      >
        {({ errors, touched }) => {
          return (
            <>
              <div
                className={show ? 'modal modal-lg fade show' : 'modal fade'}
                style={{ display: show ? 'block' : 'none' }}
                tabndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-modal="true"
                role="dialog"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Orden ID: {order.ID}</h5>
                      <button
                        type="button"
                        className="btn-close close"
                        aria-label="Close"
                        onClick={() => closeModal()}
                      ></button>
                    </div>
                    <div className="modal-body ">
                      <h2 className="h3">Datos</h2>
                      <p>
                        <span className="fw-bold">Nombre</span> :{order.NOMBRE}
                      </p>
                      <p>
                        <span className="fw-bold">Apellido:</span> {order.APELLIDO}
                      </p>
                      <p>
                        <span className="fw-bold">Email:</span> {order.EMAIL}
                      </p>
                      <p>
                        <span className="fw-bold">Fecha:</span> {order.FECHA_DE_COMPRA}
                      </p>

                      <h3 className="h3">Detalles de su orden:</h3>
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">Título</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orden.map((item, index) => (
                            <tr key={index}>
                              <th scope="row">
                                <img
                                  className="logoTable"
                                  alt="articulo"
                                  src={item.IMAGEN ? item.IMAGEN : require('../assets/no-disponible.png')}
                                />
                              </th>
                              <td>{item.NOMBRE_PRODUCTO}</td>
                              <td>${item.PRECIO_VENTA}</td>
                              <td>{item.cartQuantity}</td>
                              <td>${item.cartQuantity * item.PRECIO_VENTA}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <span className="fw-bold">Total compra: </span>
                      <span>${total}</span>
                    </div>
                    <div className="modal-footer d-flex justify-content-between">
                      <p className="h4 ">Muchas gracias por su compra </p>
                      <button type="button" onClick={() => closeModal()} className="btn btn-secondary">
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <Form className="form-cart mx-auto mt-2">
                <h3 className="text-center m-0">DATOS</h3>
                <div className="modal-backdrop fade show" style={{ display: show ? 'block' : 'none' }}></div>
                <div className="d-flex flex-column my-4  position-relative">
                  <label htmlFor="name" className="fw-semibold">
                    Nombre:
                  </label>
                  <Field name="name" />
                  {touched.name ? <div className="error">{errors.name}</div> : <></>}
                </div>
                <div className="d-flex flex-column my-4 position-relative">
                  <label htmlFor="surname" className="fw-semibold">
                    Apellido:
                  </label>
                  <Field name="surname" />
                  {touched.surname ? <div className="error">{errors.surname}</div> : <></>}
                </div>
                <div className="d-flex flex-column my-4 position-relative">
                  <label htmlFor="email" className="fw-semibold">
                    Email:
                  </label>
                  <Field name="email" />
                  {touched.email ? <div className="error">{errors.email}</div> : <></>}
                </div>

                <button className="cart-button mb-2" type="submit">
                  Pagar
                </button>

                <ThankYou orden={orden} total={total} />
              </Form>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default CartForm;

import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import axios from 'axios';
import '../css/contact.css';
import { clearCart } from '../features/cart/cartSlice.js';

import { sendOrder, getOrder } from '../features/cart/thunks';
import { useDispatch, useSelector } from 'react-redux';
import ThankYou from '../components/ThankYou';

const CartForm = ({ orden, total }) => {
  const [show, setShow] = useState(false);
  const { order } = useSelector((state) => state.cart);

  function openModal() {
    setShow(true);
  }
  function closeModal() {
    setShow(false);
    removeAllItem();
  }
  const [send, setSend] = useState(false);
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
      <h3 className="text-center">DATOS</h3>
      <Formik
        initialValues={formData}
        validationSchema={dataSchema}
        onSubmit={(values, { resetForm }) => {
          const orderData = {
            NOMBRE: values.name,
            APELLIDO: values.surname,
            EMAIL: values.email,
            PRODUCTO_ID: 20,
            CANTIDAD: 650,
<<<<<<< HEAD
            PRECIO_TOTAKL: total,
            MEDIO_DE_PAGO: 'No se',
=======
            PRECIO_TOTAL: total,
>>>>>>> 9d37b4b6077e154af6f354f9894ea273ea23b452
          };
          const prueba = dispatch(sendOrder(orderData))
            .then((data) => {
              dispatch(getOrder(data.id));
            })
            .then((e) => {
              openModal();
              resetForm();
              setSend(true);
            });
          // axios({
          //   method: 'post',
          //   url: 'http://localhost:3000/carrito',
          //   data: orderData,
          // }).then((e) => {
          //   openModal();

          //   resetForm();
          //   setSend(true);
          // });
        }}
      >
        {({ errors, touched }) => {
          return (
            <Form className="w-50 mx-auto">
              <div
                className={show ? 'modal fade show' : 'modal fade'}
                style={{ display: show ? 'block' : 'none' }}
                tabndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-modal="true"
                role="dialog"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">OrderNro</h5>
                      <button
                        type="button"
                        className="btn-close close"
                        aria-label="Close"
                        onClick={() => closeModal()}
                      ></button>
                    </div>
                    <div className="modal-body ">
                      <p>Muchas gracias por su compra </p>
                      <h2>Detalles de su orden:</h2>
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
                              <td>{item.PRECIO_VENTA}</td>
                              <td>{item.cartQuantity}</td>
                              <td>{item.cartQuantity * item.PRECIO_VENTA}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <span>Total compra: </span>
                      <span>{total}</span>
                    </div>
                    <div className="modal-footer">
                      <button type="button" onClick={() => closeModal()} className="btn btn-secondary">
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-backdrop fade show" style={{ display: show ? 'block' : 'none' }}></div>
              <div className="d-flex flex-column my-4  position-relative">
                <label htmlFor="name">Nombre</label>
                <Field name="name" />
                {touched.name ? <div className="error">{errors.name}</div> : <></>}
              </div>
              <div className="d-flex flex-column my-4 position-relative">
                <label htmlFor="surname">Apellido</label>
                <Field name="surname" />
                {touched.surname ? <div className="error">{errors.surname}</div> : <></>}
              </div>
              <div className="d-flex flex-column my-4 position-relative">
                <label htmlFor="email">Email</label>
                <Field name="email" />
                {touched.email ? <div className="error">{errors.email}</div> : <></>}
              </div>

              <button className="btn btn-primary cart-button" type="submit">
                Pagar
              </button>

              <ThankYou orden={orden} total={total} />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CartForm;

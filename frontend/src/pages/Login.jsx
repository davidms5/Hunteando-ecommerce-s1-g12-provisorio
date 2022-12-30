import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import axios from "axios";
import '../css/contact.css';
import Button from '../components/Button';

const Login = () => {
  const [send, setSend] = useState(false);
  const datosSchema = Yup.object().shape({
    name: Yup.string().required('debe ingresar un nombre'),
    surname: Yup.string().required('Debe ingresar su apellido'),
    email: Yup.string().required('Debe ingresar un email').email('email invalido'),
    message: Yup.string().required('Debe ingresar un mensaje'),
  });

  const datos = {
    name: '',
    surname: '',
    email: '',
    message: '',
  };

  return (
    <div className="contact container">
      <h3 className="text-center">Iniciar Sesion</h3>
      <Formik
        initialValues={datos}
        validationSchema={datosSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          console.log('Enviado');
          resetForm();
          setSend(true);
          setTimeout(() => {
            setSend(false);
          }, 5000);
        }}
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <div className="d-flex flex-column my-4 position-relative">
                <label htmlFor="name">Usuario</label>
                <Field name="name" />
                {touched.name ? <div className="error">{errors.name}</div> : <></>}
              </div>
              <div className="d-flex flex-column my-4 position-relative">
                <label htmlFor="surname">Contraseña</label>
                <Field name="surname" />
                {touched.surname ? <div className="error">{errors.surname}</div> : <></>}
              </div>

              <div className="d-flex justify-content-center py-4 position-relative">
                <Button text={'ingresar'} />
                {send ? (
                  <div className="position-absolute bottom-0 text-success">Muchas gracias, mensaje enviado...</div>
                ) : (
                  <></>
                )}
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;

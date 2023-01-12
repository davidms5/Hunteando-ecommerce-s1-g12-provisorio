import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../css/login.css';
import Button from '../components/Button';

const Login = () => {
  const [credentials, setCredentials] = useState(true);

  const admin = {
    email: 'admin@admin.com',
    pass: 'abcd',
  };

  const navigate = useNavigate();

  const datosSchema = Yup.object().shape({
    email: Yup.string().required('Debe ingresar un email').email('Email invalido'),
    pass: Yup.string().required('Debe ingresar su contraseña'),
  });

  const onSubmit = (values, { resetForm }) => {
    if (values.email === admin.email && values.pass === admin.pass) {
      navigate('/admin');
    }
    resetForm();
    setCredentials(false);
    setTimeout(() => {
      setCredentials(true);
    }, 2000);
  };

  const datos = {
    pass: '',
    email: '',
  };

  return (
    <div className="container login-form my-4">
      <h3 className="text-center">Iniciar Sesión</h3>
      <Formik initialValues={datos} validationSchema={datosSchema} onSubmit={onSubmit}>
        {({ errors, touched }) => {
          return (
            <div>
              <Form>
                <div className="d-flex flex-column my-4 position-relative">
                  <label htmlFor="email">Email</label>
                  <Field name="email" />
                  {touched.email ? <div className="error text-danger">{errors.email}</div> : <></>}
                </div>
                <div className="d-flex flex-column my-4 position-relative">
                  <label htmlFor="pass">Contraseña</label>
                  <Field name="pass" type="password" />
                  {touched.pass ? <div className="error text-danger">{errors.pass}</div> : <></>}
                </div>
                <div className="d-flex justify-content-center py-4 position-relative">
                  <Button text={'Ingresar'} />
                  {!credentials ? (
                    <div className="position-absolute bottom-0 text-danger">
                      Error al ingresar, verifique sus datos.
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;

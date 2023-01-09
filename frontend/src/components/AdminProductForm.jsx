import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { createProduct, getProducts } from '../features/products/thunks';

const AdminProductForm = ({ product }) => {
  const { NOMBRE_PRODUCTO, DESCRIPCION, PRECIO_VENTA, IMAGEN } = product;
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const dataSchema = Yup.object().shape({
    name: Yup.string().required('Debes ingresar un nombre para el producto.'),
    description: Yup.string(),
    price: Yup.number('Este campo solo admite numeros.')
      .required('Debes ingresar el precio del producto.')
      .positive('El precio debe ser un valor positivo.'),
    image: Yup.mixed().required('Debes subir una imagen.'),
  });

  const formData = {
    name: NOMBRE_PRODUCTO ? NOMBRE_PRODUCTO : '',
    description: DESCRIPCION ? DESCRIPCION : '',
    price: PRECIO_VENTA ? PRECIO_VENTA : '',
    image: IMAGEN ? IMAGEN : '',
  };

  return (
    <div
      className={show ? 'modal modal-lg fade show' : 'modal fade'}
      id="exm"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Agregar nuevo producto
            </h1>
          </div>
          <div className="modal-body contact">
            <Formik
              initialValues={formData}
              validationSchema={dataSchema}
              onSubmit={(values, { resetForm }) => {
                const product = {
                  NOMBRE_PRODUCTO: values.name,
                  DESCRIPCION: values.description,
                  PRECIO_VENTA: values.price,
                  DESCUENTO: 10, // esto se eliminara una vez optimizada la DB
                  IMAGEN: values.image,
                };
                console.log('product', product);
                console.log('valores', values);

                dispatch(createProduct(product)).then(() => {
                  resetForm();
                  dispatch(getProducts());
                });
                resetForm();
              }}
            >
              {({ errors, touched }) => {
                return (
                  <Form>
                    <div className="d-flex flex-column my-4 position-relative">
                      <label htmlFor="name">Nombre:</label>
                      <Field name="name" />
                      {touched.name ? <div className="error">{errors.name}</div> : <></>}
                    </div>

                    <div className="d-flex flex-column my-4 position-relative">
                      <label htmlFor="description">Descripción:</label>
                      <Field as="textarea" name="description" />
                      {touched.description ? <div className="error">{errors.description}</div> : <></>}
                    </div>
                    <div className="d-flex flex-column my-4 position-relative">
                      <label htmlFor="price">Precio:</label>
                      <Field type="number" name="price" />
                      {touched.price ? <div className="error">{errors.price}</div> : <></>}
                    </div>

                    <div className="d-flex flex-column my-4 position-relative">
                      <label htmlFor="image">Imagen</label>
                      <Field type="file" name="image" />
                      {touched.image ? <div className="error">{errors.image}</div> : <></>}
                    </div>
                    <div className="modal-footer d-flex justify-content-between position-relative">
                      <button type="reset" className="button bg-secondary" data-bs-dismiss="modal">
                        Cancelar
                      </button>

                      <div data-bs-dismiss="modal">
                        <Button type="submit" text={'Enviar'} />
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminProductForm;

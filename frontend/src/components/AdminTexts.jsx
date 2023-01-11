import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, deleteProduct, createProduct, editProduct } from '../features/products/thunks';
import '../css/adminProducts.css';
import { useState } from 'react';
import Loading from '../components/Loading';
// import AdminProductForm from './AdminProductForm'; Componetizar una vez implementada las funciones correctamente.
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from './Button';

export const AdminTexts = () => {
  const { products } = useSelector((state) => state.products);
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();

  const [idToDelete, setIdToDelete] = useState();
  const [product, setProduct] = useState({});

  const openModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
    setEdit(false);
  };
  const editModal = (prod) => {
    setEdit(true);
    setProduct(prod);

    setShow(true);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const onDeleteProduct = (idToDelete) => {
    dispatch(deleteProduct(idToDelete)).then(() => dispatch(getProducts()));
  };

  const dataSchema = Yup.object().shape({
    name: Yup.string().required('Debes ingresar un nombre para el producto.'),
    description: Yup.string(),
    price: Yup.number('Este campo solo admite numeros.')
      .required('Debes ingresar el precio del producto.')
      .positive('El precio debe ser un valor positivo.'),
    image: Yup.mixed().required('Debes subir una imagen.'),
  });

  const formData = {
    name: product.NOMBRE_PRODUCTO ? product.NOMBRE_PRODUCTO : '',
    description: product.DESCRIPCION ? product.DESCRIPCION : '',
    price: product.PRECIO_VENTA ? product.PRECIO_VENTA : '',
    image: '',
  };

  return (
    <>
      {products.length < 0 ? (
        <Loading />
      ) : (
        <div className="container admin">
          <div className="d-flex justify-content-between my-3">
            <h2>Productos:</h2>
            <button
              className="button bg-success"
              onClick={() => {
                openModal();
              }}
            >
              Agregar
            </button>
            {/* <AdminProductForm product={product} cesar={cesar} /> */}
          </div>
          {products.map((product, index) => (
            <div key={index} className="admin__product row rounded shadow-lg my-2 p-4">
              <div className="col-12 d-md-flex justify-content-between">
                <h3>{product.NOMBRE_PRODUCTO}</h3>
                <span>
                  <span className="fw-semibold">ID:</span>
                  {product.ID_PRODUCTO}
                </span>
              </div>

              <div className="admin__product__img col-12 col-md-6 ">
                <img
                  className="rounded "
                  src={product.IMAGEN ? product.IMAGEN : require('../assets/no-disponible.png')}
                  alt={product.NOMBRE_PRODUCTO}
                />
              </div>
              <div className="d-flex flex-column justify-content-end col-12 col-md-6 ">
                <span>
                  <span className="fw-semibold">Descripción:</span> {product.DESCRIPCION}
                </span>
                <span>
                  <span className="fw-semibold">Existencia:</span> {product.EXISTENCIA}
                </span>
                <span>
                  <span className="fw-semibold">Cantidad: </span>
                  {product.CANTIDAD}
                </span>
                <span>
                  <span className="fw-semibold">Precio: </span>${product.PRECIO_VENTA}
                </span>
                <div className="d-flex gap-2 justify-content-end mt-2">
                  <button
                    className="button"
                    onClick={() => {
                      editModal(product);
                    }}
                  >
                    Editar
                  </button>

                  <button
                    className="button bg-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => setIdToDelete(product.ID_PRODUCTO)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* MODAL Confirmar delete*/}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <span className="modal-title fs-5 text-center" id="exampleModalLabel">
                    ¿Deseas eliminar este producto?
                  </span>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    No, cerrar
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => onDeleteProduct(idToDelete)}
                    data-bs-dismiss="modal"
                  >
                    Si, eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* MODAL EDITAR*/}
          <div className="modal-backdrop fade show" style={{ display: show ? 'block' : 'none' }}></div>
          <div
            className={show ? 'modal modal-lg fade show' : 'modal fade'}
            style={{ display: show ? 'block' : 'none' }}
            tabndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-modal="true"
            role="dialog"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-2" id="staticBackdropLabel">
                    {edit ? 'Editar producto' : 'Agregar nuevo producto'}
                  </h1>
                </div>
                <div className="modal-body contact">
                  <Formik
                    enableReinitialize={true}
                    initialValues={formData}
                    validationSchema={dataSchema}
                    onSubmit={(values, { resetForm }) => {
                      if (edit) {
                        const prod = {
                          ID_PRODUCTO: product.ID_PRODUCTO,
                          NOMBRE_PRODUCTO: values.name,
                          DESCRIPCION: values.description,
                          PRECIO_VENTA: values.price,
                          DESCUENTO: 10, // esto se eliminara una vez optimizada la DB
                          IMAGEN: 'https://i.ibb.co/M6wQCqV/Neceser.jpg',
                        };

                        dispatch(editProduct(prod)).then(() => {
                          resetForm();
                          dispatch(getProducts());
                        });
                        resetForm();
                        closeModal();
                        return;
                      }

                      const prod = {
                        NOMBRE_PRODUCTO: values.name,
                        DESCRIPCION: values.description,
                        PRECIO_VENTA: values.price,
                        DESCUENTO: 10, // esto se eliminara una vez optimizada la DB
                        IMAGEN: 'https://i.ibb.co/M6wQCqV/Neceser.jpg',
                      };

                      dispatch(createProduct(prod)).then(() => {
                        resetForm();
                        dispatch(getProducts());
                      });
                      resetForm();
                      closeModal();
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
                            <button type="reset" onClick={() => closeModal()} className="button bg-secondary">
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
        </div>
      )}
    </>
  );
};

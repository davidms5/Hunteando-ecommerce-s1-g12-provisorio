import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, deleteProduct } from '../features/products/thunks';
import '../css/adminProducts.css';
import { useState } from 'react';
import Loading from '../components/Loading';
import AdminProductForm from './AdminProductForm';

const AdminProducts = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [idToDelete, setIdToDelete] = useState();
  const [product, setProduct] = useState({});

  const cesar = 'hola';
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const onDeleteProduct = (idToDelete) => {
    console.log(idToDelete);
    dispatch(deleteProduct(idToDelete)).then(() => dispatch(getProducts()));
  };

  return (
    <>
      {products.length < 0 ? (
        <Loading />
      ) : (
        <div className="container admin">
          <div className="d-flex justify-content-between my-3">
            <h2>Productos:</h2>
            <button className="button bg-success" data-bs-toggle="modal" data-bs-target="#exm">
              Agregar
            </button>
            <AdminProductForm product={product} cesar={cesar} />
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
                <img className="rounded " src={product.IMAGEN} />
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
                    data-bs-toggle="modal"
                    data-bs-target="#exm"
                    onClick={() => setProduct(product)}
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
        </div>
      )}
    </>
  );
};

export default AdminProducts;

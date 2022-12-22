import React from 'react';
import fondo from '../assets/fondo.png';
import { Card } from '../components/Card';
import '../css/home.css';
//EL codigo comentado sera utilizado una vez podamos acceder a la api del backend
import { addToCart } from '../features/cart/cartSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../features/products/thunks';

export const Home = () => {
  const products = useSelector((state) => state.products.products);

  //bestProduct es solo para pintar 3 productos hasta que se decida que productas se renderizaran en el home
  const bestProducts = [products[0], products[1], products[2], products[3]];

  const addId = (product) => {
    dispatch(addToCart(product));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      {products.length === 0 ? (
        <p>hola</p>
      ) : (
        <div className="home">
          <div className=" container home-img">
            <img src={fondo} alt="logo-centro" />
          </div>
          <div className="home-products">
            <div className="container py-5">
              <div className="row">
                {bestProducts.map((product, index) => (
                  <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 my-2 d-flex justify-content-center">
                    <Card product={product} addId={addId} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

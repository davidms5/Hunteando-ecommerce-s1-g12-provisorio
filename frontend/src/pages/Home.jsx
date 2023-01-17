import React from 'react';
import logo from '../assets/footer.png';
import { Card } from '../components/Card';
import '../css/home.css';
//EL codigo comentado sera utilizado una vez podamos acceder a la api del backend
import { addToCart } from '../features/cart/cartSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../features/products/thunks';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Loading from '../components/Loading';

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
        <Loading />
      ) : (
        <div className="home">
          <div className="d-flex justify-content-center align-items-center">
            <img src={logo} alt="logo-centro" className="img-fluid logo-home" />
          </div>
          <div className="home-products">
            <div className="container py-4">
              <div className="d-flex justify-content-between">
                <h2 className="h1">Destacados</h2>
                <Link to={'/productos'}>
                  <button className="button">
                    <AiOutlineArrowRight /> ir a productos
                  </button>
                </Link>
              </div>

              <div className="row">
                {bestProducts.map((product, index) => (
                  <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 my-2 d-flex justify-content-center">
                    <Card product={product} addId={addId} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://i.ibb.co/M6wQCqV/Neceser.jpg"
                  className="d-block w-100"
                  alt="https://i.ibb.co/M6wQCqV/Neceser.jpg"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://i.ibb.co/M6wQCqV/Neceser.jpg"
                  className="d-block w-100"
                  alt="https://i.ibb.co/M6wQCqV/Neceser.jpg"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://i.ibb.co/M6wQCqV/Neceser.jpg"
                  className="d-block w-100"
                  alt="https://i.ibb.co/M6wQCqV/Neceser.jpg"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

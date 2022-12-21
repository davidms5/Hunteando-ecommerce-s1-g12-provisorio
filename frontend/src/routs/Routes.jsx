import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Products from '../pages/Products';
import { Home } from '../pages/Home';
import { Detail } from '../pages/Detail';
import Cart from '../pages/Cart';
import About from '../pages/About';
import { ToastContainer } from 'react-toastify';

const RoutComp = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutComp;

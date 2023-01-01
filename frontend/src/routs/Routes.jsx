import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Products from '../pages/Products';
import { Home } from '../pages/Home';
import { Detail } from '../pages/Detail';
import Cart from '../pages/Cart';
import About from '../pages/About';
import Login from '../pages/Login';
import Admin from '../pages/Admin';
import Talleres from '../pages/Talleres';
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
            <Route path="/talleres" element={<Talleres />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutComp;

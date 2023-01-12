import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../layout/Layout';
import LayoutAdmin from '../layout/LayoutAdmin';
import Products from '../pages/Products';
import { Home } from '../pages/Home';
import { Detail } from '../pages/Detail';
import Cart from '../pages/Cart';
import About from '../pages/About';
import Login from '../pages/Login';
import Admin from '../pages/Admin';
import Talleres from '../pages/Talleres';
import { ToastContainer } from 'react-toastify';
import AdminProducts from '../components/AdminProducts';
import AdminOrders from '../components/AdminOrders';
import { AdminTexts } from '../components/AdminTexts';

const RoutesComp = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/detalle/:id" element={<Detail />} />
            <Route path="/acerca-de" element={<About />} />
            <Route path="/talleres" element={<Talleres />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="/" element={<LayoutAdmin />}>
            <Route path="/login" element={<Login />} />

            <Route path="/admin" element={<Admin />}>
              <Route index element={<Navigate to="productos" />} />
              <Route path="productos" element={<AdminProducts />} />
              <Route path="ordenes" element={<AdminOrders />} />
              <Route path="textos" element={<AdminTexts />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesComp;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Products from '../pages/Products';
import { Home } from '../pages/Home';
import { Detail } from '../pages/Detail';
import Car from '../pages/Car';

const RoutComp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/products" element={<Products />} />
            <Route path="/car" element={<Car />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutComp;

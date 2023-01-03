import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';
import '../css/layout.css';
import { useLocation } from 'react-router-dom';

const Layout = () => {
  const { pathname } = useLocation();

  const isAdmin = () => {
    if (pathname === '/login' || pathname === '/admin') {
      return true;
    }
  };

  return (
    <div className="layout">
      <NavBar />
      <Outlet />
      {isAdmin() ? <div /> : <Footer />}
    </div>
  );
};

export default Layout;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsCart3 } from 'react-icons/bs';
import '../css/navBar.css';
import { useSelector } from 'react-redux';
import logo from '../assets/footer.png';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const btn = () => {
    setOpen(!open);
  };

  return (
    <div className="nav">
      <nav className="container-fluid d-flex justify-content-between align-items-center">
        <Link to={'/'}>
          <div>
            <img className="rounded-circle" src={logo} alt="logo" />
          </div>
        </Link>

        <ul className="desktop">
          <li className="desktop-li">
            <Link to={'/'}>Inicio</Link>
          </li>
          <li className="desktop-li">
            <Link to={'/acerca-de'}>Acerca de</Link>
          </li>
          <li className="desktop-li">
            <Link to={'/talleres'}>Talleres</Link>
          </li>
          <li className="desktop-li">
            <Link to={'/productos'}>Productos</Link>
          </li>

          <div className="desktop-car">
            <Link className="car" to={'/cart'}>
              <BsCart3 />
              <span className="car-num"> {cartTotalQuantity}</span>
            </Link>
          </div>
        </ul>
        <div className="mobile" style={{ transform: open ? 'translateX(0)' : '' }}>
          <ul>
            <li className="mobile-li" onClick={btn}>
              <Link to={'/'}>Inicio</Link>
            </li>
            <li className="mobile-li" onClick={btn}>
              <Link to={'/acerca-de'}>Acerca de</Link>
            </li>
            <li className="mobile-li" onClick={btn}>
              <Link to={'/talleres'}>Talleres</Link>
            </li>
            <li className="mobile-li" onClick={btn}>
              <Link to={'/productos'}>Productos</Link>
            </li>
            <li className="mobile-li" onClick={btn}>
              <Link to={'/cart'}>
                <BsCart3 />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <span className="hambur" onClick={btn}>
        <RxHamburgerMenu />
      </span>
    </div>
  );
};

export default NavBar;

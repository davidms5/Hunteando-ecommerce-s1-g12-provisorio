import React from 'react';
import logo from '../assets/footer.png';
import { Link } from 'react-router-dom';
import { BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { GrUserAdmin } from 'react-icons/gr';

import '../css/footer.css';
import Contact from '../components/Contact';

const Footer = () => {
  return (
    <div className="footer pt-2">
      <div className="container pb-3">
        <div className="row">
          <div className="footer-image col-12 col-md-6">
            <div className="footer-log">
              <img src={logo} alt="footer-logo" />
            </div>
          </div>
          <div className="col-12 col-md-6 py-5">
            <div className="footer-redes">
              <div className="footer-redes__contact">
                <Contact />
              </div>
              <div className="footer-redes__redes">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://api.whatsapp.com/message/2MNYQ5IKKRNVG1?autoload=1&app_absent=0"
                >
                  <BsWhatsapp className="rede" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/autogestion.menstrual/">
                  <BsInstagram className="rede" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/profile.php?id=100076937733899"
                >
                  <BsFacebook className="rede" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-3">
        <Link to={'/login'}>
          <GrUserAdmin className="rede" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;

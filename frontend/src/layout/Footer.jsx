import React from 'react';
import logo from '../assets/footer.png';
import { BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs';
import '../css/footer.css';
import Contact from '../components/Contact';

const Footer = () => {
  return (
    <div className="footer pt-2">
      <div className="container pb-5">
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
                <a target="_blank" href="https://www.instagram.com/autogestion.menstrual/">
                  <BsWhatsapp className="rede" />
                </a>
                <a target="_blank" href="https://api.whatsapp.com/message/2MNYQ5IKKRNVG1?autoload=1&app_absent=0">
                  <BsInstagram className="rede" />
                </a>
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100076937733899">
                  <BsFacebook className="rede" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

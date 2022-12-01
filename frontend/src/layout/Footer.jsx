import React from "react";
import logo from "../assets/footer.png";
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container pb-5">
        <div className="row">
          <div className="col-12 col-md-6 d-flex justify-content-center py-3">
            <div className="footer-log">
              <img src={logo} alt="footer-logo"/>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="footer-redes">
              {/* <div> */}
                <BsWhatsapp className="rede"/>
                <BsFacebook className="rede"/>
                <BsInstagram className="rede"/>
                <ImYoutube className="rede"/>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaLinode
} from 'react-icons/fa';
import '../Css/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3 >Kontakt</h3>
        <div className="contact-info">
          <p>Damian Eisenring</p>
          <p>Rebackerstrasse 13</p>
          <p>5042 Hirschthal</p>
          <p>damian.eisenring@hotmail.com</p>
        </div>
      </div>
      <div className="footer-right">
        <div className="social-icons">
          <a href="https://www.instagram.com/damian_eisenring/"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/damian-eisenring-aa7b182b1/"><FaLinkedin/></a>
        </div>
      </div>
      <div className="copyright">
        <p>© Damian Eisenring</p>
      </div>
    </footer>
  );
};

export default Footer;

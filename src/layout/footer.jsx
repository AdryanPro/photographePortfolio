import React from "react";
import "../css/footer.css";
import jacobLogo from "../assets/footer/footerLogo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo */}
        <div className="footer-left">
          <img src={jacobLogo} alt="Jacob Grønborg - Photograph & Visual Artist" className="footer-logo" />
        </div>

        {/* Center Section - Menu */}
        <div className="footer-menu">
          <h3>MENU</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#exhibitions">Exhibitions</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Section - Info */}
        <div className="footer-info">
          <h3>INFO</h3>
          <ul>
            <li><a href="#styleguide">Styleguide</a></li>
            <li><a href="#licensing">Licensing</a></li>
            <li><a href="#changelog">Changelog</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="footer-social">
        <a href="#twitter">TWITTER</a>
        <a href="#instagram">INSTAGRAM</a>
        <a href="#facebook">FACEBOOK</a>
      </div>
    </footer>
  );
};

export default Footer;

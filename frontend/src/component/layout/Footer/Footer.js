import React from "react";
import playStore from "../../../images/playstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android mobile phone</p>
        <img src={playStore} alt="playstore" />
      </div>

      <div className="midFooter">
        <h1>GentStore</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; Md Faizan Ali</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="#">Instagram</a>
        <a href="#">Youtube</a>
        <a href="#">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;

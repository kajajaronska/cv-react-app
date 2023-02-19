import React from "react";
import headerPhoto from "../header-photo.jpg";
import "../styles/Header.css";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <img src={headerPhoto} alt="Kaja headshot"></img>
        <div className="right-side">
          <div className="full-name">
            <h2 className="first-name">KAJA</h2>
            <h2 className="surname">JARONSKA</h2>
          </div>
          <div className="contact-details">
            <a href="https://www.linkedin.com/in/kaja-jaronska-59a58193/" target="_blank" rel="noreferrer"><FaLinkedin className="contact-icon" /></a>
            <a href="https://github.com/kajajaronska" target="_blank" rel="noreferrer"><FaGithub className="contact-icon" /></a>
            <a href="https://twitter.com/KajaJaronska" target="_blank" rel="noreferrer"><FaTwitter className="contact-icon" /></a>
 
            <div>kaja.jaronska@gmail.com</div>
            <div>07432688852</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

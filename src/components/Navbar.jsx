import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo">
            <img src="./assets/drst.jpg" alt="DRST" className="round-logo" />
          </Link>
        </div>
        <div className="navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="/" className="navbar-link active">
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="about" className="navbar-link">
                About
              </a>
            </li>
            <li className="navbar-item">
              <a href="whatwedo" className="navbar-link">
                What We Do
              </a>
            </li>
            <li className="navbar-item">
              <a href="contact" className="navbar-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

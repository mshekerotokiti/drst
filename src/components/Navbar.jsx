import React from 'react';
import {  NavLink } from 'react-router-dom';

  const Navbar = () => {

    return (
      <div className="bg-warning">
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3 fixed-top">
          <div className="container-fluid bg-warning">
            <NavLink className="navbar-brand ms-3" to="#">
              DR<span className="text-info">ST</span>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active mx-2 text-dark mystyle"
                    aria-current="page"
                    to="#home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active mx-2 text-dark mystyle" to="#about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active mx-2 text-dark mystyle"
                    to="#whatwedo"
                  >
                    What We Do
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active mx-2 text-dark mystyle"
                    to="#contact"
                  >
                   Contact
                  </NavLink>
                </li>
              
              
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  };
  
  export default Navbar;
  
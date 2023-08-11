import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer-container'>
        <div className='footercolumn'>
          <h3>Contact Us</h3>
          <ul className="list-unstyled">
            <li><i className="bi bi-twitter"></i> <a href="#">Twitter</a></li>
            <li><i className="bi bi-facebook"></i> <a href="#">Facebook</a></li>
            <li><i className="bi bi-instagram"></i> <a href="#">Instagram</a></li>
            <li><i className="bi bi-youtube"></i> <a href="#">YouTube</a></li>
          </ul>
        </div>

        <div className='footercolumn'>
          <h3>Location</h3>
          <ul className="list-unstyled">
          <li><i className="bi bi-geo-alt-fill"></i> Kasulu Town Murubona Area Kigoma,Tanzania</li>
          </ul>
        </div>

        <div className='footercolumn'>
          <h3>Contact Details</h3>
          <ul className="list-unstyled">
            <li><a href="#">About</a></li>
            <li><a href="#">What we do</a></li>
            <li><i className="bi bi-telephone-inbound-fill"></i> +255 620 583 841</li>
            <li><i className="bi bi-envelope"></i> <a href="mailto:info@flygo.com">info@drst.or.tz</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} DRST. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

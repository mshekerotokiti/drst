import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer-container'>
        <div className='footercolumn'>
          <h3>Contact Us</h3>
          <ul className="list-unstyled">
            <li><i className="bi bi-twitter"></i> <a href="https://twitter.com/drs_tanzania">Twitter</a></li>
            <li><i className="bi bi-facebook"></i> <a href="https://web.facebook.com/people/DRS-TANZANIA/100086490039454/">Facebook</a></li>
            <li><i className="bi bi-instagram"></i> <a href="https://www.instagram.com/drstanzania/">Instagram</a></li>
            <li><i className="bi bi-youtube"></i> <a href="https://www.youtube.com/@drstanzania">YouTube</a></li>
          </ul>
        </div>

        <div className='footercolumn'>
          <h3>Location</h3>
          <ul className="list-unstyled">
          <li><i className="bi bi-geo-alt-fill"></i> Kasulu Town Murubona Area Kigoma,Tanzania</li>
          <li><a href="contact">Donate</a></li>
          </ul>
        </div>

        <div className='footercolumn'>
          <h3>Contact Details</h3>
          <ul className="list-unstyled">
            <li><a href="about">About</a></li>
            <li><a href="whatwedo">Whatwedo</a></li>
            <li><i className="bi bi-telephone-inbound-fill"></i> +255 620 583 841</li>
            <li><i className="bi bi-envelope"></i> <a href="mailto:info@drst.or.tz">info@drst.or.tz</a></li>
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

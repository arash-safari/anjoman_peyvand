// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            The Persian Orthography Association is dedicated to promoting
            Persian language standards and supporting the global Persian
            language community.
          </p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="link-list">
            <li><a href="/about" className="footer-link">About Us</a></li>
            <li><a href="/services" className="footer-link">Services</a></li>
            <li><a href="/resources" className="footer-link">Resources</a></li>
            <li><a href="/contact" className="footer-link">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@persianorthography.org</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 1234 Language St, Tehran, Iran</p>
        </div>
        
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" className="social-icon">Facebook</a>
            <a href="https://twitter.com" className="social-icon">Twitter</a>
            <a href="https://instagram.com" className="social-icon">Instagram</a>
            <a href="https://linkedin.com" className="social-icon">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Persian Orthography Association. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-left">
        <h1 className="navbar-title">Anjomane alefbäye peyvand</h1>
        <ul className="navbar-links">
          <li><Link to="/">Ḣäne</Link></li>
          <li><Link to="/Cerä?">Cerä?</Link></li>
          <li><Link to="/Alefbä">Alefbä</Link></li>
          <li><Link to="/Kibord">Kibord</Link></li>
          <li><Link to="/Morurgarhä">Morurgarhä</Link></li>
          <li><Link to="/Forušgäh">Forušgäh</Link></li>
          <li><Link to="/Hamkäri&Hamrähi">Hamkäri&Hamrähi</Link></li>
          <li><Link to="/Darbäreye mä">Darbäreye mä</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

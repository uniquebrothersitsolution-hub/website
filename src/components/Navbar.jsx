import React from 'react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo-section">
          <img src="/logo.png" alt="Unique Brothers Logo" className="logo" />
          <span className="brand-name">UNIQUE <span className="red">BROTHERS</span></span>
        </div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Our Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <a href="https://wa.me/918270150033" className="btn-cta">Enquire</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

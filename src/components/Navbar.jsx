import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    // Cleanup on unmount
    return () => document.body.classList.remove('no-scroll');
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const NavLink = ({ to, children, hash }) => {
    const handleClick = (e) => {
      closeMenu();
      if (isHomePage && hash) {
        // Smooth scroll handled by browser default for hash links usually, 
        // but we ensure menu closes first.
      }
    };

    if (isHomePage && hash) {
      return <li><a href={hash} onClick={handleClick}>{children}</a></li>;
    }
    return <li><Link to={to} onClick={handleClick}>{children}</Link></li>;
  };

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo-section">
          <Link to="/" onClick={closeMenu} className="logo-link">
            <img src="/logo.png" alt="Unique Brothers Logo" className="logo" />
            <span className="brand-name">UNIQUE <span className="red">BROTHERS</span></span>
          </Link>
        </div>

        <div className={`nav-links-wrapper ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <NavLink to="/" hash="#home">Home</NavLink>
            <NavLink to="/" hash="#services">Services</NavLink>
            <NavLink to="/gifts" hash="#gifts">Gifts</NavLink>
            <NavLink to="/" hash="#portfolio">Our Work</NavLink>
            <NavLink to="/" hash="#contact">Contact</NavLink>
          </ul>
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <div className="menu-toggle" onClick={toggleMenu}>
            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <a href="https://wa.me/918270150033" className="btn-cta desktop-only">Enquire</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

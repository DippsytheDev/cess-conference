import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/IMG_5632.JPG';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="CESS Conference Logo" className="logo-img" />
          <span className="tagline">Energy and Environment Nexus</span>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#speakers" className="nav-link">Speakers</a></li>
            <li><a href="#schedule" className="nav-link">Schedule</a></li>
            <li><a href="#register" className="nav-link">Register</a></li>
          </ul>
        </nav>
        
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header; 
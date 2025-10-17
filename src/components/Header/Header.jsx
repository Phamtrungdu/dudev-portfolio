import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <a href="#home" className="nav-logo">
          DuDev<span>.</span>
        </a>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="#home" className="nav-link active-link" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link" onClick={handleLinkClick}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link" onClick={handleLinkClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>

        <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
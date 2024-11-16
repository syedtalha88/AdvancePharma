import  { useState } from "react";
import logo from "./assets/logo.jpg";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-container">
      {/* Left Section: Logo and Company Name */}
      <div className="left-section">
        <img src={logo} alt="Company Logo" className="logo" />
        <span className="company-name">Advance Pharma</span>
      </div>

      {/* Hamburger Menu Icon */}
      <div
        className="hamburger-icon"
        onClick={toggleMenu}
        aria-label="Toggle Navigation Menu"
        role="button"
        tabIndex={0}
      >
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>

      {/* Right Section: Navigation Links and Language Toggle */}
      <nav className={`right-section ${isMenuOpen ? "menu-open" : ""}`}>
        {/* Close Button */}
        <button
          className="close-button"
          onClick={toggleMenu}
          aria-label="Close Navigation Menu"
        >
          &times;
        </button>
        <a href="#home" className="nav-link">
          Home
        </a>
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#services" className="nav-link">
          Services
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
        <button className="language-button" aria-label="Switch Language">
          عربي
        </button>
      </nav>
    </header>
  );
};

export default Header;
  
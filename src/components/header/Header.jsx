import Logo from '../../assets/images/logo.png'
import React, { useState, useRef, useEffect } from "react";

const Header = () => {
  // Mobile menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navbar reference for scroll effect
  const navbarRef = useRef(null);

  // Function to toggle mobile menu
  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Scroll effect for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navbarRef.current.classList.add("navbar-scrolled");
      } else {
        navbarRef.current.classList.remove("navbar-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header">
      <div ref={navbarRef} className="container nav-div">
        <a href="#hero">
          <img src={Logo} alt="Powerfull logo" />
        </a>
        <nav id="navbar">
          <ul>
            <li>
              <a href="#hero">Home</a>
              <a href="#classes">Courses</a>
              <a href="#trainers">Trainer</a>
              <a href="#review">Review</a>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <a href="#" className="cta-btn">
            JOIN US
          </a>
        </nav>
        <button id="menu-btn" onClick={handleMenuClick}>
          <i className="bi bi-list"></i>
        </button>
      </div>
      <div className={`nav-mobile-items ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#hero">Home</a>
            <a href="#classes">Courses</a>
            <a href="#trainers">Trainer</a>
            <a href="#review">Review</a>
            <a href="#contact">Contact</a>
            <a href="#" className="cta-btn">
              JOIN US
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;


import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="navbar-logo">
          AFC Japan
        </a>
        
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>Tentang</a>
          <a href="#products" onClick={() => setIsMobileMenuOpen(false)}>Produk</a>
          <a href="#education" onClick={() => setIsMobileMenuOpen(false)}>Edukasi</a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
          <a href="#contact" className="btn btn-primary nav-btn" onClick={() => setIsMobileMenuOpen(false)}>Konsultasi</a>
        </div>

        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

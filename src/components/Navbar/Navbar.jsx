import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ onNavigateHome }) => {
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
        <a href="#" className="navbar-logo" onClick={() => onNavigateHome && onNavigateHome()}>
          AFC Japan
        </a>
        
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => { setIsMobileMenuOpen(false); onNavigateHome && onNavigateHome(); }}>Tentang</a>
          <a href="#products" onClick={() => { setIsMobileMenuOpen(false); onNavigateHome && onNavigateHome(); }}>Produk</a>
          <a href="#education" onClick={() => { setIsMobileMenuOpen(false); onNavigateHome && onNavigateHome(); }}>Edukasi</a>
          <a href="#artikel" onClick={() => { setIsMobileMenuOpen(false); onNavigateHome && onNavigateHome(); }}>Artikel</a>
          <a href="#faq" onClick={() => { setIsMobileMenuOpen(false); onNavigateHome && onNavigateHome(); }}>FAQ</a>
          <a href="#contact" className="btn btn-primary nav-btn" onClick={() => { setIsMobileMenuOpen(false); onNavigateHome && onNavigateHome(); }}>Konsultasi</a>
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

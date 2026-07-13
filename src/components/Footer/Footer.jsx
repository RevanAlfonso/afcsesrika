import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-logo">AFC Japan</h3>
            <p className="footer-desc">
              Distributor Independen<br/>
              Nutrisi Kesehatan & Kesejahteraan Premium
            </p>
            <div className="footer-social">
              {/* Placeholders for social icons */}
              <a href="#" aria-label="Instagram" className="social-link"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" aria-label="Facebook" className="social-link"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" aria-label="TikTok" className="social-link"><i className="fa-brands fa-tiktok"></i></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Tautan Cepat</h4>
            <ul>
              <li><a href="#about">Tentang AFC</a></li>
              <li><a href="#products">Produk Kami</a></li>
              <li><a href="#education">Edukasi Kesehatan</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Kontak</h4>
            <p><strong>Jam Operasional:</strong></p>
            <p>Senin - Jumat: 09:00 - 18:00</p>
            <p>Sabtu: 10:00 - 16:00</p>
            <a href="https://wa.me/6285373446888" target="_blank" rel="noopener noreferrer" className="btn btn-primary footer-btn">
              Konsultasi Sekarang
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Distributor Independen AFC. Hak cipta dilindungi undang-undang.</p>
          <p className="footer-disclaimer">
            Situs web ini dimiliki dan dioperasikan oleh Distributor Independen AFC. Ini bukan situs web korporat resmi dari AFC Japan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

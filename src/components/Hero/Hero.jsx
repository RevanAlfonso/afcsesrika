import React from 'react';
import './Hero.css';
import HeroImg from '../../assets/img/hero.png';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-badge animate-fade-up">Kesehatan Jepang Premium</span>
          <h1 className="hero-title animate-fade-up delay-100">
            Tingkatkan Kesehatan Anda dengan Sains & Alam
          </h1>
          <p className="hero-description animate-fade-up delay-200">
            Temukan nutrisi pemenang penghargaan dari AFC Japan. Hasil penelitian puluhan tahun, bahan-bahan murni, dan komitmen tak tertandingi untuk vitalitas Anda.
          </p>
          <div className="hero-actions animate-fade-up delay-300">
            <a href="#products" className="btn btn-primary">Lihat Produk</a>
            <a href="#contact" className="btn btn-outline">Konsultasi Gratis</a>
          </div>
          <div className="hero-certifications animate-fade-up delay-300">
            <span className="cert-badge" title="Halal MUI">HALAL</span>
            <span className="cert-badge" title="Badan Pengawas Obat dan Makanan">BPOM</span>
            <span className="cert-badge" title="MIMS Reference">MIMS</span>
            <span className="cert-badge" title="FDA Approved">FDA</span>
          </div>
        </div>
        <div className="hero-image-wrapper animate-fade-up delay-200">
          <div className="hero-image-placeholder">
            <div className="hero-abstract-shape shape-1"></div>
            <div className="hero-abstract-shape shape-2"></div>
            <img src={HeroImg} alt="Kesehatan dan Kesejahteraan" className="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

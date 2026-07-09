import React from 'react';
import './AboutAFC.css';

const AboutAFC = () => {
  return (
    <section className="section about-afc" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-col animate-fade-up">
            <div className="about-image-wrapper">
              <img src="https://www.lifestreamgroup.com/image/cache/catalog/product%20thumbnails/afc-branding-thumbnail-en-550x550.jpg.webp" alt="Konsep Kesehatan Jepang" className="about-img" />
              <div className="experience-badge">
                <span className="years">50+</span>
                <span className="text">Tahun<br/>Pengalaman</span>
              </div>
            </div>
          </div>
          <div className="about-content-col animate-fade-up delay-200">
            <h2 className="section-title">Warisan AFC Japan</h2>
            <p className="about-description">
              Sebagai salah satu produsen makanan kesehatan tertua dan paling dihormati di Jepang, AFC telah berada di garis depan inovasi kesehatan selama lebih dari lima dekade. Filosofi kami berakar pada prinsip tradisional Jepang tentang keseimbangan dan harmoni, yang ditingkatkan oleh sains modern.
            </p>
            <p className="about-description">
              Kami mengontrol setiap langkah proses manufaktur kami. Mulai dari mencari bahan-bahan paling murni di dunia hingga pengujian klinis yang ketat, kami memastikan setiap produk memenuhi standar keamanan dan khasiat tertinggi.
            </p>
            <ul className="about-list">
              <li>
                <span className="list-icon"><i className="fa-solid fa-check"></i></span>
                Manufaktur Bersertifikat GMP
              </li>
              <li>
                <span className="list-icon"><i className="fa-solid fa-check"></i></span>
                Formula yang Diteliti Secara Klinis
              </li>
              <li>
                <span className="list-icon"><i className="fa-solid fa-check"></i></span>
                100% Kontrol Kualitas Jepang
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAFC;

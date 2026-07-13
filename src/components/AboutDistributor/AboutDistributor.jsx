import React from 'react';
import './AboutDistributor.css';
import sesrika from "../../assets/img/img.jpeg"

const AboutDistributor = () => {
  return (
    <section className="section distributor-section section-bg-gray">
      <div className="container">
        <div className="distributor-card animate-fade-up">
          <div className="distributor-image-col">
            <img src={sesrika} alt="Distributor Independen Sesrika" className="distributor-img" />
          </div>
          <div className="distributor-content-col">
            <span className="hero-badge">Mitra Kesehatan Anda</span>
            <h2 className="distributor-name">Halo, Saya Sesrika</h2>
            <p className="distributor-story">
              Perjalanan saya dengan AFC dimulai ketika saya mencari solusi kesehatan yang otentik dan didukung oleh sains untuk kesehatan saya sendiri. Dampak mendalam dari formulasi Jepang ini pada hidup saya menginspirasi saya untuk membantu orang lain menemukan keseimbangan mereka.
            </p>
            <p className="distributor-mission">
              <strong>Misi Saya:</strong> Untuk mendidik dan memberdayakan Anda agar dapat membuat pilihan terbaik untuk vitalitas jangka panjang Anda, tanpa tekanan atau klaim yang berlebihan.
            </p>
            
            <div className="distributor-actions">
              <a href="https://wa.me/6285373446888" target="_blank" rel="noopener noreferrer" className="btn btn-primary whatsapp-btn">
                <span className="wa-icon"><i className="fa-brands fa-whatsapp"></i></span> Chat di WhatsApp
              </a>
              <span className="consultation-note">Tersedia konsultasi pribadi gratis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDistributor;

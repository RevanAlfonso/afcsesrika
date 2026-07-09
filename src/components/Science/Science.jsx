import React from 'react';
import './Science.css';

const Science = () => {
  return (
    <section className="section science-section">
      <div className="container">
        <div className="science-layout">
          <div className="science-content animate-fade-up">
            <span className="hero-badge">Penelitian & Transparansi</span>
            <h2 className="section-title">Komitmen pada Integritas Klinis</h2>
            <p className="science-desc">
              Di AFC Japan, kami percaya bahwa kesehatan sejati dibangun di atas fondasi penelitian yang ketat dan integritas klinis. Bahan-bahan kami melalui studi ekstensif untuk memahami mekanisme dan manfaatnya.
            </p>
            <div className="disclaimer-box">
              <strong>Peringatan Penting:</strong>
              <p>
                Produk kami adalah nutrisi kesehatan yang dirancang untuk mendukung gaya hidup sehat dan memberikan keseimbangan nutrisi. Produk ini <strong>bukan obat</strong> dan tidak dimaksudkan untuk mendiagnosis, mengobati, menyembuhkan, atau mencegah penyakit apa pun. Selalu konsultasikan dengan profesional kesehatan sebelum memulai rejimen nutrisi baru, terutama jika Anda memiliki kondisi medis sebelumnya.
              </p>
            </div>
          </div>
          
          <div className="timeline-container animate-fade-up delay-200">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Penemuan Bahan</h4>
                <p>Mencari bahan baku dengan riwayat khasiat dan asal yang murni.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Penelitian Paten</h4>
                <p>Berkolaborasi dengan ilmuwan untuk mengembangkan metode ekstraksi eksklusif.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Uji Klinis</h4>
                <p>Melakukan studi keamanan dan efikasi untuk memastikan hasil optimal.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Manufaktur GMP</h4>
                <p>Memproduksi nutrisi akhir di bawah kontrol kualitas Jepang yang ketat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Science;

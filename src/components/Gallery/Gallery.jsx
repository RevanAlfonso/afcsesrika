import React, { useState } from 'react';
import './Gallery.css';
import flyer from "../../assets/img/flyer.jpeg";
import gambar from "../../assets/img/gambar.jpeg";
import poster2 from "../../assets/img/poster2.jpeg";
import poster3 from "../../assets/img/poster3.jpeg";
import testi_hikari from "../../assets/img/testi_hikari.jpeg"
import testi_subarashi from "../../assets/img/testi_subarashi.jpeg"
import utsukushi from "../../assets/img/utsukushi.jpeg"
import tex from "../../assets/img/tex.jpeg"
import testi1 from "../../assets/img/testi1.jpeg"
import testi2 from "../../assets/img/testi2.jpeg"
import testi3 from "../../assets/img/testi3.jpeg"
import testi4 from "../../assets/img/testi4.jpeg"
import testi5 from "../../assets/img/testi5.jpeg"
import testi6 from "../../assets/img/testi6.jpeg"
import testi7 from "../../assets/img/testi7.jpeg"


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    flyer,
    gambar,
    poster2,
    poster3,
    testi_hikari,
    testi_subarashi,
    utsukushi,
    tex,
    testi1,
    testi2,
    testi3,
    testi4,
    testi5,
    testi6,
    testi7
  ];

  const openLightbox = (src) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="section gallery-section">
      <div className="container">
        <div className="text-center section-header animate-fade-up">
          <h2 className="section-title">Visualisasi Kesehatan</h2>
          <p className="section-subtitle">Sekilas tentang gaya hidup AFC</p>
        </div>
        
        <div className="gallery-masonry">
  {galleryImages.map((src, index) => {
    return (
      <div
        key={index}
        className={`gallery-item animate-fade-up delay-${(index % 4) * 100}`}
        onClick={() => openLightbox(src)}
      >
        <img
          src={src}
          alt={`Kesehatan AFC ${index + 1}`}
          loading="lazy"
        />

        <div className="gallery-overlay">
          <span>
            <i className="fa-solid fa-expand"></i> Lihat
          </span>
        </div>
      </div>
    );
  })}
</div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Tutup">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Gambar Diperbesar" className="lightbox-img" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

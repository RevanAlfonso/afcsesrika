import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah L.",
      role: "Profesional Bisnis",
      text: "Memasukkan rutinitas kesehatan AFC ke dalam kehidupan sehari-hari saya sangat transformatif. Fokus pada kesehatan seluler daripada sekadar perbaikan cepat sangat sejalan dengan tujuan jangka panjang saya."
    },
    {
      id: 2,
      name: "Michael T.",
      role: "Penggemar Kebugaran",
      text: "Sebagai seseorang yang menuntut banyak dari tubuh mereka, dukungan pemulihan yang saya alami sungguh luar biasa. Anda benar-benar dapat merasakan standar kualitas Jepang di setiap produk."
    },
    {
      id: 3,
      name: "Elena R.",
      role: "Pelatih Kesehatan",
      text: "Saya selalu meneliti ilmu di balik nutrisi sebelum merekomendasikannya. Komitmen AFC terhadap uji klinis dan sumber bahan yang transparan tidak tertandingi di industri ini."
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section section-bg-gray testimonials-section">
      <div className="container">
        <div className="text-center section-header animate-fade-up">
          <h2 className="section-title">Kisah Vitalitas</h2>
          <p className="section-subtitle">Pengalaman nyata dari komunitas kami</p>
        </div>
        
        <div className="testimonial-slider animate-fade-up delay-100">
          <button className="slider-btn prev" onClick={prevTestimonial} aria-label="Sebelumnya">←</button>
          
          <div className="testimonial-content">
            <div className="quote-mark">"</div>
            <p className="testimonial-text">{testimonials[currentIndex].text}</p>
            <div className="testimonial-author">
              <h4>{testimonials[currentIndex].name}</h4>
              <span>{testimonials[currentIndex].role}</span>
            </div>
          </div>
          
          <button className="slider-btn next" onClick={nextTestimonial} aria-label="Selanjutnya">→</button>
        </div>
        
        <div className="testimonial-disclaimer text-center animate-fade-up delay-200">
          <small>* Pengalaman individu mungkin bervariasi. Testimoni ini tidak dimaksudkan untuk menjamin bahwa siapa pun akan mencapai hasil yang sama atau serupa.</small>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

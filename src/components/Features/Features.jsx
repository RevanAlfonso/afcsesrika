import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <i className="fa-solid fa-award"></i>,
      title: "Kualitas Jepang",
      description: "Diproduksi di bawah standar kualitas ketat Jepang, memastikan kemurnian dan keamanan."
    },
    {
      icon: <i className="fa-solid fa-leaf"></i>,
      title: "Bahan Pilihan",
      description: "Kami hanya mengambil bahan-bahan paling ampuh dan teruji secara klinis dari seluruh dunia."
    },
    {
      icon: <i className="fa-solid fa-flask"></i>,
      title: "Pendekatan Ilmiah",
      description: "Diformulasikan berdasarkan penelitian khusus dan studi klinis selama bertahun-tahun."
    },
    {
      icon: <i className="fa-regular fa-comments"></i>,
      title: "Konsultasi Personal",
      description: "Panduan ahli untuk membantu Anda memilih jalur kesehatan yang tepat."
    }
  ];

  return (
    <section className="section section-bg-gray features-section">
      <div className="container">
        <div className="text-center section-header animate-fade-up">
          <h2 className="section-title">Mengapa Memilih AFC</h2>
          <p className="section-subtitle">Komitmen terhadap keunggulan di setiap langkah</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card animate-fade-up delay-${(index % 4 + 1) * 100}`}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

import React from 'react';
import './Education.css';

const Education = () => {
  const articles = [
    {
      category: "Nutrisi",
      title: "Apa itu Peptida?",
      content: "Peptida adalah rantai pendek asam amino, penyusun protein. Mereka mudah diserap oleh tubuh dan memainkan peran penting dalam memberi sinyal pada sel agar berfungsi dengan baik, mendukung elastisitas kulit, dan meningkatkan vitalitas.",
      color: "#FDE8E8" // Adjusted color to match red theme
    },
    {
      category: "Kesehatan Usus",
      title: "Mengapa Probiotik Penting",
      content: "Usus Anda sering disebut sebagai 'otak kedua'. Probiotik adalah bakteri menguntungkan yang membantu menjaga keseimbangan alami mikroflora di usus Anda, yang penting untuk penyerapan nutrisi dan sistem kekebalan yang kuat.",
      color: "#e8f0fe"
    },
    {
      category: "Umur Panjang",
      title: "Filosofi Kesehatan Jepang",
      content: "Pendekatan Jepang terhadap kesehatan menekankan pada pencegahan, keseimbangan, dan mengonsumsi makanan padat nutrisi dengan penuh kesadaran. Ini adalah pandangan holistik yang menggabungkan perawatan fisik dengan ketenangan mental.",
      color: "#fcf0e3"
    },
    {
      category: "Kesehatan Seluler",
      title: "Memahami Antioksidan",
      content: "Antioksidan adalah senyawa yang membantu menetralkan radikal bebas—molekul tidak stabil yang dapat menyebabkan stres seluler. Memasukkannya ke dalam rutinitas Anda mendukung penuaan yang sehat di tingkat sel.",
      color: "#f5f7f9"
    }
  ];

  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="education-layout">
          <div className="education-intro animate-fade-up">
            <h2 className="section-title">Pengetahuan adalah Fondasi Kesehatan</h2>
            <p className="education-intro-desc">
              Kami percaya dalam memberdayakan Anda dengan pemahaman. Kesehatan sejati bukan hanya tentang apa yang Anda konsumsi, tetapi memahami alasannya. Jelajahi wawasan edukasi kami untuk membuat pilihan yang tepat untuk gaya hidup Anda.
            </p>
            <a href="#contact" className="btn btn-primary mt-4">Tanya Ahli</a>
          </div>
          
          <div className="education-cards">
            {articles.map((article, index) => (
              <div 
                key={index} 
                className={`edu-card animate-fade-up delay-${(index % 2 + 1) * 100}`}
                style={{ backgroundColor: article.color }}
              >
                <span className="edu-category">{article.category}</span>
                <h3 className="edu-title">{article.title}</h3>
                <p className="edu-content">{article.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

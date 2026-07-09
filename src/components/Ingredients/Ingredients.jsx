import React from 'react';
import './Ingredients.css';

const Ingredients = () => {
  const ingredients = [
    {
      name: "Salmon Ovary Peptide",
      origin: "Hokkaido, Jepang",
      description: "Diekstrak dari selaput telur ikan Salmon Oncorhynchus Keta dari Hokkaido. Kaya akan asam amino esensial dan telah dipelajari peran potensialnya dalam mendukung kesehatan kulit dan regenerasi sel."
    },
    {
      name: "Fruitflow®",
      origin: "Inggris",
      description: "Ekstrak tomat larut air yang telah diteliti secara ilmiah perannya dalam mendukung aliran darah yang sehat dan menjaga agregasi trombosit normal."
    },
    {
      name: "Lutein",
      origin: "Bunga Marigold",
      description: "Karotenoid alami yang ditemukan dalam konsentrasi tinggi di makula mata manusia, dikenal karena sifat antioksidannya yang kuat."
    },
    {
      name: "Probiotik Premium",
      origin: "Jepang",
      description: "Strain bakteri asam laktat dan bifidobacteria yang dipilih secara khusus, dirancang untuk bertahan melawan asam lambung dan mendukung mikrobioma usus yang seimbang."
    }
  ];

  return (
    <section className="section ingredients-section section-bg-gray">
      <div className="container">
        <div className="text-center section-header animate-fade-up">
          <h2 className="section-title">Sorotan Bahan Utama</h2>
          <p className="section-subtitle">Yang terbaik dari alam, divalidasi oleh sains</p>
        </div>
        
        <div className="ingredients-grid">
          {ingredients.map((ing, index) => (
            <div key={index} className={`ingredient-card animate-fade-up delay-${(index % 4 + 1) * 100}`}>
              <div className="ingredient-header">
                <h3 className="ingredient-name">{ing.name}</h3>
                <span className="ingredient-origin">{ing.origin}</span>
              </div>
              <p className="ingredient-desc">{ing.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;

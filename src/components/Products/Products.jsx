import React from 'react';
import './Products.css';
import subarashi from "../../assets/img/card/subcard.png";
import utsukushii from "../../assets/img/card/utscard.png";
import hikari from "../../assets/img/card/hikcard.png";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "SOP Subarashi",
      description: "Inovasi triple peptide yang menggabungkan Marine Placenta, Sardine Peptide, dan Fruitflow.",
      ingredients: ["Marine Placenta", "Sardine Peptide", "Fruitflow", "L-Glutathione"],
      image: subarashi
    },
    {
      id: 2,
      name: "Utsukushhii Gold",
      description: "Nutrisi kecantikan dan kesehatan premium yang berfokus pada kesehatan usus dan dukungan kekebalan tubuh.",
      ingredients: ["Bifidobacterium Longum", "Bakteri Asam Laktat", "Salmon DNA", "Resveratrol"],
      image: utsukushii
    },
    {
      id: 3,
      name: "Hikari",
      description: "Nutrisi superfood vegan yang diformulasikan khusus untuk mendukung kesehatan mata, fungsi otak, dan membantu meredakan stres.",
      ingredients: ["Marigold Peptide", "Spearmint Peptide", "Mango Leaf Peptide", "10 Berry Extracts"],
      image: hikari
    }
  ];

  return (
    <section className="section products-section" id="products">
      <div className="container">
        <div className="text-center section-header animate-fade-up">
          <h2 className="section-title">Koleksi Unggulan</h2>
          <p className="section-subtitle">Formulasi pemenang penghargaan untuk kesehatan Anda</p>
        </div>
        
        <div className="grid md:grid-cols-3 products-grid">
          {products.map((product, index) => (
            <div key={product.id} className={`product-card animate-fade-up delay-${(index + 1) * 100}`}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.description}</p>
                <div className="product-ingredients">
                  <strong>Bahan Utama:</strong>
                  <ul>
                    {product.ingredients.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <a href="#contact" className="btn btn-outline product-btn">Pelajari Lebih Lanjut</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

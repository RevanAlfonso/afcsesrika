import React, { useEffect } from 'react';
import './ArticleDetail.css';

const ArticleDetail = ({ article }) => {
  // Scroll to top when article loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) return null;

  return (
    <article className="article-detail-page animate-fade-up">
      <div className="container article-detail-container">
        
        <button 
          onClick={() => {
            window.location.hash = '#artikel';
            setTimeout(() => {
              const el = document.getElementById('artikel');
              if(el) el.scrollIntoView({behavior: 'smooth'});
            }, 100);
          }} 
          className="back-button"
        >
          <i className="fa-solid fa-arrow-left"></i> Kembali ke Artikel
        </button>

        <header className="article-header">
          <span className="article-detail-date">{article.date}</span>
          <h1 className="article-detail-title">{article.title}</h1>
        </header>

        <div className="article-hero-image">
          <img src={article.image} alt={article.title} />
        </div>

        <div 
          className="article-body-content"
          dangerouslySetInnerHTML={{ __html: article.content }}
        ></div>

        <div className="article-footer-cta">
          <h3>Punya pertanyaan terkait artikel ini?</h3>
          <p>Diskusikan kondisi kesehatan Anda bersama kami sekarang.</p>
          <a href="https://wa.me/YOUR_NUMBER" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <i className="fa-brands fa-whatsapp"></i> Konsultasi Gratis
          </a>
        </div>
      </div>
    </article>
  );
};

export default ArticleDetail;

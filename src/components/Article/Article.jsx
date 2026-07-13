import React from 'react';
import './Article.css';
import { articlesData } from '../../data/articles';

const Article = () => {
  return (
    <section className="section article-section section-bg-gray" id="artikel">
      <div className="container">
        <div className="text-center section-header animate-fade-up">
          <h2 className="section-title">Artikel Kesehatan</h2>
          <p className="section-subtitle">Wawasan dan tips untuk gaya hidup yang lebih baik</p>
        </div>

        <div className="article-flex-container">
          {articlesData.map((article, index) => (
            <article key={article.id} className={`article-card animate-fade-up delay-${(index + 1) * 100}`}>
              <div className="article-image">
                <img src={article.image} alt={article.title} loading="lazy" />
              </div>
              <div className="article-content">
                <span className="article-date">{article.date}</span>
                <h3 className="article-title">{article.title}</h3>
                <p className="article-excerpt">{article.excerpt}</p>
                <a href={`#article/${article.id}`} className="article-readmore">
                  Baca Selengkapnya <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Article;

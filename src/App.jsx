// import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutAFC from './components/AboutAFC/AboutAFC';
import Features from './components/Features/Features';
import Products from './components/Products/Products';
import Education from './components/Education/Education';
import Ingredients from './components/Ingredients/Ingredients';
import Science from './components/Science/Science';
import Testimonials from './components/Testimonials/Testimonials';
import Gallery from './components/Gallery/Gallery';
import AboutDistributor from './components/AboutDistributor/AboutDistributor';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Article from './components/Article/Article';
import ArticleDetail from './components/ArticleDetail/ArticleDetail';
import { useState, useEffect } from 'react';
import { articlesData } from './data/articles';

function App() {
  const [activeArticle, setActiveArticle] = useState(null);

  // Hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#article/')) {
        const id = parseInt(hash.replace('#article/', ''), 10);
        const article = articlesData.find(a => a.id === id);
        if (article) {
          setActiveArticle(article);
          return;
        }
      }
      setActiveArticle(null);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // check on mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          // Add inline style for animation to trigger
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-fade-up');
    elements.forEach(el => {
      // Pause animation initially if we want to trigger it strictly on scroll
      // el.style.animationPlayState = 'paused';
      // In this setup, we just use classes, but using observer is better for lower sections
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeArticle]); // Re-run when view changes

  return (
    <div className="app">
      <Navbar />
      <main>
        {activeArticle ? (
          <ArticleDetail article={activeArticle} />
        ) : (
          <>
            <Hero />
            <AboutAFC />
            <Features />
            <Products />
            <Education />
            <Ingredients />
            <Science />
            <Testimonials />
            <Gallery />
            <Article />
            <AboutDistributor />
            <FAQ />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;

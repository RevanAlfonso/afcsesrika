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

function App() {
  const [activeArticle, setActiveArticle] = useState(null);
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
      <Navbar onNavigateHome={() => setActiveArticle(null)} />
      <main>
        {activeArticle ? (
          <ArticleDetail article={activeArticle} onBack={() => setActiveArticle(null)} />
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
            <Article onArticleClick={(article) => setActiveArticle(article)} />
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

import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      question: "Apakah produk AFC dianggap sebagai obat?",
      answer: "Tidak, produk AFC diklasifikasikan sebagai nutrisi kesehatan. Produk-produk ini dirancang untuk mendukung gaya hidup sehat dan keseimbangan nutrisi, bukan untuk menggantikan perawatan medis atau meresepkan pengobatan."
    },
    {
      question: "Bagaimana cara konsumsi produknya?",
      answer: "Untuk penyerapan optimal, sebagian besar produk kami disarankan untuk dikonsumsi saat perut kosong, baik di pagi hari atau sebelum tidur. Namun, instruksi spesifik dapat bervariasi tergantung produknya."
    },
    {
      question: "Apakah nutrisi ini cocok untuk semua orang?",
      answer: "Meskipun diformulasikan untuk penggunaan dewasa pada umumnya, individu yang sedang hamil, menyusui, atau memiliki kondisi medis sebelumnya harus berkonsultasi dengan penyedia layanan kesehatan mereka sebelum memulai rutinitas nutrisi apa pun."
    },
    {
      question: "Bagaimana saya bisa menghubungi distributor?",
      answer: "Anda dapat dengan mudah menghubungi saya melalui tombol WhatsApp yang tersedia di situs ini untuk konsultasi gratis tanpa kewajiban. Saya dengan senang hati akan menjawab pertanyaan dan memandu Anda berdasarkan kebutuhan Anda."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <div className="text-center section-header animate-fade-up">
          <h2 className="section-title">Pertanyaan yang Sering Diajukan</h2>
          <p className="section-subtitle">Kejelasan dan transparansi</p>
        </div>
        
        <div className="faq-container animate-fade-up delay-100">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

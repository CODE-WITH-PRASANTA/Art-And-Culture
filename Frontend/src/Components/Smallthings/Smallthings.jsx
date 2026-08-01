import React, { useState } from 'react';
import './Smallthings.css';

const Smallthings = () => {
  // Accordion open/close state
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'Are Balaji, Venkateswara and Srinivasa the same?',
      answer:
        'Yes, Balaji, Venkateswara, Srinivasa, and Govinda are all names for the same deity, the form of Vishnu worshipped at Tirumala.',
    },
    {
      question: 'Should I buy the full murti, the face idol or the charan?',
      answer:
        'A full murti works best for a dedicated mandir. A face idol is ideal for smaller shelves, while Charan Paduka is portable and best suited for desk or car dashboards.',
    },
    {
      question: 'What is the mark on the forehead?',
      answer:
        'The white and red mark is the Vaishnava tilaka (namam). The white lines represent the feet of Vishnu and the red center represents Lakshmi.',
    },
    {
      question: 'Which material should I choose?',
      answer:
        'Gold and silver plated idols provide a gilded temple look. Antique finish gives a deeper sculptural aesthetic, and pure brass is best if you intend to perform daily abhishek.',
    },
    {
      question: 'What size fits a home mandir?',
      answer:
        'Typically, 7 to 9-inch idols fit well on dedicated mandir altars, while 2 to 5-inch idols suit smaller shelves or compact spaces.',
    },
    {
      question: 'Which Balaji suits a car dashboard?',
      answer:
        'The Balaji Charan or a small 2-inch face idol with a flat base suits car dashboards best due to its stable footprint.',
    },
    {
      question: 'How do I clean a plated or antique Balaji?',
      answer:
        'Dust gently with a soft, dry cloth. Keep plated and antique finishes away from water, chemical cleaners, or harsh abrasives.',
    },
    {
      question: 'Is a Balaji murti a good gift?',
      answer:
        'Yes, Balaji idols are considered very auspicious gifts for housewarmings (Griha Pravesh), weddings, or festive occasions.',
    },
    {
      question: 'Do you make Balaji wall pieces?',
      answer:
        'Yes, options include 12-inch face wall hangings and 3D frames designed specifically for wall mounting.',
    },
    {
      question: 'What is Gajalakshmi Balaji?',
      answer:
        'Gajalakshmi Balaji features Lord Balaji alongside Goddess Lakshmi flanked by elephants, symbolizing divine grace and prosperity.',
    },
  ];

  return (
    <section className="small-things">
      <div className="small-things__container">
        {/* Top Tag Header */}
        <div className="small-things__header">
          <div className="small-things__badge">
            <span className="small-things__badge-plus">+</span> QUESTIONS, CAREFULLY ANSWERED
          </div>
          <h2 className="small-things__title">
            The <span className="small-things__highlight">small things</span> you wondered about
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="small-things__accordion-card">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`small-things__item ${isOpen ? 'small-things__item--open' : ''}`}
              >
                <button
                  className="small-things__question-btn"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className="small-things__question-text">{item.question}</span>
                  <span className="small-things__toggle-icon">{isOpen ? '−' : '+'}</span>
                </button>

                <div className="small-things__answer-wrapper">
                  <div className="small-things__answer-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Link */}
        <div className="small-things__footer">
          <span className="small-things__footer-text">
            Still curious?{' '}
            <a href="#all-faqs" className="small-things__footer-link">
              See all FAQs →
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Smallthings;
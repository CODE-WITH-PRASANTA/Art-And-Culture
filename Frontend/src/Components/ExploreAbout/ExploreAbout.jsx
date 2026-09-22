import React, { useState } from 'react'
import './ExploreAbout.css'
import bgImage from '../../assets/whitebg.png' // Update this path to match your background image filename
import { FiPlus, FiX } from 'react-icons/fi'

const ExploreAbout = () => {
  // State set to 1 by default so the first accordion starts open (as shown in reference image 2)
  const [openId, setOpenId] = useState(1)

  const faqData = [
    {
      id: 1,
      question: "How do I know which size to order?",
      answer: "Every product page lists the exact height and base width. Photographs flatten scale, so check both numbers against the space you have. A short piece on a broad base often takes more shelf than a taller slim one."
    },
    {
      id: 2,
      question: "What is the piece actually made of?",
      answer: "Each sculpture is handcrafted by skilled Indian artisans using premium brass, bronze, or natural stone alloys. We maintain traditional casting and hand-finishing techniques to give every piece authentic cultural character, substantial weight, and rich textural detail."
    },
    {
      id: 3,
      question: "How should I clean it?",
      answer: "Gently wipe with a soft, lint-free dry cloth. Avoid harsh chemical cleaners, polish, or abrasive pads as they can damage the natural protective hand-patina. For intricate carvings, a soft-bristled brush works best to remove dust."
    },
    {
      id: 4,
      question: "What if it does not suit my space?",
      answer: "We offer a hassle-free 7-day return and exchange policy. If the piece doesn't fit your space or home mandir as expected, simply reach out to us for an easy return with safe-arrival guarantee."
    }
  ]

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section 
      className="ExploreAbout" 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="ExploreAbout-container">
        
        {/* Top Header Badge */}
        <div className="ExploreAbout-badge-wrapper">
          <span className="ExploreAbout-badge">✦ QUESTIONS, CAREFULLY ANSWERED</span>
        </div>

        {/* Main Heading */}
        <h2 className="ExploreAbout-title">
          The <span className="ExploreAbout-title-italic">small things</span> you wondered about
        </h2>

        {/* Accordion Card Container */}
        <div className="ExploreAbout-accordion-card">
          {faqData.map((item) => {
            const isOpen = openId === item.id
            return (
              <div 
                key={item.id} 
                className={`ExploreAbout-item ${isOpen ? 'ExploreAbout-item-open' : ''}`}
              >
                <button 
                  type="button"
                  className="ExploreAbout-question-btn" 
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="ExploreAbout-question-text">{item.question}</span>
                  <span className="ExploreAbout-icon">
                    {isOpen ? <FiX /> : <FiPlus />}
                  </span>
                </button>

                {isOpen && (
                  <div className="ExploreAbout-answer-wrapper">
                    <p className="ExploreAbout-answer-text">{item.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Footer Link */}
        <div className="ExploreAbout-footer">
          <span className="ExploreAbout-footer-text">
            Still curious? <a href="#faqs" className="ExploreAbout-footer-link">See all FAQs →</a>
          </span>
        </div>

      </div>
    </section>
  )
}

export default ExploreAbout
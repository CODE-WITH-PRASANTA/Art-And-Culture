import React, { useState, useRef } from 'react';
import './Aboutothers.css';

const Aboutothers = () => {
  // Accordion states for upper sections
  const [openSections, setOpenSections] = useState({
    about: true,
    size: false,
    material: false,
  });

  // Accordion states for FAQs
  const [openFaq, setOpenFaq] = useState(null);

  // Refs for smooth scrolling when clicking top tabs
  const aboutRef = useRef(null);
  const sizeRef = useRef(null);
  const materialRef = useRef(null);
  const faqRef = useRef(null);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const faqData = [
    { q: "How long does it take to receive my order?", a: "Standard shipping takes 3-5 business days, while express shipping delivers within 1-2 business days depending on your location." },
    { q: "How do I track my order status?", a: "Once your order is shipped, a tracking link will be sent to your registered email and phone number." },
    { q: "What is your return policy?", a: "We offer a 7-day easy return policy on all unused products in their original packaging." },
    { q: "Can I change my shipping address after placing an order?", a: "Address updates are possible within 2 hours of placing the order by contacting our support team." },
    { q: "Is my payment information stored securely?", a: "Yes, we use industry-standard SSL encryption and secure payment gateways to ensure your data is safe." },
    { q: "Are the products handmade or machine-made?", a: "Our premium brass products are meticulously handcrafted by skilled local artisans." },
    { q: "What payment methods do you accept?", a: "We accept all major credit/debit cards, UPI (GPay, PhonePe, Paytm), Net Banking, and Cash on Delivery (COD)." },
    { q: "I want to order in bulk; can I get a discount?", a: "Yes, we offer special tier-based discounts for bulk orders. Please use our 'Enquire Now' form for a custom quote." }
  ];

  return (
    <div className="product-info-wrapper">
      {/* Navigation Tabs Header */}
      <div className="info-tabs-header">
        <button className="tab-nav-btn active-tab" onClick={() => scrollToSection(aboutRef)}>
          📄 <span>About the Product</span>
        </button>
        <button className="tab-nav-btn" onClick={() => scrollToSection(sizeRef)}>
          📦 <span>Size & Weight</span>
        </button>
        <button className="tab-nav-btn" onClick={() => scrollToSection(materialRef)}>
          🥞 <span>Product Material</span>
        </button>
        <button className="tab-nav-btn" onClick={() => scrollToSection(faqRef)}>
          ❓ <span>FAQs</span>
        </button>
      </div>

      {/* Main Content Container */}
      <div className="info-content-container">
        
        {/* Section 1: About the Product */}
        <div className="accordion-block" ref={aboutRef}>
          <div className="accordion-trigger-head" onClick={() => toggleSection('about')}>
            <div className="head-title-side">
              <span className="head-icon">📄</span>
              <h3>About the Product</h3>
            </div>
            <span className="head-arrow">{openSections.about ? '−' : '+'}</span>
          </div>
          {openSections.about && (
            <div className="accordion-panel-body">
              <p>This exquisite Antique Brass Diya is crafted to bring purity and elegant aesthetics to your pooja room. Perfect for daily rituals, festive decorations, or as a premium spiritual gift.</p>
            </div>
          )}
        </div>

        {/* Section 2: Size & Weight */}
        <div className="accordion-block" ref={sizeRef}>
          <div className="accordion-trigger-head" onClick={() => toggleSection('size')}>
            <div className="head-title-side">
              <span className="head-icon">📦</span>
              <h3>Size & Weight</h3>
            </div>
            <span className="head-arrow">{openSections.size ? '−' : '+'}</span>
          </div>
          {openSections.size && (
            <div className="accordion-panel-body">
              <p><strong>Dimensions:</strong> 3 Inches Height x 2.5 Inches Width</p>
              <p><strong>Weight:</strong> Approx. 250 grams</p>
            </div>
          )}
        </div>

        {/* Section 3: Product Material */}
        <div className="accordion-block" ref={materialRef}>
          <div className="accordion-trigger-head" onClick={() => toggleSection('material')}>
            <div className="head-title-side">
              <span className="head-icon">🥞</span>
              <h3>Product Material</h3>
            </div>
            <span className="head-arrow">{openSections.material ? '−' : '+'}</span>
          </div>
          {openSections.material && (
            <div className="accordion-panel-body">
              <p>Made from premium high-grade 100% solid Brass with an antique finish coating to prevent tarnishing over time.</p>
            </div>
          )}
        </div>

        {/* FAQ Section Container */}
        <div className="faq-outer-section" ref={faqRef}>
          <h2 className="faq-main-heading">Frequently Asked Questions</h2>
          <div className="faq-list-wrapper">
            {faqData.map((faq, index) => (
              <div key={index} className="faq-item-row">
                <div className="faq-question-bar" onClick={() => toggleFaq(index)}>
                  <div className="faq-q-text-side">
                    <span className="faq-q-icon">❓</span>
                    <span className="faq-question-txt">{faq.q}</span>
                  </div>
                  <span className="faq-arrow-icon">{openFaq === index ? '−' : '+'}</span>
                </div>
                {openFaq === index && (
                  <div className="faq-answer-panel">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Aboutothers;
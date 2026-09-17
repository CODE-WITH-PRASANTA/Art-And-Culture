import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./AboutReview.css";

const reviewsData = [
  {
    id: 1,
    quote: "Our home pooja room feels complete now. The quality of the brass diya and thali set is top notch.",
    name: "Rajesh Kumar",
    role: "Devotee",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    quote: "The Meenakari Jaipur artwork is living color in our home. Exceptional service and packaging!",
    name: "Ananya Patel",
    role: "Art Collector",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    quote: "Handmade quality you can truly feel. Bought the Krishna murti and it has become the centerpiece of our home.",
    name: "Vikram Malhotra",
    role: "Regular Customer",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 4,
    quote: "An extraordinary collection of authentic items. The attention to detail in craftsmanship is phenomenal.",
    name: "Priya Sharma",
    role: "Interior Designer",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  },
];

const AboutReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle auto-slide or manual navigation
  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviewsData.length) % reviewsData.length);
  };

  return (
    <section className="about-review-section">
      <div className="about-review-container">
        
        {/* Header Content */}
        <div className="about-review-header">
          <h2 className="about-review-title">Sacred Experiences</h2>
          <p className="about-review-subtitle">Trusted by thousands of devotees</p>
        </div>

        {/* Reviews Carousel Wrapper */}
        <div className="about-review-carousel-wrapper">
          
          {/* Left Arrow Control */}
          <button 
            type="button" 
            className="about-review-nav-btn about-review-prev-btn" 
            onClick={prevReview}
            aria-label="Previous review"
          >
            <FaChevronLeft />
          </button>

          {/* Cards Track */}
          <div className="about-review-track-container">
            <div className="about-review-track">
              {reviewsData.map((review, idx) => {
                // Determine card position classes for desktop multi-view effect
                let positionClass = "about-review-card-hidden";
                if (idx === currentIndex) {
                  positionClass = "about-review-card-active";
                } else if (idx === (currentIndex - 1 + reviewsData.length) % reviewsData.length) {
                  positionClass = "about-review-card-prev";
                } else if (idx === (currentIndex + 1) % reviewsData.length) {
                  positionClass = "about-review-card-next";
                }

                return (
                  <div key={review.id} className={`about-review-card ${positionClass}`}>
                    <div className="about-review-card-inner">
                      <div className="about-review-quote-icon">
                        <FaQuoteLeft />
                      </div>
                      
                      <p className="about-review-text">"{review.quote}"</p>
                      
                      <div className="about-review-rating">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} className="about-review-star-icon" />
                        ))}
                      </div>

                      <div className="about-review-author-box">
                        <img src={review.avatar} alt={review.name} className="about-review-avatar" />
                        <div className="about-review-author-info">
                          <h4 className="about-review-name">{review.name}</h4>
                          <span className="about-review-role">{review.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Arrow Control */}
          <button 
            type="button" 
            className="about-review-nav-btn about-review-next-btn" 
            onClick={nextReview}
            aria-label="Next review"
          >
            <FaChevronRight />
          </button>

        </div>

        {/* Pagination Dots (1 by 1 navigation) */}
        <div className="about-review-pagination-dots">
          {reviewsData.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`about-review-dot ${currentIndex === idx ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutReview;
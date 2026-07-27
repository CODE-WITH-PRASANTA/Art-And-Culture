import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';
import './HeroSection.css';

// Import local images from src/assets
import bgPatternImg from '../../assets/Screenshot 2026-07-27 110029.png';
import slide1Img from '../../assets/Priyanka_Svastika_Banner.webp';
import slide2Img from '../../assets/Ganesha_Banner_2.webp';
import slide3Img from '../../assets/mayur.webp';
import slide4Img from '../../assets/Meenakari_Elephant_Banner.webp';

const slidesData = [
  {
    id: '01',
    image: slide1Img,
    badgeText: 'LOVED BY 2 MILLION+ HOMES',
    subBadgeText: "THE PIECES WE'RE KNOWN FOR",
    headingMain: 'Made slow.',
    headingItalic: 'Loved most.',
    description:
      'The brass, silver and meenakari our homes reach for first — handmade, hand-finished, kept for years. No haste. No shortcuts.',
    primaryBtnText: 'SHOP BESTSELLERS',
    secondaryBtnText: 'EXPLORE COLLECTIONS',
  },
  {
    id: '02',
    image: slide2Img,
    badgeText: 'FOR THE DAILY POOJA',
    subBadgeText: 'EVERYTHING THE POOJA ROOM ASKS FOR',
    headingMain: 'Your pooja room,',
    headingItalic: 'made ready.',
    description:
      'Diyas, thalis, bells and incense — the quiet essentials of the pooja room, cast and finished by hand. Everything your ritual needs.',
    primaryBtnText: 'SHOP ESSENTIALS',
    secondaryBtnText: null,
  },
  {
    id: '03',
    image: slide3Img,
    badgeText: 'LEELA · LORD KRISHNA',
    subBadgeText: 'HAND-FINISHED MURTIS',
    headingMain: 'Bring home',
    headingItalic: 'the leela.',
    description:
      'Krishna in brass, silver and gold plate — every murti hand-cast and finished, ready for the mandir or the shelf you love most.',
    primaryBtnText: 'SHOP KRISHNA',
    secondaryBtnText: 'SHOP THIS',
  },
  {
    id: '04',
    image: slide4Img,
    badgeText: 'ART OF RAJASTHAN',
    subBadgeText: 'HAND-PAINTED ENAMEL',
    headingMain: 'A tradition you',
    headingItalic: 'can hold.',
    description:
      "Jaipur's meenakari enamel, set by hand in brass — elephants, peacocks and camels in living colour, each a small heirloom in the making.",
    primaryBtnText: 'SHOP MEENAKARI',
    secondaryBtnText: 'SHOP THIS',
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = slidesData.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Automatic slide transition every 4 seconds for a smooth slideshow effect
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div
      className="HeroSection"
      style={{ backgroundImage: `url(${bgPatternImg})` }}
    >
      {slidesData.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`HeroSection-slide ${isActive ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Dark overlay for optimal text readability */}
            <div className="HeroSection-overlay" />

            {/* Slide Content */}
            <div className="HeroSection-content">
              {/* Badges Container */}
              <div className="HeroSection-badgeGroup">
                <span className="HeroSection-badge">{slide.badgeText}</span>
                <span className="HeroSection-subBadge">{slide.subBadgeText}</span>
              </div>

              {/* Headings */}
              <h1 className="HeroSection-title">
                {slide.headingMain}{' '}
                <span className="HeroSection-titleItalic">{slide.headingItalic}</span>
              </h1>

              {/* Description */}
              <p className="HeroSection-description">{slide.description}</p>

              {/* Action Buttons */}
              <div className="HeroSection-actions">
                {slide.primaryBtnText && (
                  <button className="HeroSection-btnPrimary">
                    <span>{slide.primaryBtnText}</span>
                    <FiArrowRight className="HeroSection-btnIcon" />
                  </button>
                )}
                {slide.secondaryBtnText && (
                  <button className="HeroSection-btnSecondary">
                    {slide.secondaryBtnText}
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Top Right Counter */}
      <div className="HeroSection-counter">
        {slidesData[currentIndex].id} / 0{totalSlides}
      </div>

      {/* Side Navigation Arrows */}
      <div className="HeroSection-nav">
        <button
          className="HeroSection-navBtn"
          onClick={handlePrev}
          aria-label="Previous Slide"
        >
          <FiChevronLeft />
        </button>
        <button
          className="HeroSection-navBtn"
          onClick={handleNext}
          aria-label="Next Slide"
        >
          <FiChevronRight />
        </button>
      </div>

      {/* Bottom Pagination Indicators */}
      <div className="HeroSection-pagination">
        {slidesData.map((_, index) => (
          <button
            key={index}
            className={`HeroSection-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
import React, { useRef } from 'react';
import './Followalong.css';
import { FaInstagram, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import bgPattern from '../../assets/Artall background.webp'; 

// --- इमेजेस इंपोर्ट करें ---
import img1 from '../../assets/Balaji_Face_Idol.webp';
import img2 from '../../assets/Art and Culture Logo.webp';
import img3 from '../../assets/Brass-Lord-Shiva-Meditating.webp';
import img4 from '../../assets/Charan01.webp';
import img5 from '../../assets/diya03.wabp.webp';
import img6 from '../../assets/diya07.webp';

const Followalong = () => {
  const sliderRef = useRef(null);

  // Instagram Profile Link
  const instagramUrl = 'https://www.instagram.com/theartandculturehub?stkn=bjRzemdzN3hmcnJu';

  // 1-by-1 कार्ड स्क्रॉल लॉजिक
  const scroll = (direction) => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.followalong__card');
      if (card) {
        // एक कार्ड की वास्तविक चौड़ाई + गैप (16px) मापकर स्क्रॉल करेगा
        const cardWidth = card.offsetWidth + 16;
        sliderRef.current.scrollBy({
          left: direction === 'left' ? -cardWidth : cardWidth,
          behavior: 'smooth',
        });
      }
    }
  };

  const galleryItems = [
    { id: 1, image: img1, alt: 'Art & Culture promo' },
    { id: 2, image: img2, alt: 'Behind the scenes' },
    { id: 3, image: img3, alt: 'Puri temple visit 1' },
    { id: 4, image: img4, alt: 'Puri temple visit 2' },
    { id: 5, image: img5, alt: 'Puri temple visit 3' },
    { id: 6, image: img6, alt: 'Anniversary card' },
  ];

  return (
    <section 
      className="followalong"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <div className="followalong__container">
        {/* Header Section */}
        <div className="followalong__header">
          <span className="followalong__subtitle">✨@theartandculturehub</span>
          <h2 className="followalong__title">
            Follow along, <span className="followalong__highlight">slowly</span>
          </h2>
        </div>

        {/* Carousel Slider Section */}
        <div className="followalong__slider-wrapper">
          {/* Left Arrow Button */}
          <button
            className="followalong__arrow followalong__arrow--left"
            onClick={() => scroll('left')}
            aria-label="Scroll Left"
          >
            <FaChevronLeft />
          </button>

          {/* Image Slider Track */}
          <div className="followalong__slider" ref={sliderRef}>
            {galleryItems.map((item) => (
              <a 
                key={item.id} 
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="followalong__card"
              >
                <img src={item.image} alt={item.alt} className="followalong__card-img" />
                <div className="followalong__card-overlay">
                  <FaInstagram className="followalong__overlay-icon" />
                </div>
              </a>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            className="followalong__arrow followalong__arrow--right"
            onClick={() => scroll('right')}
            aria-label="Scroll Right"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Bottom Instagram Button */}
        <div className="followalong__btn-wrapper">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="followalong__instagram-btn"
          >
            <FaInstagram className="followalong__insta-icon" />
            <span>Follow @theartandculturehub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Followalong;
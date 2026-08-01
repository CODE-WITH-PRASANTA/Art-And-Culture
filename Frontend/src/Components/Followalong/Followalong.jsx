import React, { useRef } from 'react';
import './Followalong.css';
import { FaInstagram, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// --- इमेजेस इंपोर्ट करें (अपने पाथ के अनुसार बदलें) ---
import img1 from '../../assets/Balaji_Face_Idol.webp';
import img2 from '../../assets/Art and Culture Logo.webp';
import img3 from '../../assets/Brass-Lord-Shiva-Meditating.webp';
import img4 from '../../assets/Charan01.webp';
import img5 from '../../assets/diya03.wabp.webp';
import img6 from '../../assets/diya07.webp';

const Followalong = () => {
  const sliderRef = useRef(null);

  // स्लाइडर को स्क्रॉल करने का फ़ंक्शन
  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount = clientWidth * 0.5; // स्क्रॉल दूरी
      sliderRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const galleryItems = [
    { id: 1, image: img1, alt: 'Svastika promo' },
    { id: 2, image: img2, alt: 'Behind the scenes' },
    { id: 3, image: img3, alt: 'Puri temple visit 1' },
    { id: 4, image: img4, alt: 'Puri temple visit 2' },
    { id: 5, image: img5, alt: 'Puri temple visit 3' },
    { id: 6, image: img6, alt: 'Anniversary card' },
  ];

  return (
    <section className="followalong">
      <div className="followalong__container">
        {/* Header Section */}
        <div className="followalong__header">
          <span className="followalong__subtitle">✨ @SVASTIKA.IN</span>
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
              <div key={item.id} className="followalong__card">
                <img src={item.image} alt={item.alt} className="followalong__card-img" />
                <div className="followalong__card-overlay">
                  <FaInstagram className="followalong__overlay-icon" />
                </div>
              </div>
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
            href="https://www.instagram.com/svastika.in"
            target="_blank"
            rel="noopener noreferrer"
            className="followalong__instagram-btn"
          >
            <FaInstagram className="followalong__insta-icon" />
            <span>Follow @svastika.in</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Followalong;
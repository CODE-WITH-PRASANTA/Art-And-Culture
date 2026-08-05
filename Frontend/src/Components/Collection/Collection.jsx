import React, { useRef } from 'react';
import './Collection.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// --- अपनी लोकल इमेजेस इंपोर्ट करें ---
import vishnuImg from '../../assets/Lord-Vishnu.webp';
import lakshmiNarayanImg from '../../assets/Vishnu_Lakshmi.avif';
import pocketTempleImg from '../../assets/Balaji_Pocket_Temple_01.avif';
import cowImg from '../../assets/kamdhenu.avif';
import ganeshaImg from '../../assets/Ganesh_Chaturthi.webp';
import poojaImg from '../../assets/poojaph2.webp';
import godIdolsImg from '../../assets/Tirupati_Balaji_Venkateswara.avif';

const Collection = () => {
  const sliderRef = useRef(null);

  // स्लाइडर को बाएं या दाएं स्क्रॉल करने का फ़ंक्शन
  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount = clientWidth * 0.6; // Scroll distance
      sliderRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const collections = [
    {
      id: 1,
      image: vishnuImg,
      title: 'Lord Vishnu',
      subtitle: 'ओम् नमो नारायणाय'
    },
    {
      id: 2,
      image: lakshmiNarayanImg,
      title: 'Lakshmi Narayan',
      subtitle: 'लक्ष्मी नारायण'
    },
    {
      id: 3,
      image: pocketTempleImg,
      title: 'Pocket Temple',
      subtitle: ''
    },
    {
      id: 4,
      image: cowImg,
      title: 'Gold & Silver Plated Idols',
      subtitle: ''
    },
    {
      id: 5,
      image: ganeshaImg,
      title: 'Car Dashboard Idols',
      subtitle: 'शुभ यात्रा'
    },
    {
      id: 6,
      image: poojaImg,
      title: 'Pooja Essentials',
      subtitle: 'दीप ज्योति'
    },
    {
      id: 7,
      image: godIdolsImg,
      title: 'God Idols',
      subtitle: 'श्री देव'
    }
  ];

  return (
    <section className="collection">
      <div className="collection__container">
        {/* Header Section */}
        <div className="collection__header">
          <div className="collection__header-text">
            <span className="collection__section-subtitle">RELEVANT COLLECTIONS</span>
            <h2 className="collection__section-title">
              Explore <span className="collection__highlight-text">More</span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="collection__slider-arrows">
            <button className="collection__nav-btn" onClick={() => scroll('left')} aria-label="Previous">
              <FaChevronLeft />
            </button>
            <button className="collection__nav-btn" onClick={() => scroll('right')} aria-label="Next">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Scrollable Cards Track */}
        <div className="collection__slider" ref={sliderRef}>
          {collections.map((item) => (
            <div key={item.id} className="collection__arch-card">
              <img src={item.image} alt={item.title} className="collection__arch-card-img" />
              <div className="collection__arch-card-overlay">
                <h3 className="collection__card-title">{item.title}</h3>
                {item.subtitle && <p className="collection__card-subtitle">{item.subtitle}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
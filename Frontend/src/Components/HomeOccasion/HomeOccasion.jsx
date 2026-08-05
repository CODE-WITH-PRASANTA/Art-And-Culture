import React from 'react';
import './HomeOccasion.css';
import { GoArrowRight } from 'react-icons/go';

// Background Pattern Import
import bgPattern from '../../assets/Screenshot 2026-07-27 110029.png'; // Adjust path as needed

// 4 Card Image Imports
import img1 from '../../assets/Brass_Meenakari_Peacock_Pooja_Thali_Set_08_1 (1).webp';
import img2 from '../../assets/white-gold-lord-krishna-with-cow-idol-marble-finish-home-decor_1.webp';
import img3 from '../../assets/goddess-lakshmi-maa-antique-murti-10-inch-hero-front-view.webp';
import img4 from '../../assets/svastika-meenakari-elephant-ambari-statue-5-inch-hero-close-up-source.webp';

const HomeOccasion = () => {
  const occasions = [
    {
      id: 1,
      badge: 'EVERYDAY',
      title: 'For the Pooja Room',
      subtitle: 'IDOLS & POOJA ESSENTIALS',
      image: img1,
      link: '#pooja-room',
    },
    {
      id: 2,
      badge: 'GIFTING',
      title: 'Premium Edits',
      subtitle: 'OUR MOST PREMIUM COLLECTION',
      image: img2,
      link: '#premium-edits',
    },
    {
      id: 3,
      badge: 'HOME DECOR',
      title: 'Antique Idols',
      subtitle: 'ANTIQUE & RUSTIC',
      image: img3,
      link: '#antique-idols',
    },
    {
      id: 4,
      badge: 'SEASONAL',
      title: 'Wedding Gifts',
      subtitle: 'NOW IN SEASON',
      image: img4,
      link: '#wedding-gifts',
    },
  ];

  return (
    <section
      className="HomeOccasion"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <div className="HomeOccasion-container">
        
        {/* Header Section */}
        <div className="HomeOccasion-header">
          <span className="HomeOccasion-pillTag">+ FOR EVERY OCCASION</span>
          <h2 className="HomeOccasion-title">
            Shop by <span>occasion & purpose</span>
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="HomeOccasion-grid">
          {occasions.map((card) => (
            <a key={card.id} href={card.link} className="HomeOccasion-card">
              <img
                src={card.image}
                alt={card.title}
                className="HomeOccasion-cardImg"
              />
              
              {/* Dark Gradient Overlay for Readability */}
              <div className="HomeOccasion-overlay" />

              {/* Top Tag Inside Card */}
              <div className="HomeOccasion-cardBadge">{card.badge}</div>

              {/* Bottom Text Content Inside Card */}
              <div className="HomeOccasion-cardContent">
                <h3 className="HomeOccasion-cardTitle">{card.title}</h3>
                <p className="HomeOccasion-cardSubtitle">
                  <span>{card.subtitle}</span>
                  <GoArrowRight className="HomeOccasion-arrow" />
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeOccasion;
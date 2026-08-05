import React from 'react';
import './HomeBrowse.css';

// React Icons
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { GoArrowRight } from 'react-icons/go';

// Background Pattern Import
import bgPattern from '../../assets/Screenshot 2026-07-27 110029.png'; // Adjust path if needed

// 6 Category Image Imports
import img1 from '../../assets/Lord-Shiva.webp';
import img2 from '../../assets/07.webp';
import img3 from '../../assets/04.webp';
import img4 from '../../assets/Meenakari_Elephant_Banner (1).webp';
import img5 from '../../assets/Murti5.webp';
import img6 from '../../assets/Rose-Quartz-Crystal-Love-Tree-2.webp';

const HomeBrowse = () => {
  const categories = [
    {
      id: 1,
      title: 'God Idols (Murti)',
      image: img1,
      link: '#god-idols',
    },
    {
      id: 2,
      title: 'Pooja Essentials',
      image: img2,
      link: '#pooja-essentials',
    },
    {
      id: 3,
      title: 'Loban Burners',
      image: img3,
      link: '#loban-burners',
    },
    {
      id: 4,
      title: 'Table Decor',
      image: img4,
      link: '#table-decor',
    },
    {
      id: 5,
      title: 'For Vastu',
      image: img5,
      link: '#for-vastu',
    },
    {
      id: 6,
      title: 'Crystals',
      image: img6,
      link: '#crystals',
    },
  ];

  return (
    <section
      className="HomeBrowse"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <div className="HomeBrowse-container">
        
        {/* Header Section */}
        <div className="HomeBrowse-header">
          <div className="HomeBrowse-titleGroup">
            <span className="HomeBrowse-pillTag">+ SHOP BY CATEGORY</span>
            <h2 className="HomeBrowse-title">
              Browse the <span>whole house</span>
            </h2>
          </div>

          <a href="#all-categories" className="HomeBrowse-allBtn">
            <span>ALL CATEGORIES</span>
            <HiOutlineArrowLongRight className="HomeBrowse-headerArrow" />
          </a>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="HomeBrowse-grid">
          {categories.map((item) => (
            <a key={item.id} href={item.link} className="HomeBrowse-card">
              <div className="HomeBrowse-imageWrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="HomeBrowse-image"
                />
              </div>
              <div className="HomeBrowse-details">
                <h3 className="HomeBrowse-categoryTitle">{item.title}</h3>
                <span className="HomeBrowse-shopLink">
                  SHOP <GoArrowRight className="HomeBrowse-shopArrow" />
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeBrowse;
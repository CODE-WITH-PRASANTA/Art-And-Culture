import React, { useState } from 'react';
import './HomeMyth.css';

// React Icons
import { HiOutlineArrowRight } from 'react-icons/hi2';

// Background Pattern Import
import bgPattern from '../../assets/whitebg.png'; // Adjust path as needed

// 4 Card Image Imports
import img1 from '../../assets/white-gold-lord-krishna-with-cow-idol-marble-finish-home-decor_1.webp';
import img2 from '../../assets/thepuja.webp';
import img3 from '../../assets/diwalipic.webp';
import img4 from '../../assets/karwa.webp';

const HomeMyth = () => {
  const [activeFilter, setActiveFilter] = useState('ALL BLOGS');

  const categories = [
    'ALL BLOGS',
    'HINDU MYTHOLOGY...',
    'POOJA ROOM...',
    'INDIAN FESTIVALS...',
  ];

  const blogs = [
    {
      id: 1,
      badge: 'POOJA ROOM...',
      date: 'NOV 7, 2025',
      title: 'Luxury Table Decoration Ideas for Modern Indian Homes',
      image: img1,
      link: '#blog-1',
    },
    {
      id: 2,
      badge: 'INDIAN FESTIVALS...',
      date: 'OCT 25, 2025',
      title: 'Chhath Puja 2026: Significance, Rituals and Vrat Vidhi',
      image: img2,
      link: '#blog-2',
    },
    {
      id: 3,
      badge: 'INDIAN FESTIVALS...',
      date: 'OCT 10, 2025',
      title: 'Diwali Lakshmi Puja: Tithi, Rituals and Timing Explained',
      image: img3,
      link: '#blog-3',
    },
    {
      id: 4,
      badge: 'INDIAN FESTIVALS...',
      date: 'OCT 9, 2025',
      title: 'Karwa Chauth: Importance, Traditions and How the Puja Timing Works',
      image: img4,
      link: '#blog-4',
    },
  ];

  return (
    <section
      className="HomeMyth"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <div className="HomeMyth-container">
        
        {/* Header Section */}
        <div className="HomeMyth-header">
          <div className="HomeMyth-titleGroup">
            <span className="HomeMyth-greenTag">
              ✦ STORIES · RITUALS · ASTROLOGY · ESSAYS
            </span>
            <h2 className="HomeMyth-title">Gyaan & Myths</h2>
          </div>

          <a href="#all-blogs" className="HomeMyth-knowMore">
            <span>KNOW MORE</span>
            <HiOutlineArrowRight className="HomeMyth-knowMoreArrow" />
          </a>
        </div>

        {/* Category Filters */}
        <div className="HomeMyth-filters">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`HomeMyth-filterBtn ${
                activeFilter === cat ? 'active' : ''
              }`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 4 Cards Grid */}
        <div className="HomeMyth-grid">
          {blogs.map((item) => (
            <a key={item.id} href={item.link} className="HomeMyth-card">
              
              {/* Image Container */}
              <div className="HomeMyth-cardImgWrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="HomeMyth-cardImg"
                />
                <span className="HomeMyth-cardBadge">{item.badge}</span>
              </div>

              {/* Text Info below Image */}
              <div className="HomeMyth-cardBody">
                <span className="HomeMyth-cardDate">{item.date}</span>
                <h3 className="HomeMyth-cardTitle">{item.title}</h3>
              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeMyth;
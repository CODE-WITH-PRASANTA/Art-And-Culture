import React from 'react';
import './HomeGifting.css';

// React Icons
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { GoHeart } from 'react-icons/go';

// Assets
import bgPattern from '../../assets/Screenshot 2026-07-27 110029.png'; // Section pattern background
import poojaThaliImg from '../../assets/Brass_Meenakari_Peacock_Pooja_Thali_Set_08_1 (1).webp'; // Main card background image

const HomeGifting = () => {
  return (
    <section
      className="HomeGifting"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <div className="HomeGifting-container">
        
        {/* Main Banner Card */}
        <div className="HomeGifting-card">
          
          {/* Background Gift Image */}
          <img
            src={poojaThaliImg}
            alt="Pooja Thali Gift Box"
            className="HomeGifting-cardImg"
          />

          {/* Dark Vignette Overlay for Text Contrast */}
          <div className="HomeGifting-cardOverlay" />

          {/* Red Ribbon Bookmark Decorative Element */}
          <div className="HomeGifting-ribbon" />

          {/* Card Main Text Content */}
          <div className="HomeGifting-content">
            
            {/* Pill Tag */}
            <span className="HomeGifting-pillTag">+ THE GIFTING EDIT</span>

            {/* Title Block */}
            <h2 className="HomeGifting-title">
              Chosen with thought.<br />
              <span>Packed with care.</span><br />
              Given with love.
            </h2>

            {/* Subtitle */}
            <p className="HomeGifting-subtitle">
              For house warmings, weddings, first Diwalis and second<br className="HomeGifting-brDesktop" />
              chances. Packed by hand, ready to give.
            </p>

            {/* Action Buttons */}
            <div className="HomeGifting-actions">
              <a href="#explore-gifting" className="HomeGifting-btnPrimary">
                <span>EXPLORE GIFTING</span>
                <HiOutlineArrowLongRight className="HomeGifting-btnArrow" />
              </a>

              <a href="#concierge-gifting" className="HomeGifting-btnSecondary">
                CONCIERGE GIFTING
              </a>
            </div>

          </div>

          {/* Floating Red Heart Button */}
          <button className="HomeGifting-heartBtn" aria-label="Add to Wishlist">
            <GoHeart className="HomeGifting-heartIcon" />
          </button>

        </div>

      </div>
    </section>
  );
};

export default HomeGifting;
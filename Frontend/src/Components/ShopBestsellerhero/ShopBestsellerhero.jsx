import React from 'react'
import './ShopBestsellerhero.css'
import bgImage from '../../assets/coffee.jpg' // Adjust the path to your image in src/assets

const ShopBestsellerhero = () => {
  return (
    <section 
      className="ShopBestsellerhero" 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="ShopBestsellerhero-overlay">
        <div className="ShopBestsellerhero-content">
          
          {/* Subtitle with side lines */}
          <div className="ShopBestsellerhero-subtitle-container">
            <span className="ShopBestsellerhero-line"></span>
            <span className="ShopBestsellerhero-subtitle">ART & CULTURE'S</span>
            <span className="ShopBestsellerhero-line"></span>
          </div>

          {/* Main Heading */}
          <h1 className="ShopBestsellerhero-title">Popular</h1>

          {/* Description Text */}
          <p className="ShopBestsellerhero-description">
            Handmade pieces for daily ritual and festival days — cast,<br className="ShopBestsellerhero-desktop-br" />
            carved and finished by artisans across India.
          </p>

          {/* Footer Highlights */}
          <div className="ShopBestsellerhero-features">
            <span className="ShopBestsellerhero-feature">Authentic &amp; True</span>
            <span className="ShopBestsellerhero-dot">•</span>
            <span className="ShopBestsellerhero-feature">7 Days Easy Return</span>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ShopBestsellerhero
import React from 'react'
import './ExploreCollectionHero.css'
import bgImage from '../../assets/coffee.jpg' // Adjust path according to your src assets directory

const ExploreCollectionHero = () => {
  return (
    <section 
      className="ExploreCollectionHero" 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="ExploreCollectionHero-container">
        
        {/* Top Tagline with Decorative Lines */}
        <div className="ExploreCollectionHero-subtag">
          <span className="ExploreCollectionHero-line"></span>
          <span className="ExploreCollectionHero-tag-text">SVASTIKA'S</span>
          <span className="ExploreCollectionHero-line"></span>
        </div>

        {/* Main Title */}
        <h1 className="ExploreCollectionHero-title">All</h1>

        {/* Description Text */}
        <p className="ExploreCollectionHero-description">
          Handmade pieces for daily ritual and festival days — cast,<br className="ExploreCollectionHero-desktop-break" /> carved and finished by artisans across India.
        </p>

        {/* Footer Features */}
        <div className="ExploreCollectionHero-features">
          <span className="ExploreCollectionHero-feature-item">Authentic & True</span>
          <span className="ExploreCollectionHero-dot">•</span>
          <span className="ExploreCollectionHero-feature-item">7 Days Easy Return</span>
        </div>

      </div>
    </section>
  )
}

export default ExploreCollectionHero
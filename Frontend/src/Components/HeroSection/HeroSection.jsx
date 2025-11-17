import React from 'react';
import './Herosection.css';

const Herosection = () => {
  const leftCardImage = "https://svastika.in/cdn/shop/files/Dagadushethchauki02.jpg?v=1750414277&width=360";
  // Background image provided by the user (mounted in the runtime)
  const patternBg = "/mnt/data/284a581d-5c87-4122-bf46-a06f17cb2546.png";
  const rightCardImage = "https://wpthemes.themehunk.com/god-idols/wp-content/uploads/sites/284/2023/12/1-1-300x300.png";
  return (
    <section className="hero-container" aria-label="Hero showcase">
      <div className="hero-overlay" aria-hidden="true">
        <div className="floating-particles">
          <span className="particle particle-1" />
          <span className="particle particle-2" />
          <span className="particle particle-3" />
          <span className="particle particle-4" />
        </div>
      </div>

      <div className="hero-content">
        {/* Left Card: image on left, content on right */}
        <article className="left-card" tabIndex={0}>
          <div className="left-card-inner">
            <div className="card-image--side">
              <img src={leftCardImage} alt="Divine Idol" loading="lazy" />
              <div className="image-shine" aria-hidden />
            </div>

            <div className="text-content--side">
              <h1 className="fashion-text">
                <span className="text-gradient">Divine &amp; Idols</span>
              </h1>

              <p className="lead-copy">Beautifully crafted idols bringing blessings to your home</p>

              <button className="shop-button" aria-label="Shop now">
                <span className="button-text">Shop Now</span>
                <span className="button-icon" aria-hidden>→</span>
              </button>

              <p className="dress-more-text">
                <a href="#" className="text-underline">All God &amp; Idols</a>
              </p>
            </div>
          </div>
        </article>

        {/* Right Card: image full-card with overlapping text at left-bottom */}
        <article className="right-card" tabIndex={0}>
          <div className="right-card-full">
            <img className="right-full-image" src={rightCardImage} alt="New Collection" loading="lazy" />

            <div className="right-overlay-content">
              <div className="right-overlay-inner">
                <h3 className="right-card-title">Premium &amp; Collections</h3>
                <p className="right-card-subtitle">New arrivals in idols, décor & spiritual essentials</p>
                <button className="view-collection-btn" aria-label="View collection">Shop Now</button>
              </div>
            </div>

            <div className="image-shine" aria-hidden />
          </div>
        </article>
      </div>

      {/* Floating Elements */}
      <div className="floating-elements" aria-hidden>
      </div>
    </section>
  );
};

export default Herosection;

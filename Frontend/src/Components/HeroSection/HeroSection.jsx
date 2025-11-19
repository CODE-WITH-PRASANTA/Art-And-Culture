import React, { useEffect, useRef, useState } from "react";
import "./Herosection.css";

const SLIDES = [
  {
    id: 1,
    variant: "variant-1",
    leftImage: "https://svastika.in/cdn/shop/files/Dagadushethchauki02.jpg?v=1750414277&width=360",
    rightImage: "https://wpthemes.themehunk.com/god-idols/wp-content/uploads/sites/284/2023/12/1-1-300x300.png",
    title: "Divine & Idols",
    lead: "Beautifully crafted idols bringing blessings to your home",
    rightTitle: "Premium & Collections",
    rightSubtitle: "New arrivals in idols, décor & spiritual essentials",
  },
  {
    id: 2,
    variant: "variant-2",
    leftImage: "https://svastika.in/cdn/shop/files/Dagadushethchauki02.jpg?v=1750414277&width=360",
    rightImage: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&auto=format&fit=crop&q=60",
    title: "Hand-Carved <span class='accent-word'>Treasures</span>",
    lead: "Artisan-crafted idols with centuries of tradition and spiritual significance",
    rightTitle: "Curated Picks",
    rightSubtitle: "Celebrate with pieces made by master craftsmen",
  },
  {
    id: 3,
    variant: "variant-3",
    leftImage: "https://img.freepik.com/free-vector/god-ganesha-illustration-happy-ganesh-chaturthi-card-background_1035-29412.jpg?t=st=1763490944~exp=1763494544~hmac=c60f488ec22ab8217b9d6e48a249a9114b1b504accd29adc69086066fa67141f&w=1060",
    rightImage: "https://img.freepik.com/free-vector/god-ganesha-illustration-happy-ganesh-chaturthi-card-background_1035-29412.jpg?t=st=1763490944~exp=1763494544~hmac=c60f488ec22ab8217b9d6e48a249a9114b1b504accd29adc69086066fa67141f&w=1060",
    gridImage1: "https://img.freepik.com/free-vector/god-ganesha-illustration-happy-ganesh-chaturthi-card-background_1035-29412.jpg?t=st=1763490944~exp=1763494544~hmac=c60f488ec22ab8217b9d6e48a249a9114b1b504accd29adc69086066fa67141f&w=1060",
    gridImage2: "https://img.freepik.com/free-vector/god-ganesha-illustration-happy-ganesh-chaturthi-card-background_1035-29412.jpg?t=st=1763490944~exp=1763494544~hmac=c60f488ec22ab8217b9d6e48a249a9114b1b504accd29adc69086066fa67141f&w=1060",
    title: "Sacred <span class='title-gradient'>Elegance</span>",
    lead: "Experience the perfect harmony of traditional craftsmanship and contemporary spiritual design in our exclusive collection",
    features: [
      "Handcrafted by Master Artisans",
      "Premium Materials Only",
      "Spiritual Authenticity",
      "Lifetime Blessings"
    ]
  },
];

const Herosection = ({ interval = 5000 }) => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slidesCount = SLIDES.length;
  const timerRef = useRef(null);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % slidesCount);
      }, interval);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, interval, slidesCount]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + slidesCount) % slidesCount);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % slidesCount);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slidesCount]);

  const goTo = (i) => setIndex(((i % slidesCount) + slidesCount) % slidesCount);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };
  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current != null && touchEndX.current != null) {
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 40) {
        if (diff > 0) setIndex((i) => (i + 1) % slidesCount);
        else setIndex((i) => (i - 1 + slidesCount) % slidesCount);
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    setIsPaused(false);
  };

  return (
    <section
      className="hero-container"
      aria-label="Hero showcase carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      style={{ position: "relative" }}
    >
      <div className="hero-overlay" aria-hidden="true">
        <div className="floating-particles">
          <span className="particle particle-1" />
          <span className="particle particle-2" />
          <span className="particle particle-3" />
          <span className="particle particle-4" />
        </div>
      </div>

      <div
        className="hero-carousel-wrapper"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        aria-live="polite"
      >
        {SLIDES.map((s, i) => {
          const active = i === index;
          const slideStyle = active
            ? {
                position: "relative",
                zIndex: 3,
                opacity: 1,
                transition: "opacity 600ms ease",
                display: "grid",
              }
            : {
                position: "absolute",
                inset: 0,
                zIndex: 1,
                opacity: 0,
                transition: "opacity 600ms ease",
                display: "grid",
                pointerEvents: "none",
              };

          return (
            <div
              key={s.id}
              className={`hero-content ${s.variant}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slidesCount}`}
              style={slideStyle}
            >
              {/* Variant 1 - Original Design */}
              {s.variant === "variant-1" && (
                <>
                  <article className="left-card" tabIndex={0}>
                    <div className="left-card-inner">
                      <div className="card-image--side">
                        <img src={s.leftImage} alt="Divine Idol" loading="lazy" />
                        <div className="image-shine" aria-hidden />
                      </div>

                      <div className="text-content--side">
                        <h1 className="fashion-text">
                          <span className="text-gradient">{s.title}</span>
                        </h1>

                        <p className="lead-copy">{s.lead}</p>

                        <button className="shop-button" aria-label="Shop now">
                          <span className="button-text">Shop Now</span>
                          <span className="button-icon" aria-hidden>
                            →
                          </span>
                        </button>

                        <p className="dress-more-text">
                          <a href="#" className="text-underline">
                            All God &amp; Idols
                          </a>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article className="right-card" tabIndex={0}>
                    <div className="right-card-full">
                      <img
                        className="right-full-image"
                        src={s.rightImage}
                        alt="New Collection"
                        loading="lazy"
                      />

                      <div className="right-overlay-content">
                        <div className="right-overlay-inner">
                          <h3 className="right-card-title">{s.rightTitle}</h3>
                          <p className="right-card-subtitle">{s.rightSubtitle}</p>
                          <button className="view-collection-btn" aria-label="View collection">
                            Shop Now
                          </button>
                        </div>
                      </div>

                      <div className="image-shine" aria-hidden />
                    </div>
                  </article>
                </>
              )}

              {/* Variant 2 - Premium Gallery Style */}
              {s.variant === "variant-2" && (
                <>
                  <article className="left-card left-card--tall" tabIndex={0}>
                    <div className="left-card-inner left-card-inner--stacked">
                      <div className="text-content--side text-content--glass">
                        <div className="card-badge premium">Artisan Crafted</div>
                        <h2 
                          className="fashion-text variant2-title" 
                          dangerouslySetInnerHTML={{ __html: s.title }}
                        />
                        <p className="lead-copy premium">{s.lead}</p>
                        <div className="variant-2-ctas">
                          <button className="shop-button premium" aria-label="Shop collection">
                            Explore Collection
                          </button>
                          <button className="view-collection-btn secondary premium" aria-label="View craftsmanship">
                            Our Craftsmanship
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>

                  <article className="right-card right-card--frame" tabIndex={0}>
                    <div className="right-card-full">
                      <img
                        className="right-full-image"
                        src={s.rightImage}
                        alt="Artisan Collection"
                        loading="lazy"
                      />
                      <div className="frame-accent" aria-hidden />
                      <div className="image-shine" aria-hidden />
                    </div>
                  </article>
                </>
              )}

              {/* Variant 3 - Immersive Showcase Style */}
              {s.variant === "variant-3" && (
                <article className="immersive-showcase" tabIndex={0}>
                  <div className="immersive-content">
                    <div className="label-system">
                      <span className="advanced-label label-primary">Premium Collection</span>
                      <span className="advanced-label label-secondary">Limited Edition</span>
                      <span className="advanced-label label-tertiary">Handcrafted</span>
                    </div>

                    <h1 
                      className="immersive-title"
                      dangerouslySetInnerHTML={{ __html: s.title }}
                    />
                    
                    <p className="immersive-subtitle">{s.lead}</p>

                    <div className="feature-list">
                      {s.features.map((feature, index) => (
                        <div key={index} className="feature-item">
                          <div className="feature-icon">✓</div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="immersive-ctas">
                      <button className="cta-primary" aria-label="Discover collection">
                        Discover Collection
                      </button>
                      <button className="cta-secondary" aria-label="View gallery">
                        View Gallery
                      </button>
                    </div>
                  </div>

                  <div className="immersive-visual">
                    <div className="visual-container">
                      <div className="visual-main">
                        <img
                          src={s.leftImage}
                          alt="Main Spiritual Collection"
                          loading="lazy"
                        />
                        <div className="visual-overlay" aria-hidden="true" />
                      </div>
                      <div className="visual-grid">
                        <div className="grid-item">
                          <img
                            src={s.gridImage1}
                            alt="Spiritual Detail 1"
                            loading="lazy"
                          />
                        </div>
                        <div className="grid-item">
                          <img
                            src={s.gridImage2}
                            alt="Spiritual Detail 2"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="image-shine" aria-hidden />
                  </div>

                  <div className="immersive-decoration">
                    <div className="decoration-badge">Exclusive</div>
                  </div>

                  <div className="floating-elements variant-3" aria-hidden>
                    <div className="floating-element element-1">✨</div>
                    <div className="floating-element element-2">⭐</div>
                    <div className="floating-element element-3">💫</div>
                  </div>
                </article>
              )}
            </div>
          );
        })}
      </div>

      {/* Dot Controls */}
      <div
        className="carousel-controls"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          zIndex: 6,
          pointerEvents: "auto",
        }}
      >
        <div className="dots" role="tablist" aria-label="Select slide" style={{ display: "flex", gap: 8 }}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === index}
              role="tab"
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: i === index ? "var(--premium-gold)" : "rgba(255,255,255,0.28)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                boxShadow: i === index ? "0 6px 18px rgba(212, 175, 55, 0.4)" : "none",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Herosection;
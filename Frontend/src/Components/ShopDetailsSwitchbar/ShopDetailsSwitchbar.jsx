import React, { useRef, useState, useEffect } from "react";
import "./ShopDetailsSwitchbar.css";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";

const ShopDetailsSwitchbar = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardData = [
    {
      step: "STEP 1",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=1200",
      title: "Master Artisan Sculpting",
      desc: "Each sacred idol is carefully handcrafted by experienced artisans preserving divine details.",
      diff: "Hand carved craftsmanship vs machine molded production",
    },
    {
      step: "STEP 2",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
      title: "Premium Resin Foundation",
      desc: "Highest-grade polyresin ensures intricate details remain sharp and durable for decades.",
      diff: "Premium handcrafted foundation vs cheap injection molding",
    },
    {
      step: "STEP 3",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200",
      title: "Heavy Copper Preparation",
      desc: "3x thicker copper base creates unmatched durability and plating strength.",
      diff: "3x thicker copper base vs thin industry standard",
    },
    {
      step: "STEP 4",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
      title: "Pure 24K Gold Immersion",
      desc: "Authentic gold and silver immersion without artificial paint or fillers.",
      diff: "100% pure plating vs color coated alternatives",
    },
    {
      step: "STEP 5",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200",
      title: "Quality Inspection",
      desc: "Every idol undergoes rigorous inspection ensuring premium finish and perfection.",
      diff: "Multi-stage inspection vs random quality checks",
    },
  ];

  // Dynamically update pagination dots based on scroll position
  const handleScroll = () => {
    const container = sliderRef.current;
    if (!container) return;

    const children = container.children;
    if (children.length === 0) return;

    const containerLeft = container.getBoundingClientRect().left;
    let closestIndex = 0;
    let minDistance = Infinity;

    // Detect which card is closest to the left edge of view window
    for (let i = 0; i < children.length; i++) {
      const childLeft = children[i].getBoundingClientRect().left;
      const distance = Math.abs(childLeft - containerLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }
    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    const container = sliderRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true });
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToIndex = (index) => {
    const container = sliderRef.current;
    if (!container) return;
    
    const targetCard = container.children[index];
    if (targetCard) {
      container.scrollTo({
        left: targetCard.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  const nextSlide = () => {
    if (activeIndex < cardData.length - 1) {
      scrollToIndex(activeIndex + 1);
    } else {
      // Loop back to beginning smoothly if reached end
      scrollToIndex(0);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    } else {
      // Loop back to end smoothly if clicked back at start
      scrollToIndex(cardData.length - 1);
    }
  };

  return (
    <section className="sds-switchbar">
      <div className="sds-heading-top">
        <span className="sds-star">
          <FaStar />
        </span>
      </div>

      <h2 className="sds-main-title">The Svastika Difference</h2>

      <div className="sds-badge">100% PURE GOLD & SILVER PLATING</div>

      <p className="sds-subtitle">
        Experience the pinnacle of sacred craftsmanship. Unlike brands who use
        color dyes and artificial finishes, we use authentic precious metal
        plating for long-lasting divine radiance.
      </p>

      <div className="sds-slider-container">
        <div className="sds-slider-wrapper">
          <button
            className={`sds-nav sds-prev ${activeIndex === 0 ? "disabled" : ""}`}
            onClick={prevSlide}
            aria-label="Previous step"
          >
            <FaChevronLeft />
          </button>

          <div className="sds-slider" ref={sliderRef}>
            {cardData.map((item, index) => (
              <div className="sds-card" key={index}>
                <div className="sds-image-wrap">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <span className="sds-card-star">
                    <FaStar />
                  </span>
                </div>

                <div className="sds-card-body">
                  <span className="sds-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>

                  <div className="sds-difference">
                    <strong>Svastika Difference:</strong> {item.diff}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className={`sds-nav sds-next ${activeIndex === cardData.length - 1 ? "disabled" : ""}`}
            onClick={nextSlide}
            aria-label="Next step"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="sds-pagination">
          {cardData.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`sds-dot ${activeIndex === i ? "active" : ""}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopDetailsSwitchbar;
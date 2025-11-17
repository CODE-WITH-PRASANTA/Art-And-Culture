import React from "react";
import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.webp";
import img4 from "../../assets/img4.webp";
import img5 from "../../assets/img5.webp";
import "./GodCollectionSection.css";

const data = [
  {
    img: img1,
    title: "Brass Idols",
    subtitle: "Timeless Brass Creations for Sacred Home Corners",
  },
  {
    img: img2,
    title: "Divine Charan",
    subtitle: "The Perfect Footsteps of Blessings & Prosperity",
  },
  {
    img: img3,
    title: "Pocket Temple",
    subtitle: "Compact. Sacred. Always With You.",
  },
  {
    img: img4,
    title: "Gold & Silver Plated",
    subtitle: "Majestic Blend of Timeless Exquisite Craftsmanship",
  },
  {
    img: img5,
    title: "Premium Edits",
    subtitle: "Where Spiritual Energy Meets Artistic Elegance",
  },
];

const GodCollectionSection = () => {
  const handleKey = (e, idx) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      console.log("Open collection:", data[idx].title);
    }
  };

  return (
    <section className="gc-section">
      <header className="gc-header">
        <h2 className="gc-heading">Fresh in God Collection</h2>
        <p className="gc-lead">Handpicked pieces — new arrivals, crafted with devotion.</p>
      </header>

      <div className="gc-grid">
        {data.map((item, index) => (
          <article
            key={index}
            tabIndex={0}
            role="button"
            aria-pressed="false"
            onKeyDown={(e) => handleKey(e, index)}
            onClick={() => console.log("Click ->", item.title)}
            className={`gc-card ${index === 4 ? "gc-span-2" : ""}`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="gc-card-inner">
              <img src={item.img} alt={item.title} className="gc-image" />
              <div className="gc-overlay">
                <div className="gc-overlay-content">
                  <h3 className="gc-title">{item.title}</h3>
                  <p className="gc-subtitle">{item.subtitle}</p>
                  <span className="gc-cta">Explore</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default GodCollectionSection;

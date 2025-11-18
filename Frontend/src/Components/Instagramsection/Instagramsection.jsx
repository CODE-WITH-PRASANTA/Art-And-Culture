import React from "react";
import "./Instagramsection.css";

/* Replace these with your own images */
import a1 from "../../assets/k-1.webp";
import a2 from "../../assets/k-2.webp";
import a3 from "../../assets/k-3.webp";
import a4 from "../../assets/k-4.webp";
import a5 from "../../assets/k-5.webp";
import a6 from "../../assets/k-6.webp";

export default function InstagramGallery({ title = "Follow @Instagram", subtitle = "" }) {
  const images = [a1, a2, a3, a4, a5, a6];

  return (
    <section className="igux-root" aria-labelledby="igux-heading">
      <div className="igux-inner">
        <h2 id="igux-heading" className="igux-title">{title}</h2>
        {subtitle && <p className="igux-sub">{subtitle}</p>}

        <div className="igux-grid" role="list">
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              className="igux-card"
              role="listitem"
              aria-label={`Instagram image ${i + 1}`}
            >
              <img src={src} alt={`Instagram ${i + 1}`} className="igux-img" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

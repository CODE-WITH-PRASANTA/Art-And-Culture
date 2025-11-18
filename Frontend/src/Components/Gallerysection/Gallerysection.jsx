import React from "react";
import "./Gallerysection.css";

/* Replace these imports with your real image paths */
import img1 from "../../assets/k-1.webp"; // 1st -> tall-left
import img2 from "../../assets/k-2.webp"; // 2nd -> col2 top
import img3 from "../../assets/k-3.webp"; // 3rd -> col2 bottom
import img4 from "../../assets/k-4.webp"; // 4th -> tall-right
import img5 from "../../assets/k-5.webp"; // 5th -> col3 top
import img6 from "../../assets/k-6.webp"; // 6th -> col3 bottom

export default function Gallerysection() {
  const galleryItems = [
    { src: img1, area: "tall-left" },     // 1
    { src: img2, area: "col2-top" },      // 2
    { src: img3, area: "col2-bottom" },   // 3
    { src: img4, area: "tall-right" },    // 4
    { src: img5, area: "col3-top" },      // 5
    { src: img6, area: "col3-bottom" },   // 6
  ];

  return (
    <section className="galux-root" aria-labelledby="galux-heading">
      <div className="galux-inner">
        <div className="galux-header">
          <div className="galux-dots" aria-hidden="true">
            <span className="galux-dot galux-dot--yellow" />
            <span className="galux-dot galux-dot--purple" />
            <span className="galux-dot galux-dot--red" />
          </div>

          <h1 id="galux-heading" className="galux-title">See Our Kindergarten Photo Gallery!</h1>
          <p className="galux-sub">We are constantly expanding the range of services offered</p>
        </div>

        <div className="galux-grid" role="list">
          {galleryItems.map((item, idx) => (
            <article
              key={idx}
              className={`galux-card galux-area--${item.area}`}
              role="listitem"
              tabIndex={0}
              aria-label={`Gallery image ${idx + 1}`}
            >
              <div className="galux-media">
                <img src={item.src} alt={`Gallery ${idx + 1}`} className="galux-img" />
                <div className="galux-overlay" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

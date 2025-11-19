import React from "react";
import "./Teachersection.css";
import imgLarge from "../../assets/T-1.webp"; // left big image (Katie)
import imgJessica from "../../assets/T-2.webp";        // Jessica image
import imgNomina from "../../assets/T-3.webp";     // Nomina image

export default function QualifiedTeachers() {
  return (
    <section className="qt-root">
      <div className="qt-inner">
        <div className="qt-header">
          <div className="qt-dots" aria-hidden="true">
            <span className="dot dot-yellow" />
            <span className="dot dot-purple" />
            <span className="dot dot-red" />
          </div>

          <h1 className="qt-title">Qualified Teachers</h1>
          <p className="qt-sub">We are constantly expanding the range of services offered</p>
        </div>

        <div className="qt-row">
          {/* Big left profile */}
          <div className="qt-left-card">
            <div className="left-image-wrap">
              <img src={imgLarge} alt="Katie Willmore" />
            </div>

            <div className="left-info">
              <h2 className="left-name">Katie<br/>Willmore</h2>
              <p className="left-role">Principal And Manager</p>
              <div className="left-line" />
              <p className="left-phone">+44 (0) 207 689 7888</p>

              <div className="left-socials">
                <button aria-label="facebook" className="social f">f</button>
                <button aria-label="twitter" className="social t">t</button>
              </div>
            </div>

            {/* semicircle decorative background */}
            <div className="left-decor" aria-hidden="true"/>
          </div>

          {/* two smaller image cards to the right */}
          <div className="qt-right-stack">
            <ImageCard name="Jessica Levis" img={imgJessica} />
            <ImageCard name="Nomina Leione" img={imgNomina} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ImageCard({ name, img }) {
  return (
    <div className="card-wrap" role="button" tabIndex={0} aria-label={name}>
      <div className="card">
        <div className="card-media">
          <img src={img} alt={name} />
          <div className="card-overlay" />
        </div>

        <div className="card-name">{name}</div>
      </div>
    </div>
  );
}

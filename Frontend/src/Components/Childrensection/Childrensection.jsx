import React from "react";
import "./Childrensection.css";
import heroImage from "../../assets/child.webp"; // <- adjust path to your image

export default function HeroChildStart() {
  const items = [
    "Comprehensive reporting on individual achievement",
    "Educational field trips and school presentations",
    "Individual attention in a small-class setting",
    "Learning program with after-school care",
  ];

  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-inner">
        {/* LEFT */}
        <div className="hero-left">
          <h1 id="hero-heading" className="hero-title">
            Your Child's Best
            <br />
            Start In Life
          </h1>

          <p className="hero-sub">
            We are constantly expanding the range of services offered, taking
            children of all ages. Our goal is to carefully educate and develop
            a fun way. We strive to turn the learning process.
          </p>

          <ul className="hero-list" aria-label="benefits">
            {items.map((t, i) => (
              <li key={i} className="hero-list-item">
                <span className="icon-wrap" aria-hidden>
                  <span className="icon-circle">
                    <svg viewBox="0 0 20 20" className="icon-check" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 5.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        fill="#7A2E1B"
                      />
                    </svg>
                  </span>
                </span>
                <span className="hero-item-text">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="image-block" aria-hidden>
            <div className="yellow-circle" />

            {/* oval-mask now has jelly animation */}
            <div className="oval-mask jelly">
              <img src={heroImage} alt="Teacher and child doing crafts" draggable="false" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

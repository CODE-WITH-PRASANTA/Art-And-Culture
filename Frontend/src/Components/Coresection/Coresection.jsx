import React from "react";
import "./Coresection.css";

// replace these with your image paths
import img1 from "../../assets/k-1.webp";
import img2 from "../../assets/k-2.webp";
import img3 from "../../assets/k-3.webp";
import img4 from "../../assets/k-4.webp";

export default function CoreValues() {
  const cards = [
    {
      key: "play",
      title: "Learn And Play",
      desc: "Our goal is to carefully educate and develop children in a fun way.",
      img: img1,
      shape: "corev-shape-triangle",
    },
    {
      key: "teachers",
      title: "Great Teachers",
      desc: "Our goal is to carefully educate and develop children in a fun way.",
      img: img2,
      shape: "corev-shape-hex",
    },
    {
      key: "family",
      title: "Family Environment",
      desc: "Our goal is to carefully educate and develop children in a fun way.",
      img: img3,
      shape: "corev-shape-diamond",
    },
    {
      key: "programmes",
      title: "Excellent Programmes",
      desc: "Our goal is to carefully educate and develop children in a fun way.",
      img: img4,
      shape: "corev-shape-hex2",
    },
  ];

  return (
    <section className="corev-root" aria-labelledby="corev-heading">
      <div className="corev-inner">
        <div className="corev-top">
          <div className="corev-left">
            <div className="corev-small">WHY CHOOSE US</div>
            <h2 id="corev-heading" className="corev-title">Our Core Values</h2>
          </div>

          <div className="corev-right">
            <p className="corev-paragraph">
              We are constantly expanding the range of services offered, taking care of children of all ages.
              Our goal is to carefully educate and develop children in a fun way. We strive to turn the learning
              process into a bright.
            </p>
          </div>
        </div>

        <div className="corev-cards">
          {cards.map((c) => (
            <article key={c.key} className="corev-card" tabIndex={0}>
              <div className="corev-arch" aria-hidden="true" />
              <div className={`corev-shape ${c.shape}`} aria-hidden="true">
                <div className="corev-shape-frame" />
                <img src={c.img} alt={c.title} className="corev-img" />
              </div>

              <h3 className="corev-card-title">{c.title}</h3>
              <p className="corev-card-desc">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

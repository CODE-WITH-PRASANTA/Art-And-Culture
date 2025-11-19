import React, { useEffect, useRef } from "react";
import "./SubscribeHero.css";

/*
  Required image imports (ensure these paths are correct in your project)
*/
import bgEffect from "../../assets/bg-effect.webp";
import personImg from "../../assets/subscribe.webp";
import imgSupport from "../../assets/24-hours-support.webp";
import imgDelivery from "../../assets/fast-delivery.webp";
import imgGuarantee from "../../assets/guarantee-certificate.webp";
import imgReturns from "../../assets/returns.webp";

const features = [
  {
    id: 1,
    title: "Fast & Secure Delivery",
    subtitle: "Tell about your service.",
    img: imgDelivery,
  },
  {
    id: 2,
    title: "2 Days Return Policy",
    subtitle: "No question ask.",
    img: imgReturns,
  },
  {
    id: 3,
    title: "Money Back Guarantee",
    subtitle: "Within 5 business days",
    img: imgGuarantee,
  },
  {
    id: 4,
    title: "24 X 7 Service",
    subtitle: "Online service for customer",
    img: imgSupport,
  },
];

const PARTICLE_COUNT = 18; // medium intensity

const SubscribeHero = () => {
  const rootRef = useRef(null);

  // Scroll reveal: add .visible to elements with .sh-reveal when they intersect
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const nodes = root.querySelectorAll(".sh-reveal");
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  // Render medium-intensity particles
  const particles = Array.from({ length: PARTICLE_COUNT }).map((_, i) => i);

  return (
    <div className="sh-wrapper" ref={rootRef}>
      {/* background texture */}
      <div
        className="sh-bg"
        aria-hidden="true"
        style={{ backgroundImage: `url(${bgEffect})` }}
      />

      {/* moving particles */}
      <div className="sh-particles" aria-hidden="true">
        {particles.map((n) => (
          <span
            key={n}
            className="sh-particle"
            style={{
              // custom variable used by CSS to change timing/position
              ["--i"]: `${(n % 10) + 6}`, // vary speeds/delays
              ["--x"]: `${(Math.random() * 90 + 2).toFixed(2)}%`, // random x position
              ["--y"]: `${(Math.random() * 60 + 5).toFixed(2)}%`, // random start Y
              ["--s"]: `${(Math.random() * 0.9 + 0.6).toFixed(2)}`, // scale
            }}
          />
        ))}
      </div>

      <div className="sh-container">
        {/* HERO LEFT */}
        <div className="sh-hero sh-reveal">
          <div className="sh-promo">25% UP TO <span>OFF</span> ALL PRODUCTS</div>

          <h1 className="sh-title">
            Stay Home &amp; Get Your Daily<br />
            Needs From Our Shop
          </h1>

          <p className="sh-sub">
            Start Your Daily Shopping with <span className="sh-accent">Art and Culture</span>
          </p>

          <form
            className="sh-subscribe"
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email?.value;
              alert(email ? `Subscribed: ${email}` : "Please enter email");
            }}
            aria-label="Subscribe form"
          >
            <label htmlFor="email" className="visually-hidden">
              Email address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="sh-input"
              required
            />

            <button className="sh-btn" type="submit">
              Subscribe Now
            </button>
          </form>
        </div>

        {/* HERO RIGHT — image container (no svg, full image visible) */}
        <div className="sh-visual sh-reveal">
          <div className="sh-image-wrap">
            <img src={personImg} alt="Person shopping" className="sh-person-full" />
            {/* shimmer overlay is CSS-only — no extra markup required */}
          </div>
        </div>
      </div>

      {/* FEATURES ROW */}
      <div className="sh-features">
        {features.map((f) => (
          <div key={f.id} className="sh-feature-card sh-reveal">
            <div className="sh-feature-icon">
              <img src={f.img} alt="" />
            </div>
            <div className="sh-feature-text">
              <div className="sh-feature-title">{f.title}</div>
              <div className="sh-feature-sub">{f.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscribeHero;

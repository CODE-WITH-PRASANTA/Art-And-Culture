import React, { useEffect, useState } from "react";
import "./Testimonial.css";

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Devotee",
    text: "Absolutely divine experience! The craftsmanship and detailing are beyond expectations.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Verma",
    role: "Collector",
    text: "Premium quality and elegant design. Truly a masterpiece collection.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Das",
    role: "Spiritual Enthusiast",
    text: "Each product radiates positivity and devotion. Loved it!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Arjun Patel",
    role: "Buyer",
    text: "Fast delivery and amazing packaging. Feels very premium.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Sneha Roy",
    role: "Customer",
    text: "A perfect blend of tradition and modern luxury. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <h2 className="testimonial-title">Sacred Experiences</h2>
        <p className="testimonial-subtitle">
          Trusted by thousands of devotees
        </p>

        <div className="testimonial-slider">
          {testimonials.map((item, i) => {
            const position =
              i === index
                ? "active"
                : i === (index - 1 + testimonials.length) % testimonials.length
                ? "prev"
                : i === (index + 1) % testimonials.length
                ? "next"
                : "hidden";

            return (
              <div key={i} className={`testimonial-card ${position}`}>
                <div className="quote">❝</div>

                <p className="testimonial-text">{item.text}</p>

                <div className="testimonial-user">
                  <img src={item.image} alt="" />
                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* dots */}
        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={i === index ? "dot active" : "dot"}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
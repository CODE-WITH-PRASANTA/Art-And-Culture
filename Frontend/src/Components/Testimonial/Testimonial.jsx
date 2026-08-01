import React, { useEffect, useState } from "react";
import "./Testimonial.css";

// Static testimonial data (Frontend Mock Data)
const mockTestimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Verified Buyer",
    message:
      "The brass murti I ordered surpassed all my expectations. The craftsmanship and hand-finishing details are breathtaking!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Devotee",
    message:
      "Our home pooja room feels complete now. The quality of the brass diya and thali set is top notch.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Art Collector",
    message:
      "The Meenakari Jaipur artwork is living color in our home. Exceptional service and packaging!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 4,
    name: "Vikram Malhotra",
    role: "Regular Customer",
    message:
      "Handmade quality you can truly feel. Bought the Krishna murti and it has become the centerpiece of our home.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  // ================= AUTO SLIDER =================
  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % mockTestimonials.length);
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

        {/* ================= SLIDER ================= */}
        <div className="testimonial-slider">
          {mockTestimonials.map((item, i) => {
            const position =
              i === index
                ? "active"
                : i === (index - 1 + mockTestimonials.length) % mockTestimonials.length
                ? "prev"
                : i === (index + 1) % mockTestimonials.length
                ? "next"
                : "hidden";

            return (
              <div key={item.id} className={`testimonial-card ${position}`}>
                <div className="quote">❝</div>

                <p className="testimonial-text">{item.message}</p>

                <div className="testimonial-user">
                  <img src={item.image} alt={item.name} />

                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= DOTS ================= */}
        <div className="testimonial-dots">
          {mockTestimonials.map((_, i) => (
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
import React, { useEffect, useState } from "react";
import API, { BASE_URL } from "../../api/axios";
import "./Testimonial.css";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // ================= IMAGE FIX =================
  const getImageUrl = (path) => {
    if (!path) return "https://via.placeholder.com/100";

    if (path.startsWith("http")) return path;

    const cleanPath = path.replace(/^\/+/, "");
    return `${BASE_URL}/${cleanPath}`;
  };

  // ================= FETCH =================
  const fetchTestimonials = async () => {
    try {
      const res = await API.get("/testimonial");

      const data = Array.isArray(res.data)
        ? res.data
        : res.data.data || res.data.testimonials || [];

      setTestimonials(data);
    } catch (error) {
      console.log("Fetch Error:", error);
      setTestimonials([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // ================= AUTO SLIDER =================
  useEffect(() => {
    if (testimonials.length === 0) return;

    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);

    return () => clearInterval(slider);
  }, [testimonials]);

  // ================= LOADING =================
  if (loading) {
    return (
      <section className="testimonial-section">
        <div className="testimonial-container">
          <h2 className="testimonial-title">
            Loading Testimonials...
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">

        <h2 className="testimonial-title">
          Sacred Experiences
        </h2>

        <p className="testimonial-subtitle">
          Trusted by thousands of devotees
        </p>

        {/* ================= SLIDER ================= */}
        <div className="testimonial-slider">
          {testimonials.map((item, i) => {
            const position =
              i === index
                ? "active"
                : i ===
                  (index - 1 + testimonials.length) %
                    testimonials.length
                ? "prev"
                : i === (index + 1) % testimonials.length
                ? "next"
                : "hidden";

            return (
              <div
                key={item._id}
                className={`testimonial-card ${position}`}
              >
                <div className="quote">❝</div>

                {/* ✅ FIXED message field */}
                <p className="testimonial-text">
                  {item.message || "No message available"}
                </p>

                <div className="testimonial-user">
                  {/* ✅ FIXED image */}
                  <img
                    src={getImageUrl(item.image)}
                    alt={item.name}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/100?text=User";
                    }}
                  />

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
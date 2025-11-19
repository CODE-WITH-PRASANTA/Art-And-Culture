import React, { useEffect, useRef, useState } from "react";
import "./Parentsaysection.css";

/**
 * TestimonialCarousel
 * - infinite looping carousel for 4 testimonial cards
 * - shows 2 cards on desktop, 1 on mobile
 * - arrows loop (forward/back), autoplay enabled (pauses on hover/focus)
 */
export default function TestimonialCarousel({ autoplay = true, autoplayDelay = 6000 }) {
  const cards = [
    {
      quote:
        "From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage sometimes known, is dummy.",
      name: "Mari Jain",
      rating: 5,
    },
    {
      quote:
        "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it, and it actually says nor is",
      name: "Marko Polo",
      rating: 5,
    },
    {
      quote:
        "Our kids enjoy every day — the staff is professional and caring. The weekly updates and pictures make us feel connected and confident.",
      name: "Rita Gomez",
      rating: 5,
    },
    {
      quote:
        "Friendly teachers, great learning environment and lots of outdoor activities. My child improved quickly and made new friends.",
      name: "Samir Khan",
      rating: 5,
    },
  ];

  // We'll manage an index for the left-most visible card. We show 2 cards on desktop, 1 on mobile.
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const autoplayRef = useRef(null);

  const length = cards.length;

  const next = () => {
    setIndex((prev) => (prev + 1) % length);
  };
  const prev = () => {
    setIndex((prev) => (prev - 1 + length) % length);
  };

  // autoplay
  useEffect(() => {
    if (!autoplay || !isPlaying) return;
    autoplayRef.current = setInterval(() => {
      next();
    }, autoplayDelay);

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [autoplay, isPlaying, index, autoplayDelay]);

  // pause on hover/focus
  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(autoplay);
  const handleFocus = () => setIsPlaying(false);
  const handleBlur = () => setIsPlaying(autoplay);

  // Helper to generate visible items (two at a time on wide screens)
  // We'll render two cards side-by-side on wide devices; CSS will handle responsive change.
  const visibleIndices = (() => {
    const i1 = index % length;
    const i2 = (index + 1) % length;
    return [i1, i2];
  })();

  return (
    <section
      className="tsl-root"
      aria-label="What parents say"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tsl-inner">
        <div className="tsl-top">
          <div className="tsl-top-left">
            <div className="tsl-small">Service Reviews</div>
            <h2 className="tsl-heading">What Parents Say</h2>
          </div>

          <div className="tsl-top-right">
            <button
              className="tsl-arrow tsl-arrow--prev"
              aria-label="Previous testimonials"
              onClick={prev}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              ‹
            </button>
            <button
              className="tsl-arrow tsl-arrow--next"
              aria-label="Next testimonials"
              onClick={next}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              ›
            </button>
          </div>
        </div>

        <div className="tsl-track" role="list">
          {/* Render the two visible cards (desktop) — CSS will show 1 card per row on mobile */}
          {visibleIndices.map((i) => {
            const c = cards[i];
            return (
              <article
                key={i}
                className="tsl-card"
                role="listitem"
                tabIndex={0}
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                <div className="tsl-bubble">
                  <p className="tsl-quote">{c.quote}</p>

                  <div className="tsl-footer">
                    <div className="tsl-avatar" aria-hidden="true">
                      <span className="tsl-quote-mark">“</span>
                    </div>

                    <div className="tsl-meta">
                      <div className="tsl-name">{c.name}</div>
                      <div className="tsl-stars" aria-hidden="true">
                        {Array.from({ length: c.rating }).map((_, idx) => (
                          <span key={idx} className="tsl-star">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

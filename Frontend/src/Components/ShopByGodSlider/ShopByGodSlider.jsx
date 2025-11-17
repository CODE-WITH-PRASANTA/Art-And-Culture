import React, { useEffect, useRef, useState } from "react";
import "./ShopByGodSlider.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Jagannath from "../../assets/Lord-jagannath.webp";
import Ganesha from "../../assets/Lord-Ganesha.webp";
import Krishna from "../../assets/Lord-Krishna.webp";
import Hanuman from "../../assets/Lord-Hanuman.webp";
import Balaji from "../../assets/Lord-Balaji.webp";
import MaaDurga from "../../assets/Maa_Durga.webp";
import Vishnu from "../../assets/Lord-Vishnu.webp";
import Shiva from "../../assets/Lord-Shiva.webp";
import Saibaba from "../../assets/Saibaba.webp";
import Lakshmi from "../../assets/Maa_Lakshmi.webp";
import Buddha from "../../assets/Lord-Buddha.webp";

/*
  Fix summary:
  - Use duplicated slide list (LOOP_SLIDES) so CSS marquee can translate -50% with no blank gap.
  - Buttons pause the marquee, apply a manual offset that is always modulo one loop width (prevents "image end").
  - After manual action, resume the marquee smoothly.
  - Kept function name (ShopByGodSlider) and class names unchanged.
*/

const SLIDES = [
  { src: Ganesha, label: "GANESHA" },
  { src: Krishna, label: "KRISHNA" },
  { src: Hanuman, label: "HANUMAN" },
  { src: Balaji, label: "BALAJI" },
  { src: MaaDurga, label: "MAA DURGA" },
  { src: Vishnu, label: "VISHNU" },
  { src: Shiva, label: "SHIVA" },
  { src: Saibaba, label: "SAIBABA" },
  { src: Lakshmi, label: "LAKSHMI" },
  { src: Jagannath, label: "JAGANNATH" },
  { src: Buddha, label: "BUDDHA" },
];

const LOOP_SLIDES = [...SLIDES, ...SLIDES];

const ShopByGodSlider = () => {
  const trackRef = useRef(null);
  const wrapperRef = useRef(null);
  const stepRef = useRef(0); // width + gap per card
  const manualTimeout = useRef(null);

  const [isManual, setIsManual] = useState(false);
  const [manualOffset, setManualOffset] = useState(0); // px, always in [0, loopWidth)

  // measure step (card width + gap) and compute loopWidth
  const measureStep = () => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.querySelector(".shopbygodslider__card");
    if (!firstCard) return;
    const rect = firstCard.getBoundingClientRect();
    const style = window.getComputedStyle(track);
    const gapRaw = style.getPropertyValue("gap") || style.getPropertyValue("column-gap") || "20px";
    const gap = parseFloat(gapRaw) || 0;
    const step = Math.round(rect.width + gap);
    stepRef.current = step;

    // ensure manualOffset stays within one loop length after resize
    const loopWidth = step * SLIDES.length;
    setManualOffset((off) => {
      if (!Number.isFinite(off)) return 0;
      const normalized = ((off % loopWidth) + loopWidth) % loopWidth;
      return normalized;
    });
  };

  useEffect(() => {
    measureStep();
    const onResize = () => measureStep();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // helper: compute loop width
  const loopWidth = () => {
    const step = stepRef.current || 0;
    return step * SLIDES.length;
  };

  // apply manual offset on wrapper
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    // wrapper transform should be negative manualOffset to visually shift the marquee
    wrapper.style.transform = `translateX(${-manualOffset}px)`;
  }, [manualOffset]);

  // enable auto marquee (clear manual overlay)
  const enableAuto = () => {
    const track = trackRef.current;
    if (!track) return;
    setIsManual(false);
    // clear manual wrapper transition to let marquee continue smoothly
    const wrapper = wrapperRef.current;
    if (wrapper) wrapper.style.transition = "none";
  };

  // pause marquee on hover
  const onMouseEnter = () => {
    const t = trackRef.current;
    if (!t) return;
    t.classList.add("paused");
  };
  const onMouseLeave = () => {
    const t = trackRef.current;
    if (!t) return;
    if (!isManual) t.classList.remove("paused");
  };

  // manual prev: move to previous item
  const handlePrev = () => {
    const track = trackRef.current;
    if (!track) return;
    clearTimeout(manualTimeout.current);
    setIsManual(true);
    track.classList.add("paused");

    const step = stepRef.current || 220;
    const lw = loopWidth() || step * SLIDES.length;
    // subtract one step, then normalize into [0, lw)
    setManualOffset((off) => {
      const next = (off - step) % lw;
      return ((next % lw) + lw) % lw;
    });

    const wrapper = wrapperRef.current;
    if (wrapper) wrapper.style.transition = "transform 520ms cubic-bezier(.22,.9,.28,1)";

    manualTimeout.current = setTimeout(() => {
      // resume marquee
      track.classList.remove("paused");
      setTimeout(enableAuto, 80);
    }, 1400);
  };

  // manual next: move to next item
  const handleNext = () => {
    const track = trackRef.current;
    if (!track) return;
    clearTimeout(manualTimeout.current);
    setIsManual(true);
    track.classList.add("paused");

    const step = stepRef.current || 220;
    const lw = loopWidth() || step * SLIDES.length;
    setManualOffset((off) => {
      const next = (off + step) % lw;
      return ((next % lw) + lw) % lw;
    });

    const wrapper = wrapperRef.current;
    if (wrapper) wrapper.style.transition = "transform 520ms cubic-bezier(.22,.9,.28,1)";

    manualTimeout.current = setTimeout(() => {
      // resume marquee
      track.classList.remove("paused");
      setTimeout(enableAuto, 80);
    }, 1400);
  };

  // cleanup timer on unmount
  useEffect(() => {
    return () => clearTimeout(manualTimeout.current);
  }, []);

  return (
    <section className="shopbygodslider" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="shopbygodslider__inner">
        <div className="shopbygodslider__side">
          <h2 className="shopbygodslider__title">Shop by God</h2>

          <div className="shopbygodslider__nav" role="group" aria-label="carousel controls">
            <button className="shopbygodslider__navbtn" aria-label="Previous" onClick={handlePrev} type="button">
              <FiChevronLeft size={18} />
            </button>

            <button className="shopbygodslider__navbtn" aria-label="Next" onClick={handleNext} type="button">
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="shopbygodslider__viewport" aria-roledescription="carousel">
          {/* wrapper for manual overlay */}
          <div className="shopbygodslider__manualwrap" ref={wrapperRef}>
            <div className="shopbygodslider__track" ref={trackRef} role="list" aria-label="gods list">
              {LOOP_SLIDES.map((s, i) => (
                <div className="shopbygodslider__card" key={i} role="listitem" tabIndex={0} aria-label={s.label}>
                  <div className="shopbygodslider__imgwrap">
                    <img src={s.src} alt={s.label} className="shopbygodslider__img" draggable="false" />
                  </div>
                  <div className="shopbygodslider__label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByGodSlider;

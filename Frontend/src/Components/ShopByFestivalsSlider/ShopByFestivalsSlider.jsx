import React, { useEffect, useRef, useState } from "react";
import "./ShopByFestivalsSlider.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


// Import your festival images
import Diwali from "../../assets/Diwali.webp";
import Dussera from "../../assets/Dussera.webp";
import Navratri from "../../assets/Navratri.webp";
import  GaneshChaturthi from "../../assets/Ganesh_Chaturthi.webp";
import  JagannathRathyatra from "../../assets/Jagannath_Rath_Yatra.webp";
import Janmasthami from "../../assets/Janmasthami.webp";
import RakshaBandhan from "../../assets/Rakhi.webp";
import Mahashivratri from "../../assets/Mahashivratri_gifts.webp";
import Onam from "../../assets/Onam.webp";

const SLIDES = [
  { src: Diwali, label: "DIWALI" },
  { src: Dussera, label: "DUSSERA" },
  { src: Navratri, label: "NAVRATRI" },
  { src: GaneshChaturthi, label: "GANESH CHATURTHI" },
  { src: JagannathRathyatra, label: "JAGANNATH RATHYATRA " },
  { src: RakshaBandhan, label: "RAKSHA BANDHAN" },
  { src: Mahashivratri, label: "MAHASHIV RATRI" },
  { src: Janmasthami, label: "JANMASTAMI" },
  { src: Onam, label: "ONAM" },
];

const LOOP_SLIDES = [...SLIDES, ...SLIDES];

const ShopByFestivalsSlider = () => {
  const trackRef = useRef(null);
  const wrapperRef = useRef(null);
  const stepRef = useRef(0);
  const manualTimeout = useRef(null);

  const [isManual, setIsManual] = useState(false);
  const [manualOffset, setManualOffset] = useState(0);

  const measureStep = () => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.querySelector(".shopbyfestivalsslider__card");
    if (!firstCard) return;
    const rect = firstCard.getBoundingClientRect();
    const style = window.getComputedStyle(track);
    const gapRaw = style.getPropertyValue("gap") || style.getPropertyValue("column-gap") || "20px";
    const gap = parseFloat(gapRaw) || 0;
    const step = Math.round(rect.width + gap);
    stepRef.current = step;

    const loopWidth = step * SLIDES.length;
    setManualOffset((off) => ((off % loopWidth) + loopWidth) % loopWidth);
  };

  useEffect(() => {
    measureStep();
    const onResize = () => measureStep();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const loopWidth = () => {
    const step = stepRef.current || 0;
    return step * SLIDES.length;
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    wrapper.style.transform = `translateX(${-manualOffset}px)`;
  }, [manualOffset]);

  const enableAuto = () => {
    const track = trackRef.current;
    if (!track) return;
    setIsManual(false);
    const wrapper = wrapperRef.current;
    if (wrapper) wrapper.style.transition = "none";
  };

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

  const handlePrev = () => {
    clearTimeout(manualTimeout.current);
    setIsManual(true);
    trackRef.current?.classList.add("paused");

    const step = stepRef.current || 220;
    const lw = loopWidth() || step * SLIDES.length;
    setManualOffset((off) => ((off - step) % lw + lw) % lw);

    const wrapper = wrapperRef.current;
    if (wrapper) wrapper.style.transition = "transform 520ms cubic-bezier(.22,.9,.28,1)";

    manualTimeout.current = setTimeout(() => {
      trackRef.current?.classList.remove("paused");
      setTimeout(enableAuto, 80);
    }, 1400);
  };

  const handleNext = () => {
    clearTimeout(manualTimeout.current);
    setIsManual(true);
    trackRef.current?.classList.add("paused");

    const step = stepRef.current || 220;
    const lw = loopWidth() || step * SLIDES.length;
    setManualOffset((off) => ((off + step) % lw + lw) % lw);

    const wrapper = wrapperRef.current;
    if (wrapper) wrapper.style.transition = "transform 520ms cubic-bezier(.22,.9,.28,1)";

    manualTimeout.current = setTimeout(() => {
      trackRef.current?.classList.remove("paused");
      setTimeout(enableAuto, 80);
    }, 1400);
  };

  useEffect(() => {
    return () => clearTimeout(manualTimeout.current);
  }, []);

  return (
    <section className="shopbyfestivalsslider" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="shopbyfestivalsslider__inner">
        <div className="shopbyfestivalsslider__side">
          <h2 className="shopbyfestivalsslider__title">Shop by Festivals</h2>

          <div className="shopbyfestivalsslider__nav" role="group" aria-label="carousel controls">
            <button className="shopbyfestivalsslider__navbtn" aria-label="Previous" onClick={handlePrev} type="button">
              <FiChevronLeft size={18} />
            </button>
            <button className="shopbyfestivalsslider__navbtn" aria-label="Next" onClick={handleNext} type="button">
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="shopbyfestivalsslider__viewport" aria-roledescription="carousel">
          <div className="shopbyfestivalsslider__manualwrap" ref={wrapperRef}>
            <div className="shopbyfestivalsslider__track" ref={trackRef} role="list" aria-label="festivals list">
              {LOOP_SLIDES.map((s, i) => (
                <div className="shopbyfestivalsslider__card" key={i} role="listitem" tabIndex={0} aria-label={s.label}>
                  <div className="shopbyfestivalsslider__imgwrap">
                    <img src={s.src} alt={s.label} className="shopbyfestivalsslider__img" draggable="false" />
                  </div>
                  <div className="shopbyfestivalsslider__label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByFestivalsSlider;

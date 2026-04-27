import React, { useEffect, useState } from "react";
import "./RegionMapSection.css";
import {
  FaChevronDown,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const RegionMapSection = () => {
  const [tab, setTab] = useState("Weekly");
  const [menuOpen, setMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const data = {
    Recent: [
      { city: "Houston", value: 280 },
      { city: "Phoenix", value: 165 },
      { city: "Seattle", value: 250 },
      { city: "Atlanta", value: 190 },
      { city: "Denver", value: 120 },
      { city: "Boston", value: 220 },
    ],

    Weekly: [
      { city: "Houston", value: 312 },
      { city: "Phoenix", value: 189 },
      { city: "Seattle", value: 276 },
      { city: "Atlanta", value: 205 },
      { city: "Denver", value: 128 },
      { city: "Boston", value: 241 },
    ],

    Monthly: [
      { city: "Houston", value: 420 },
      { city: "Phoenix", value: 310 },
      { city: "Seattle", value: 390 },
      { city: "Atlanta", value: 280 },
      { city: "Denver", value: 210 },
      { city: "Boston", value: 330 },
    ],

    Yearly: [
      { city: "Houston", value: 890 },
      { city: "Phoenix", value: 620 },
      { city: "Seattle", value: 760 },
      { city: "Atlanta", value: 540 },
      { city: "Denver", value: 420 },
      { city: "Boston", value: 610 },
    ],
  };

  const currentData = data[tab];
  const maxValue = Math.max(...currentData.map((item) => item.value));

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.1, 1.8));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.1, 1));
  };

  return (
    <div className="region-map-wrapper">

      {/* LEFT SIDE */}
      <div className="region-card left-region-card">
        <div className="region-header">
          <h3>Customers by Region</h3>

          <div className="dropdown-wrap">
            <button
              className="region-btn"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {tab} <FaChevronDown />
            </button>

            {menuOpen && (
              <div className="region-menu">
                {["Recent", "Weekly", "Monthly", "Yearly"].map(
                  (item) => (
                    <p
                      key={item}
                      onClick={() => {
                        setTab(item);
                        setMenuOpen(false);
                      }}
                    >
                      {item}
                    </p>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        <div className="region-list">
          {currentData.map((item, index) => (
            <div className="region-row" key={index}>
              <div className="city-title">
                {item.city} <span>({item.value})</span>
              </div>

              <div className="progress-track">
                <div
                  className={`progress-fill ${
                    animate ? "show-progress" : ""
                  }`}
                  style={{
                    width: animate
                      ? `${(item.value / maxValue) * 100}%`
                      : "0%",
                    transitionDelay: `${index * 0.12}s`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="region-card map-card">
        <div className="zoom-tools">
          <button onClick={handleZoomIn}>
            <FaPlus />
          </button>

          <button onClick={handleZoomOut}>
            <FaMinus />
          </button>
        </div>

        <div className="map-view">
          <div
            className="map-inner"
            style={{
              transform: `scale(${zoom})`,
            }}
          >
            <iframe
              title="map"
              src="https://www.openstreetmap.org/export/embed.html"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionMapSection;
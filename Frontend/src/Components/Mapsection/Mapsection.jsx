import React from "react";
import "./Mapsection.css";

import bgPattern from "../../assets/Artall background.webp";

export default function MapSection({
  title = "How To Find Us",
  mapEmbedUrl = "https://www.google.com/maps?q=92+Mansi+Vihar+Sanjay+Nagar+Sector+23+Ghaziabad+201002&output=embed"
}) {

  return (
    <section 
      className="mapux-root" 
      aria-labelledby="mapux-heading"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      {/* Pattern Overlay Tint */}
      <div className="mapux-overlay-tint"></div>

      <div className="mapux-inner">
        <h2 id="mapux-heading" className="mapux-title">
          {title}
        </h2>

        <div className="mapux-address-card">
          <p className="mapux-address">
            📍 92, Mansi Vihar, Sanjay Nagar, Sector 23, Ghaziabad 201002
          </p>
          <p className="mapux-phones">
            📞 +91-7302577395 / +91 80765 52275
          </p>
        </div>

        <div className="mapux-framewrap">
          <iframe
            className="mapux-iframe"
            src={mapEmbedUrl}
            title="Our location in Ghaziabad on Google Maps"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

    </section>
  );
}
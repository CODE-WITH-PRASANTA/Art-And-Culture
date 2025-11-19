import React from "react";
import "./MapSection.css";

export default function MapSection({
  title = "How To Find Us",
  mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.414463016731!2d85.84230217505776!3d20.296518712657827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909cf9ac3bf91%3A0x8e4097907e9f5d05!2sUnit%20No.%2032%2C%20721%2C%20Cuttack%20-%20Puri%20Rd%2C%20Rasulgarh%20Industrial%20Estate%2C%20Industrial%20Area%20Estate%2C%20Rasulgarh%2C%20Bhubaneswar%2C%20Odisha%20751010!5e0!3m2!1sen!2sin!4v1737540000000!5m2!1sen!2sin"
}) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="mapux-root" aria-labelledby="mapux-heading">
      <div className="mapux-inner">
        <h2 id="mapux-heading" className="mapux-title">{title}</h2>
        

        <div className="mapux-framewrap">
          <iframe
            className="mapux-iframe"
            src={mapEmbedUrl}
            title="Our location on Google Maps"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

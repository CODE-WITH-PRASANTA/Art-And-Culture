import React from "react";
import giftIcon from "../../assets/gift.webp";
import returnIcon from "../../assets/return.webp";
import supportIcon from "../../assets/support.webp";
import fastIcon from "../../assets/fast.webp";

import "./PromiseSection.css";

const promises = [
  {
    icon: giftIcon,
    title: "Gift-Ready Elegance",
    desc: "Our premium packaging adds a touch of grace, perfect for gifting your loved ones.",
  },
  {
    icon: returnIcon,
    title: "Hassle-Free Returns",
    desc: "Enjoy the ease of 7-day returns, ensuring your complete satisfaction.",
  },
  {
    icon: supportIcon,
    title: "Support That Cares",
    desc: "Reach out to us anytime, 24/6, for dedicated assistance.",
  },
  {
    icon: fastIcon,
    title: "Fast, Pan-India Delivery",
    desc: "Lightning-fast delivery across India in just 1–3 days.",
  },
];

const PromiseSection = () => {
  return (
    <section className="shopbypurpose-promise-root">
      <h2 className="shopbypurpose-promise-heading">Svastika’s Promise</h2>

      <div className="shopbypurpose-promise-grid">
        {promises.map((p) => (
          <div className="shopbypurpose-promise-item" key={p.title}>
            <img src={p.icon} alt={p.title} className="shopbypurpose-promise-icon" />
            <h3 className="shopbypurpose-promise-title">{p.title}</h3>
            <p className="shopbypurpose-promise-desc">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromiseSection;

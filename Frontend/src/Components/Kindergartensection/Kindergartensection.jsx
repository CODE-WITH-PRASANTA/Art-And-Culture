import React from "react";
import "./Kindergartensection.css";

import img1 from "../../assets/k-1.webp";
import img2 from "../../assets/k-2.webp";
import img3 from "../../assets/k-3.webp";
import img4 from "../../assets/k-4.webp";

export default function TimelineHistory() {
  const items = [
    {
      year: "1994",
      title: "Opened Its Doors",
      desc:
        "We are constantly expanding the range of services offered, taking children of all ages. Our goal is to carefully educat.",
      img: img1,
    },
    {
      year: "2001",
      title: "High School Physics",
      desc:
        "We are constantly expanding the range of services offered, taking children of all ages. Our goal is to carefully educat.",
      img: img2,
    },
    {
      year: "2008",
      title: "Get Ready For 6th Grade",
      desc:
        "We are constantly expanding the range of services offered, taking children of all ages. Our goal is to carefully educat.",
      img: img3,
    },
    {
      year: "2014",
      title: "Internet Safety",
      desc:
        "We are constantly expanding the range of services offered, taking children of all ages. Our goal is to carefully educat.",
      img: img4,
    },
  ];

  return (
    <section className="th-root" aria-labelledby="th-heading">
      <div className="th-inner">
        <div className="th-top">
          <div className="th-small">Kindergarten Schedule</div>
          <h2 id="th-heading" className="th-title">Kindergarten History</h2>
        </div>

        <div className="th-timeline-wrapper">
          <div className="th-timeline">
            {items.map((it, idx) => (
              <div key={idx} className="th-col">
                <div className="th-year">{it.year}</div>
                <h3 className="th-col-title">{it.title}</h3>
                <p className="th-desc">{it.desc}</p>

                <div
                  className="th-image-wrap"
                  tabIndex={0} /* make focusable for keyboard users */
                  aria-label={`${it.title} image`}
                >
                  <img src={it.img} alt={it.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

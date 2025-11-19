import React from "react";
import "./Clubsection.css";

// Club images
import centerImg from "../../assets/k-5.webp";
import t1 from "../../assets/k-1.webp";
import t2 from "../../assets/k-2.webp";
import t3 from "../../assets/k-3.webp";
import t4 from "../../assets/k-4.webp";

/* ===========================
   AVAILABLE CLUBS SECTION
=========================== */

export default function AvailableClubs() {
  const clubsLeft = [
    {
      title: "Early Club",
      bullets: ["Help parents get to work on time", "Near the station", "Children settled and ready to work"],
      img: t1,
    },
    {
      title: "Lunch Club",
      bullets: ["Help parents get to work on time", "Near the station", "Children settled and ready to work"],
      img: t2,
    },
  ];

  const clubsRight = [
    {
      title: "Afternoon Club",
      bullets: ["Help parents get to work on time", "Near the station", "Children settled and ready to work"],
      img: t3,
    },
    {
      title: "Music Club",
      bullets: ["Help parents get to work on time", "Near the station", "Children settled and ready to work"],
      img: t4,
    },
  ];

  return (
    <>
      {/* AVAILABLE CLUBS */}
      <section className="ac-root" aria-labelledby="ac-heading">
        <div className="ac-inner">
          <header className="ac-header">
            <div className="ac-dots">
              <span className="dot yellow" />
              <span className="dot purple" />
              <span className="dot red" />
            </div>

            <h2 id="ac-heading" className="ac-title">Available Clubs</h2>
            <p className="ac-sub">We are constantly expanding the range of services offered</p>
          </header>

          <div className="ac-grid">
            <div className="ac-column ac-left">
              {clubsLeft.map((c, i) => (
                <ClubItem key={i} title={c.title} bullets={c.bullets} img={c.img} />
              ))}
            </div>

            <div className="ac-center">
              <div className="ac-blob" />
              <div className="ac-center-img">
                <img src={centerImg} alt="child painting" />
              </div>
              <div className="ac-deco" />
            </div>

            <div className="ac-column ac-right">
              {clubsRight.map((c, i) => (
                <ClubItem key={i} title={c.title} bullets={c.bullets} img={c.img} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INSERTED STATS SECTION BELOW */}
      <StatsSection />
    </>
  );
}

/* Club Item Component */
function ClubItem({ title, bullets, img }) {
  return (
    <div className="club-item">
      <div className="thumb-wrap" tabIndex={0}>
        <div className="thumb-rotator" />
        <img className="thumb" src={img} alt={title} />
      </div>

      <div className="club-content">
        <h3 className="club-title">{title}</h3>
        <ul className="club-bullets">
          {bullets.map((b, i) => (
            <li key={i}>
              <span className="bullet-dot" /> {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ===========================
   STATS SECTION (Added Below)
=========================== */

function StatsSection() {
  const stats = [
    {
      number: "38",
      label: "Student Classrooms",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round">
          <path d="M3 3h18v4H3z" />
          <path d="M6 7v13" />
          <path d="M18 7v13" />
          <path d="M3 14h18" />
        </svg>
      )
    },
    {
      number: "14",
      label: "Kids Classes",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round">
          <path d="M4 4h16v12H4z" />
          <circle cx="8" cy="10" r="2" />
          <circle cx="16" cy="10" r="2" />
        </svg>
      )
    },
    {
      number: "75",
      label: "Outdoor Activities",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round">
          <path d="M3 12l9-9 9 9" />
          <path d="M4 12v8h6v-6h4v6h6v-8" />
          <circle cx="18" cy="6" r="1.5" />
        </svg>
      )
    },
    {
      number: "23",
      label: "Loving Teachers",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round">
          <circle cx="12" cy="6" r="3" />
          <path d="M4 20v-2a4 4 0 014-4h8a4 4 0 014 4v2" />
        </svg>
      )
    }
  ];

  return (
    <section className="stats-root">
      <div className="stats-inner">
        {stats.map((s, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-icon">{s.icon}</div>
            <div className="stat-number">{s.number}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

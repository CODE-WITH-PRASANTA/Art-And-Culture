import React from "react";
import "./Studentsection.css";
import heroImage from "../../assets/student.webp"; // <- adjust path if needed

export default function HeroPage() {
  const sessions = [
    { label: "Morning:", time: "9am – 12noon" },
    { label: "Lunch:", time: "12noon – 1pm" },
    { label: "Afternoon:", time: "1pm – 3.30pm" },
  ];

  return (
    <main className="page-wrap" role="main">
      <section className="page-inner">
        {/* LEFT: big oval image with yellow accent */}
        <div className="left-col">
          <div className="image-block">
            <div className="yellow-circle" aria-hidden="true" />
            <div className="oval-mask jelly" aria-hidden="true">
              <img src={heroImage} alt="Children playing" draggable="false" />
            </div>

            
              </div>
        </div>

        {/* RIGHT: headline, paragraph and sessions */}
        <div className="right-col">
          <h1 className="big-heading">
            For Every Student,
            <br />
            Every Classroom
            <br />
            Real Results.
          </h1>

          <p className="lead">
            We are constantly expanding the range of services offered, taking children of all ages.
            Our goal is to carefully educate and develop a fun way. We strive to turn the learning process.
          </p>

          <div className="sessions">
            <h4 className="sessions-title">SESSIONS: MONDAY – FRIDAY</h4>

            <div className="session-grid">
              {sessions.map((s, idx) => (
                <div className="session" key={idx}>
                  <div className="session-label">{s.label}</div>
                  <div className="session-time">{s.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

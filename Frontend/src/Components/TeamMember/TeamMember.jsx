import React, { useEffect, useState, useRef } from "react";
import "./TeamMember.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

// =================== STATIC MOCK DATA ===================
const teamMembers = [
  {
    id: 1,
    name: "Eleanor Pena",
    designation: "Lead Art Curator",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 2,
    name: "Cameron Williamson",
    designation: "Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 3,
    name: "Esther Howard",
    designation: "Visual Designer",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600",
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 4,
    name: "Robert Fox",
    designation: "Senior Illustrator",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 5,
    name: "Jenny Wilson",
    designation: "Gallery Manager",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=600",
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    twitter: "#",
  },
];

const TeamMember = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  /* ================= AUTO SLIDER ================= */
  useEffect(() => {
    if (teamMembers.length === 0) return;

    intervalRef.current = setInterval(() => {
      setCurrent((prev) =>
        prev >= teamMembers.length - 3 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  /* ================= DOT CLICK ================= */
  const goToSlide = (index) => {
    setCurrent(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <section className="team-section">
      <h2 className="team-title">Our Team</h2>

      {/* SLIDER */}
      <div className="team-slider">
        <div
          className="team-track"
          style={{
            transform: `translateX(-${current * (100 / 3)}%)`,
          }}
        >
          {teamMembers.map((member) => (
            <div className="team-slide" key={member.id}>
              <div className="team-card">

                {/* IMAGE */}
                <div className="team-img-box">
                  <img
                    src={member.image}
                    alt={member.name}
                  />
                </div>

                {/* INFO */}
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p>{member.designation}</p>
                </div>

                {/* SOCIAL */}
                <div className="team-social">
                  {member.facebook && (
                    <a href={member.facebook} target="_blank" rel="noreferrer">
                      <FaFacebookF />
                    </a>
                  )}
                  {member.instagram && (
                    <a href={member.instagram} target="_blank" rel="noreferrer">
                      <FaInstagram />
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noreferrer">
                      <FaLinkedinIn />
                    </a>
                  )}
                  {member.twitter && (
                    <a href={member.twitter} target="_blank" rel="noreferrer">
                      <FaTwitter />
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="team-dots">
        {teamMembers.slice(0, Math.max(1, teamMembers.length - 2)).map((_, index) => (
          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamMember;
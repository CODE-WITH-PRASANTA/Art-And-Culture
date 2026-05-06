import React, { useEffect, useState, useRef } from "react";
import "./TeamMember.css";

import API, { IMG_URL } from "../../api/axios";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const TeamMember = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  /* ================= FETCH ================= */
  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const res = await API.get("/team");
      setTeamMembers(res.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  /* ================= AUTO SLIDER ================= */
  useEffect(() => {
    if (teamMembers.length === 0) return;

    intervalRef.current = setInterval(() => {
      setCurrent((prev) =>
        prev >= teamMembers.length - 3 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [teamMembers]);

  /* ================= DOT CLICK ================= */
  const goToSlide = (index) => {
    setCurrent(index);
    clearInterval(intervalRef.current);
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
            <div className="team-slide" key={member._id}>
              <div className="team-card">

                {/* IMAGE */}
                <div className="team-img-box">
                  <img
                    src={
                      member.image
                        ? `${IMG_URL}/uploads/${member.image}`
                        : "https://via.placeholder.com/300"
                    }
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
                  {member.facebook && <a href={member.facebook}><FaFacebookF /></a>}
                  {member.instagram && <a href={member.instagram}><FaInstagram /></a>}
                  {member.linkedin && <a href={member.linkedin}><FaLinkedinIn /></a>}
                  {member.twitter && <a href={member.twitter}><FaTwitter /></a>}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="team-dots">
        {teamMembers.slice(0, teamMembers.length - 2).map((_, index) => (
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
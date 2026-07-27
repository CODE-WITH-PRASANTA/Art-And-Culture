import React from 'react';
import './HomeCard.css';

// React Icons matching the visual style in the reference image
import { LiaHandPaper } from 'react-icons/lia';
import { FiTruck } from 'react-icons/fi';
import { PiLeafLight } from 'react-icons/pi';
import { GoArrowSwitch } from 'react-icons/go';

// Import your background image pattern from your assets folder
import bgPattern from '../../assets/Screenshot 2026-07-27 110029.png'; // Adjust your relative path here

const HomeCard = () => {
  // SEO-friendly feature badges data
  const features = [
    {
      id: 1,
      icon: <LiaHandPaper className="HomeCard-icon" />,
      title: 'HAND CRAFTED',
    },
    {
      id: 2,
      icon: <FiTruck className="HomeCard-icon" />,
      title: 'SHIPS IN 24 HRS',
    },
    {
      id: 3,
      icon: <PiLeafLight className="HomeCard-icon" />,
      title: '2M+ COMMUNITY',
    },
    {
      id: 4,
      icon: <GoArrowSwitch className="HomeCard-icon" />,
      title: '7-DAY EASY RETURN',
    },
  ];

  return (
    <section 
      className="HomeCard"
      style={{ backgroundImage: `url(${bgPattern})` }}
      aria-label="Handmade Heritage Art and Idols Introduction"
    >
      <div className="HomeCard-container">
        
        {/* Elegant Flourish Header Accent */}
        <div className="HomeCard-flourish">
          <svg 
            width="140" 
            height="20" 
            viewBox="0 0 140 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M10 12C45 12 55 17 70 17C85 17 95 12 130 12" 
              stroke="#D4B06A" 
              strokeWidth="1.2" 
              strokeLinecap="round"
            />
            <circle cx="70" cy="11" r="2.5" stroke="#D4B06A" strokeWidth="1" fill="#FAF7F2" />
            <path 
              d="M122 6C126 4 130 4 134 7" 
              stroke="#D4B06A" 
              strokeWidth="1.2" 
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Small SEO Kicker */}
        <span className="HomeCard-tagline">
          HANDMADE WITH INTENTION
        </span>

        {/* Primary SEO Heading */}
        <h2 className="HomeCard-title">
          Made to be felt, <span>not just seen.</span>
        </h2>

        {/* Subtitle / Descriptive Copy */}
        <p className="HomeCard-description">
          Idols, diyas, urlis, everyday gifts — each shaped by hand, with real care. 
          Not made to promise luck. Made to bring a little calm home. 
          Because what surrounds us shapes how we feel.
        </p>

        {/* Value Proposition Badges / Cards Layout */}
        <div className="HomeCard-featuresGrid">
          {features.map((item) => (
            <div key={item.id} className="HomeCard-featureCard">
              <div className="HomeCard-iconCircle">
                {item.icon}
              </div>
              <h3 className="HomeCard-featureTitle">{item.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeCard;
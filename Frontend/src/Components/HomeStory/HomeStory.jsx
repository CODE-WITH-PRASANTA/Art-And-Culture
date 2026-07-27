import React from 'react';
import './HomeStory.css';

// React Icons
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { BsDiamondFill } from 'react-icons/bs';

// Background Pattern Import
import bgPattern from '../../assets/Screenshot 2026-07-27 110029.png'; // Adjust path if needed

// 3 Image Collage Imports
import storyImg1 from '../../assets/Meenakari_Craftmanship_of_Svastika.webp'; // Main tall image (left)
import storyImg2 from '../../assets/Artisans_of_Svastika_crafting_Premium_Edits_Photoshoot_1 (1).webp'; // Top right image
import storyImg3 from '../../assets/Brass_Manufacturing_1.webp';   // Bottom right image

const HomeStory = () => {
  const stats = [
    {
      id: 1,
      value: '2021',
      label: 'THE YEAR WE BEGAN',
    },
    {
      id: 2,
      value: '100%',
      label: 'MADE BY HAND',
    },
    {
      id: 3,
      value: '2M+',
      label: 'HOMES SERVED',
    },
  ];

  return (
    <section
      className="HomeStory"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <div className="HomeStory-container">
        
        {/* Left Content Side */}
        <div className="HomeStory-content">
          
          {/* Top Tagline */}
          <div className="HomeStory-tagline">
            <BsDiamondFill className="HomeStory-tagIcon" />
            <span>OUR STORY</span>
          </div>

          {/* Main Title */}
          <h2 className="HomeStory-title">
            Two friends. <br />
            <span>One honest idea.</span>
          </h2>

          {/* Italic Subheading / Quote */}
          <p className="HomeStory-quote">
            Nothing sacred was ever rushed.
          </p>

          {/* Story Body Text */}
          <div className="HomeStory-textGroup">
            <p>
              It began in 2021 — two friends, one small workshop, one belief: what
              we keep close should be shaped by hand, slowly, with intention.
            </p>
            <p>
              That belief now lives in our artisans' hands — families who have
              worked brass and colour for years, and still finish every piece
              themselves. Their patience is what reaches your home.
            </p>
          </div>

          {/* Read Our Story Link */}
          <a href="#our-story" className="HomeStory-readBtn">
            <span>READ OUR STORY</span>
            <HiOutlineArrowLongRight className="HomeStory-btnArrow" />
          </a>

          {/* Stats Metrics Counter Bar */}
          <div className="HomeStory-statsGrid">
            {stats.map((stat) => (
              <div key={stat.id} className="HomeStory-statCard">
                <span className="HomeStory-statValue">{stat.value}</span>
                <span className="HomeStory-statLabel">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Gallery Collage Side */}
        <div className="HomeStory-gallery">
          
          {/* Main Tall Image (Left of Collage) */}
          <div className="HomeStory-imageWrapper tall">
            <img
              src={storyImg1}
              alt="Artisan hand painting elephant idol"
              className="HomeStory-image"
            />
          </div>

          {/* Right Column Stack (Top & Bottom Images) */}
          <div className="HomeStory-rightStack">
            <div className="HomeStory-imageWrapper top">
              <img
                src={storyImg2}
                alt="Crafting brass Krishna idol"
                className="HomeStory-image"
              />
            </div>
            <div className="HomeStory-imageWrapper bottom">
              <img
                src={storyImg3}
                alt="Finishing blue Lord Shiva idol"
                className="HomeStory-image"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeStory;
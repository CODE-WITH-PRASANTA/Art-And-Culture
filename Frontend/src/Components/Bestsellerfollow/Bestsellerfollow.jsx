import React, { useRef } from 'react';
import './Bestsellerfollow.css';

// React Icons
import { FaInstagram } from 'react-icons/fa';
import { BsChevronLeft, BsChevronRight, BsDiamondFill } from 'react-icons/bs';

// Background Pattern Import
import bgPattern from '../../assets/whitebg.png'; // Adjust path if needed

// 6 Gallery Image Imports
import instaImg1 from '../../assets/pic1.jpg';
import instaImg2 from '../../assets/pic2.jpg';
import instaImg3 from '../../assets/pic3.jpg';
import instaImg4 from '../../assets/pic4.jpg';
import instaImg5 from '../../assets/pic5.jpg';
import instaImg6 from '../../assets/pic6.jpg';

const Bestsellerfollow = () => {
  const scrollRef = useRef(null);

  // Instagram Profile Link
  const instagramUrl = 'https://www.instagram.com/svastika.in';

  // 6 Instagram Posts
  const posts = [
    { id: 1, image: instaImg1, alt: 'Svastika branding post' },
    { id: 2, image: instaImg2, alt: 'Artisans shoot behind the scenes' },
    { id: 3, image: instaImg3, alt: 'Puri Jagannath temple visit' },
    { id: 4, image: instaImg4, alt: 'Spiritual story telling' },
    { id: 5, image: instaImg5, alt: 'Temple background shoot' },
    { id: 6, image: instaImg6, alt: 'Handmade calligraphy art' },
  ];

  // Horizontal Scroll Handlers
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      className="Bestsellerfollow"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <div className="Bestsellerfollow-container">
        
        {/* Header Section */}
        <div className="Bestsellerfollow-header">
          <div className="Bestsellerfollow-tagline">
            <BsDiamondFill className="Bestsellerfollow-tagIcon" />
            <span>@SVASTIKA.IN</span>
          </div>

          <h2 className="Bestsellerfollow-title">
            Follow along, <span>slowly.</span>
          </h2>
        </div>

        {/* Carousel Slider with Side Arrows */}
        <div className="Bestsellerfollow-carouselWrapper">
          
          {/* Left Arrow Button */}
          <button
            className="Bestsellerfollow-navBtn left"
            onClick={() => handleScroll('left')}
            aria-label="Previous Slide"
          >
            <BsChevronLeft />
          </button>

          {/* Cards Track Container */}
          <div className="Bestsellerfollow-track" ref={scrollRef}>
            {posts.map((post) => (
              <a
                key={post.id}
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="Bestsellerfollow-card"
              >
                <img
                  src={post.image}
                  alt={post.alt}
                  className="Bestsellerfollow-cardImg"
                />
                
                {/* Instagram Overlay on Hover */}
                <div className="Bestsellerfollow-cardOverlay">
                  <FaInstagram className="Bestsellerfollow-instaHoverIcon" />
                </div>
              </a>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            className="Bestsellerfollow-navBtn right"
            onClick={() => handleScroll('right')}
            aria-label="Next Slide"
          >
            <BsChevronRight />
          </button>

        </div>

        {/* Bottom Call-To-Action Button */}
        <div className="Bestsellerfollow-action">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="Bestsellerfollow-followBtn"
          >
            <FaInstagram className="Bestsellerfollow-btnInstaIcon" />
            <span>Follow @svastika.in</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Bestsellerfollow;
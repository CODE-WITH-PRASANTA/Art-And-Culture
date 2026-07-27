import React, { useRef } from 'react';
import './HomeMedia.css';

// React Icons
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi2';
import { FaPlay } from 'react-icons/fa6';

// Background Image Import
import bgPatternDark from '../../assets/bg black.png'; // Adjust path as needed

const HomeMedia = () => {
  const scrollRef = useRef(null);

  // Reliable, high-availability public test video streams with high-resolution poster fallbacks
  const mediaItems = [
    {
      id: 1,
      badge: '',
      title: '"Spirituality didn\'t disappear with the new...',
      productsCount: '',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      poster: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      badge: 'GOLD & SILVER PLATED',
      title: 'Unboxing Ganesh Shankh',
      productsCount: '4 PRODUCTS',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      poster: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      badge: '',
      title: "It's official, we've hit a milestone worth...",
      productsCount: '',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      poster: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 4,
      badge: 'BRAND',
      title: 'Svastika as a Gifting partner at the biggest...',
      productsCount: '1 PRODUCT',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoylikes.mp4',
      poster: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 5,
      badge: '',
      title: 'Where tradition meets artistry. 🌸',
      productsCount: '3 PRODUCTS',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      poster: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 6,
      badge: '',
      title: "Every gift holds more than what's inside - it...",
      productsCount: '3 PRODUCTS',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      poster: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 7,
      badge: '',
      title: 'Ever noticed how every Indian celebration ends...',
      productsCount: '2 PRODUCTS',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackBranding.mp4',
      poster: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 8,
      badge: '',
      title: "We've been preparing something for weeks.",
      productsCount: '',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      poster: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    },
  ];

  // Scroll controls
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Safe playback handlers
  const handleMouseEnter = (e) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      video.play().catch((err) => {
        // Prevent uncaught play promise errors if autoplay rules block video
        console.warn('Video play prevented:', err);
      });
    }
  };

  const handleMouseLeave = (e) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      video.pause();
    }
  };

  return (
    <section 
      className="HomeMedia"
      style={{ backgroundImage: `url(${bgPatternDark})` }}
    >
      <div className="HomeMedia-container">
        
        {/* Header Section */}
        <div className="HomeMedia-header">
          <div className="HomeMedia-titleGroup">
            <span className="HomeMedia-pillTag">+ BEFORE ANYTHING</span>
            <h2 className="HomeMedia-title">Know Svastika</h2>
            <p className="HomeMedia-subtitle">
              Glimpses of hands at work — Our Founders, artisans, customers & community.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="HomeMedia-navControls">
            <button 
              className="HomeMedia-navBtn" 
              onClick={() => handleScroll('left')} 
              aria-label="Previous Media"
            >
              <HiOutlineArrowLeft />
            </button>
            <button 
              className="HomeMedia-navBtn" 
              onClick={() => handleScroll('right')} 
              aria-label="Next Media"
            >
              <HiOutlineArrowRight />
            </button>
          </div>
        </div>

        {/* Scrollable Reel Cards */}
        <div className="HomeMedia-slider" ref={scrollRef}>
          {mediaItems.map((item) => (
            <div 
              key={item.id} 
              className="HomeMedia-card"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* HTML5 Video Component with fallback poster */}
              <video 
                className="HomeMedia-video"
                src={item.videoUrl}
                poster={item.poster}
                muted 
                loop 
                playsInline
                preload="metadata"
              />

              {/* Dark Gradient Overlay */}
              <div className="HomeMedia-overlay" />

              {/* Top Badge */}
              {item.badge && (
                <div className="HomeMedia-cardBadge">
                  {item.badge}
                </div>
              )}

              {/* Central Play Icon */}
              <div className="HomeMedia-playBtn">
                <FaPlay className="HomeMedia-playIcon" />
              </div>

              {/* Card Bottom Details */}
              <div className="HomeMedia-cardContent">
                <p className="HomeMedia-cardTitle">{item.title}</p>
                {item.productsCount && (
                  <span className="HomeMedia-productsCount">
                    {item.productsCount}
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeMedia;
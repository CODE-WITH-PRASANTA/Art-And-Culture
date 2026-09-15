import React from 'react';
import { Link } from 'react-router-dom';
import './HomeExplore.css';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

// Background Pattern Import
import bgPattern from '../../assets/Screenshot 2026-07-27 110029.png'; // Adjust relative path as needed

// 5 Card Image Imports
import img1 from '../../assets/Meenakari_Elephant_Banner (1).webp';
import img2 from '../../assets/Silver_Kamdhen_Idol_in_Pure_Silver_Plating_for_Prosperity_1_1.webp';
import img3 from '../../assets/Lotus_Urli_Bowl_with_Stand_04.webp';
import img4 from '../../assets/Pure_Brass_Krishna_with_Cow_Idol_1.webp';
import img5 from '../../assets/Ganesha_Banner_1_1.webp';

const HomeExplore = () => {
  const categories = [
    {
      id: 1,
      titleMain: 'Sellers',
      titleHighlight: 'Best',
      highlightFirst: true,
      subtitle: 'Our all-time favourites.',
      image: img1,
      gridClass: 'card-bestsellers',
    },
    {
      id: 2,
      titleMain: 'Art',
      titleHighlight: 'Meenakari',
      highlightFirst: true,
      subtitle: 'An Ancient Rajasthani art at your home',
      image: img2,
      gridClass: 'card-meenakari',
    },
    {
      id: 3,
      titleMain: 'Elegant',
      titleHighlight: 'Urlis',
      highlightFirst: false,
      subtitle: 'Elegance, in the old tradition.',
      image: img3,
      gridClass: 'card-urlis',
    },
    {
      id: 4,
      titleMain: 'Intricate',
      titleHighlight: 'Pure Brass',
      highlightFirst: false,
      subtitle: 'Fine brass, in the Indian tradition.',
      image: img4,
      gridClass: 'card-brass',
    },
    {
      id: 5,
      titleMain: '& Silver Plated',
      titleHighlight: 'Gold',
      highlightFirst: true,
      subtitle: 'Intricacy with the elegance of Gold & Silver',
      image: img5,
      gridClass: 'card-goldsilver',
    },
  ];

  return (
    <section 
      className="HomeExplore"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <div className="HomeExplore-container">
        
        {/* Header Section */}
        <div className="HomeExplore-header">
          <div className="HomeExplore-titleBox">
            <h2 className="HomeExplore-mainTitle">
              <span>Explore</span> Svastika
            </h2>
            <p className="HomeExplore-subtitle">
              Bestsellers, new arrivals, and everything in between.
            </p>
          </div>

          <Link to="/shop" className="HomeExplore-shopMoreBtn">
            <span>SHOP MORE</span>
            <HiOutlineArrowLongRight className="HomeExplore-arrowIcon" />
          </Link>
        </div>

        {/* Categories Asymmetric Grid */}
        <div className="HomeExplore-grid">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className={`HomeExplore-card ${cat.gridClass}`}
            >
              <img 
                src={cat.image} 
                alt={`${cat.titleHighlight} ${cat.titleMain}`} 
                className="HomeExplore-cardImg"
              />
              <div className="HomeExplore-cardOverlay" />

              <div className="HomeExplore-cardContent">
                <h3 className="HomeExplore-cardTitle">
                  {cat.highlightFirst ? (
                    <>
                      <span className="italic-highlight">{cat.titleHighlight}</span>{' '}
                      {cat.titleMain}
                    </>
                  ) : (
                    <>
                      {cat.titleMain}{' '}
                      <span className="italic-highlight">{cat.titleHighlight}</span>
                    </>
                  )}
                </h3>
                <p className="HomeExplore-cardSubtitle">{cat.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeExplore;
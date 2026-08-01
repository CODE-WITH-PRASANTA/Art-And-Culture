import React from 'react'
import './ExploreCard.css'
import bgImage from '../../assets/Screenshot 2026-07-27 110029.png'
import { 
  FiMapPin, 
  FiMaximize2, // Replaced FiRuler with a valid Feather icon
  FiHeart, 
  FiRotateCcw, 
  FiBox, 
  FiBell // Cleaner match for Pooja / Blessed feature
} from 'react-icons/fi'
import { FaHandPaper } from 'react-icons/fa'

const ExploreCard = () => {
  const topCards = [
    {
      id: 1,
      icon: <FiMapPin />,
      title: 'Where it belongs',
      description: 'Face the murti east or north-east in a clean, quiet corner of your home mandir, raised a little above the floor.'
    },
    {
      id: 2,
      icon: <FiMaximize2 />,
      title: 'Choosing the size',
      description: 'Pick a height that suits your altar — a 4–6 inch murti sits beautifully on most home mandirs, while taller pieces anchor a dedicated pooja room.'
    },
    {
      id: 3,
      icon: <FiHeart />,
      title: 'Kept with care',
      description: 'Wipe gently with a soft, dry cloth. Keep away from water and harsh polish — the finish keeps its lustre for years with a light touch.'
    }
  ]

  const bottomCards = [
    {
      id: 1,
      icon: <FaHandPaper />,
      title: 'Handmade in India',
      subtitle: 'One karigar, start to finish'
    },
    {
      id: 2,
      icon: <FiRotateCcw />,
      title: '7-day easy returns',
      subtitle: 'Safe-arrival guarantee'
    },
    {
      id: 3,
      icon: <FiBox />,
      title: 'Cash on delivery',
      subtitle: 'Pan-India, insured courier'
    },
    {
      id: 4,
      icon: <FiBell />,
      title: 'Blessed before dispatch',
      subtitle: 'Pran-pratishtha pooja done'
    }
  ]

  return (
    <section 
      className="ExploreCard" 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="ExploreCard-container">
        
        {/* Header Section */}
        <header className="ExploreCard-header">
          <span className="ExploreCard-subtitle">BEFORE YOU BRING ONE HOME</span>
          <h2 className="ExploreCard-title">
            Choosing <span className="ExploreCard-ampersand">&</span> placing your <span className="ExploreCard-italic">murti</span>
          </h2>
        </header>

        {/* Top Section: 3 Detailed Cards */}
        <div className="ExploreCard-top-grid">
          {topCards.map((card) => (
            <div key={card.id} className="ExploreCard-top-card">
              <div className="ExploreCard-icon-wrapper circle">
                {card.icon}
              </div>
              <h3 className="ExploreCard-card-title">{card.title}</h3>
              <p className="ExploreCard-card-desc">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Section: 4 Feature Cards */}
        <div className="ExploreCard-bottom-grid">
          {bottomCards.map((card) => (
            <div key={card.id} className="ExploreCard-bottom-card">
              <div className="ExploreCard-icon-wrapper filled">
                {card.icon}
              </div>
              <h4 className="ExploreCard-feature-title">{card.title}</h4>
              <p className="ExploreCard-feature-subtitle">{card.subtitle}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ExploreCard
import React from 'react';
import './ForHome.css';
import { 
  TbHome, 
  TbRulerMeasure, 
  TbSparkles, 
  TbHandStop, 
  TbRotateClockwise, 
  TbBox, 
  TbBell 
} from 'react-icons/tb';

const ForHome = () => {
  // ऊपर वाले 3 मुख्य कार्ड्स का डेटा
  const mainFeatures = [
    {
      id: 1,
      icon: <TbHome />,
      title: 'For your home mandir',
      description: 'Choose a full Balaji murti for a dedicated mandir. For a smaller shelf, consider a face idol or Charan Paduka.',
    },
    {
      id: 2,
      icon: <TbRulerMeasure />,
      title: 'Fit it to your space',
      description: 'Check the height, width and depth before ordering, with enough room left for diyas, flowers and daily pooja.',
    },
    {
      id: 3,
      icon: <TbSparkles />,
      title: 'Keep the finish beautiful',
      description: 'Dust with a soft, dry cloth. Keep plated and painted details away from water, abrasives and cleaners.',
    },
  ];

  // नीचे वाले 4 ग्रिड कार्ड्स का डेटा
  const highlightFeatures = [
    {
      id: 1,
      icon: <TbHandStop />,
      title: 'Handmade in India',
      subtitle: 'One karigar, start to finish',
    },
    {
      id: 2,
      icon: <TbRotateClockwise />,
      title: '7-day easy returns',
      subtitle: 'Safe-arrival guarantee',
    },
    {
      id: 3,
      icon: <TbBox />,
      title: 'Cash on delivery',
      subtitle: 'Pan-India, insured courier',
    },
    {
      id: 4,
      icon: <TbBell />,
      title: 'Blessed before dispatch',
      subtitle: 'Pran-pratishtha pooja done',
    },
  ];

  return (
    <section className="for-home">
      <div className="for-home__container">
        {/* Header Section */}
        <div className="for-home__header">
          <span className="for-home__subtitle">BEFORE YOU BRING ONE HOME</span>
          <h2 className="for-home__title">Find the right Balaji for your home</h2>
        </div>

        {/* Top 3 Main Cards */}
        <div className="for-home__main-grid">
          {mainFeatures.map((item) => (
            <div key={item.id} className="for-home__main-card">
              <div className="for-home__main-icon-wrapper">
                {item.icon}
              </div>
              <h3 className="for-home__main-card-title">{item.title}</h3>
              <p className="for-home__main-card-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom 4 Highlight Cards */}
        <div className="for-home__highlight-grid">
          {highlightFeatures.map((item) => (
            <div key={item.id} className="for-home__highlight-card">
              <div className="for-home__highlight-icon-wrapper">
                {item.icon}
              </div>
              <h4 className="for-home__highlight-title">{item.title}</h4>
              <p className="for-home__highlight-subtitle">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForHome;
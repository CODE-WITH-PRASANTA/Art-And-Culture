import React from "react";
import "./News.css";

const News = () => {
  const text = " Don't hold it. Live it. Spread it.";
  const ICON = "✦"; // you can change this to ★ • ⭑ etc.

  // create repeated items for smooth marquee
  const items = Array.from({ length: 7 });

  return (
    <div className="news-container">
      <div className="news-marquee" aria-hidden="true">
        <div className="marquee-content">
          {items.map((_, index) => (
            <React.Fragment key={index}>
              <span className="news-text" data-text={text}>
                {text}
              </span>

              {/* icon between texts */}
              <span className="news-icon" aria-hidden="true">
                {ICON}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;

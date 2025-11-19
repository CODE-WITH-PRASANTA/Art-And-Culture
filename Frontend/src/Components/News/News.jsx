import React from "react";
import "./News.css";

const News = () => {
  const text = "TRUST YOUR PURCHASE ! @ 圆       See the";

  return (
    <div className="news-container">
      <div className="news-marquee" aria-hidden="true">
        <div className="marquee-content">
          <span className="news-text" data-text={text}>{text}</span>
          <span className="news-text" data-text={text}>{text}</span>
          <span className="news-text" data-text={text}>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default News;

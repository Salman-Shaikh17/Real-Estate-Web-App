import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with SAL Properties</span>
          <span className="secondaryText">
            Subscribe now and get the latest news on the best property deals.
            <br />
            Begin your journey to find your dream residence.
          </span>
          <button className="button" href>
            <a href="mailto:sshaik1010@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

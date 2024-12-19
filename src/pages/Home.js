import React from "react";
import "../styles/Home.scss";
import profileImage from "../assets/images/Youssef.png";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="cyber-container slide-up" data-augmented-ui="tl-clip br-clip exe">
        <div className="container-left">
          <div className="image-wrapper">
            <div className="image-container" data-augmented-ui="tl-clip br-clip exe">
              <img src={profileImage} alt="Profile" />
            </div>
            <div className="image-label" data-augmented-ui="tl-clip br-clip exe">SUSPECT ID: YG-001</div>
          </div>
        </div>
        <div className="container-right">
          <div className="rap-sheet">
            <div className="header">CLASSIFIED INFORMATION</div>
            <div className="info-grid">
              <div className="info-row">
                <span className="label">NAME:</span>
                <span className="value">YOUSSEF GAD</span>
              </div>
              <div className="info-row">
                <span className="label">ALIAS:</span>
                <span className="value">FRONT-END REACT DEVELOPER</span>
              </div>
              <div className="info-row">
                <span className="label">STATUS:</span>
                <span className="value warning">ACTIVE</span>
              </div>
              <div className="divider"></div>
              <div className="info-row">
                <span className="label">PROFILE:</span>
                <span className="value">28 years old, from Egypt, Experienced in React, Typescript, Next.js, Tailwind, and more. Created Redline Media Marketing Agency for Marketing Services.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

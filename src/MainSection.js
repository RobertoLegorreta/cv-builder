import React from 'react';
import AboutMe from './AboutMe'; 
import Experience from './Experience';
import Projects from './Projects';
import './MainSection.css';

function MainSection() {
  return (
    <div className="main-section">
      <figure className="main-section-profile-picture">
        <img src="./objects/profile-picture.jpg" alt="Profile"></img>
      </figure>
      <AboutMe></AboutMe>
      <Experience></Experience>
      <Projects></Projects>
      <figure className="main-section-download-cv">
        <img src="./objects/download-cv.svg" alt="Download CV"></img>
      </figure>
    </div>
  );
}

export default MainSection;

import React from 'react';
import AboutMe from './AboutMe'; 
import Experience from './Experience';
import '../css/MainSection.css';

function MainSection(props) {
  return (
    <div className="main-section">
      <figure className="main-section-profile-picture">
        <img src="./objects/profile-picture.jpg" alt="Profile"></img>
      </figure>
      <AboutMe lang={props.lang}></AboutMe>
      <Experience lang={props.lang}></Experience>
      <figure id="downloadButton" className="main-section-download-cv" onClick={props.renderCV}>
        <img src="./objects/download-cv.svg" alt="Download CV"></img>
      </figure>
    </div>
  );
}

export default MainSection;

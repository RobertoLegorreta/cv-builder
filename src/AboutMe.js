import React from 'react';
import './MainSection.css';
import data from './data'

function AboutMe(props) {
  return (
    <div>
      <h3 className="main-section-description-title">ABOUT ME</h3>
      <p className="main-section-description" dangerouslySetInnerHTML={{__html: data.aboutMe[props.lang]}}></p>
    </div>
  );
}

export default AboutMe;

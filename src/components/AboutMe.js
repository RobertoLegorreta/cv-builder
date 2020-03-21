import React from 'react';
import '../css/MainSection.css';
import data from '../cv-data'

function AboutMe(props) {
  return (
    <div>
      <h3 className="main-section-description-title">{props.lang === "es"? "SOBRE MI": "ABOUT ME"}</h3>
      <p className="main-section-description" dangerouslySetInnerHTML={{__html: data.aboutMe[props.lang]}}></p>
    </div>
  );
}

export default AboutMe;

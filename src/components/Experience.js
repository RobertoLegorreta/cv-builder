import React from 'react';
import data from '../cv-data'
import '../css/MainSection.css';

function Experience(props) {
  return (
    <div>
      <h3 className="main-section-description-title">{props.lang === "es"? "EXPERIENCIA PROFESIONAL": "PROFESIONAL EXPERIENCE"}</h3>
      {data.experience.map((experience) => job(experience[props.lang].title, experience[props.lang].company, experience[props.lang].date, experience[props.lang].description))}
      <h3 className="main-section-description-title">{props.lang === "es"? "PROYECTOS PERSONALES": "PERSONAL PROJECTS"}</h3>
      {data.projects.map((work) => project(work[props.lang].name, work[props.lang].website, work[props.lang].description))}
    </div>
  );
}

function job(jobTitle, company, date, description){
  return(
    <div>
      <div className="main-section-bubbles-container">
        <p className="main-section-description-bubble main-section-description-bubble-job-title">{jobTitle}</p>
        <p className="main-section-description-bubble">{company}</p>
        <p className="main-section-description-bubble">{date}</p>
      </div>
      <p className="main-section-description">{description}</p>
    </div>
  )
}

function project(projectName, link, description){
  return(
    <div>
      <div className="main-section-bubbles-container">
        <p className="main-section-description-bubble">{projectName}</p>
        <a href={link} target="_blank" rel="noopener noreferrer"><p className="main-section-description-bubble main-section-description-bubble-link">{link}</p></a>
      </div>
      <p className="main-section-description">{description}</p>
    </div>
  )
}

export default Experience;
import React from 'react';
import data from './data'
import './MainSection.css';

function Experience(props) {
  return (
    <div>
      <h3 className="main-section-description-title">PROFESIONAL EXPERIENCE</h3>
      {data.experience.map((experience) => job(experience[props.lang].title, experience[props.lang].company, experience[props.lang].date, experience[props.lang].description))}
      <h3 className="main-section-description-title">PERSONAL PROJECTS</h3>
      {data.projects.map((work) => project(work[props.lang].name, work[props.lang].website, work[props.lang].description))}
    </div>
  );
}

function job(jobTitle, company, date, description){
  return(
    <div>
      <div>
        <p className="main-section-description-buble main-section-description-buble-job-title">{jobTitle}</p>
        <p className="main-section-description-buble">{company}</p>
        <p className="main-section-description-buble">{date}</p>
      </div>
      <p className="main-section-description">{description}</p>
    </div>
  )
}

function project(projectName, link, description){
  return(
    <div>
      <div>
        <p className="main-section-description-buble">{projectName}</p>
        <a href={link} target="_blank" rel="noopener noreferrer"><p className="main-section-description-buble main-section-description-buble-link">{link}</p></a>
      </div>
      <p className="main-section-description">{description}</p>
    </div>
  )
}

export default Experience;
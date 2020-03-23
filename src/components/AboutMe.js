import React from 'react';
import '../css/MainSection.css';
import data from '../cv-data'

function AboutMe(props) {
  return (
    <div>
      <div id="main-section-personal-information">
        <div>
          <p id="main-section-name">{data.personalInformation.name}</p>
          <p id="main-section-name">{props.lang === "es"? "Teléfono: ": "Phone number: "}{data.personalInformation.phone}</p>
        </div>
        <div>
          <p id="main-section-name">{props.lang === "es"? "Correo: ": "Email: "}{data.personalInformation.email}</p>
          <p id="main-section-name">Linkedin: {data.personalInformation.linkedin}</p>
        </div>
      </div>
      <h3 className="main-section-description-title">{props.lang === "es"? "SOBRE MI": "ABOUT ME"}</h3>
      <p className="main-section-description" dangerouslySetInnerHTML={{__html: data.aboutMe[props.lang]}}></p>
    </div>
  );
}

export default AboutMe;

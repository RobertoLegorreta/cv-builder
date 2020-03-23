import React from 'react';
import '../css/Header.css';
import data from '../cv-data'

function Header(props) {
  return (
    <div className="header-main-container">
     <p className="header-personal-name">{data.personalInformation.name.toUpperCase()}</p>
     <figure id="languageButton" className="header-change-language" onClick={props.handleClick}>
      <img src={`./objects/flag-${props.lang === "en"? "es": "en"}.svg`} alt="Select language"></img>
     </figure>
    </div>
  );
}

export default Header;

import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header-main-container">
     <p className="header-personal-name">ROBERTO LEGORRETA</p>
     <figure className="header-change-language">
      <img src="./objects/usa-flag.svg" alt="Select language"></img>
     </figure>
    </div>
  );
}

export default Header;

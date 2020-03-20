import React from 'react';
import AboutMe from './AboutMe'; 
import Experience from './Experience';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './MainSection.css';

function MainSection(props) {
  return (
    <div className="main-section">
      <figure className="main-section-profile-picture">
        <img src="./objects/profile-picture.jpg" alt="Profile"></img>
      </figure>
      <AboutMe lang={props.lang}></AboutMe>
      <Experience lang={props.lang}></Experience>
      <figure id="downloadButton" className="main-section-download-cv" onClick={() => {
        const input = document.getElementById('root');
        const downloadButton = document.getElementById('downloadButton');
        const languageButton = document.getElementById('languageButton');
        input.classList.add("setWidth"); 
        downloadButton.classList.add("hide"); 
        languageButton.classList.add("hide"); 


        html2canvas(input)
          .then((canvas) => {
            var pdf = new jsPDF({
              orientation: 'p',
              unit: 'mm',
              format: 'b0',
             });

            console.log(canvas);
            pdf.addImage(canvas, 'JPEG', 0, 0);
            pdf.save("curriculum_vitae.pdf");  
          });
        input.classList.remove("setWidth"); 
        downloadButton.classList.remove("hide"); 
        languageButton.classList.remove("hide"); 
      }}>
        <img src="./objects/download-cv.svg" alt="Download CV"></img>
      </figure>
    </div>
  );
}

export default MainSection;

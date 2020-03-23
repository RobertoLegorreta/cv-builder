import React from 'react';
import Header from './Header';
import MainSection from './MainSection';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import '../css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "en"
    };

    this.handleClick = this.handleClick.bind(this);
    this.renderCV = this.renderCV.bind(this);
  }

  handleClick(){
    this.setState({
      lang: this.state.lang === "en"? "es": "en"
    }); 
  }

  renderCV(){
    document.getElementById('loading').style.display = "flex";
    document.getElementById('main-section-personal-information').style.display = "block"; 
    const mainSection = document.getElementById('main-section'); 
    //Add classes
    mainSection.classList.add("mainSectionPDF"); 
    mainSection.getElementsByClassName('main-section-profile-picture')[0].classList.add('profilePicturePDF');
    for(let i = 0; i < mainSection.getElementsByClassName('main-section-description-title').length; i++){
      mainSection.getElementsByClassName('main-section-description-title')[i].classList.add('titlePDF');
    }
    for(let i = 0; i < mainSection.getElementsByClassName('main-section-description').length; i++){
      mainSection.getElementsByClassName('main-section-description')[i].classList.add('paragraphPDF');
    }
    for(let i = 0; i < mainSection.getElementsByClassName('main-section-description-bubble').length; i++){
      mainSection.getElementsByClassName('main-section-description-bubble')[i].classList.add('bubblesPDF');
    }
    for(let i = 0; i < document.getElementsByClassName('main-section-bubbles-container').length; i++){
      document.getElementsByClassName('main-section-bubbles-container')[i].style.margin = "10px 0px 2px 0px"
    }

    document.getElementById('downloadButton').classList.add("hide"); 
    document.getElementById('languageButton').classList.add("hide"); 
    //Add classes

    //Fix canvas problem
    window.scrollTo(0, 0);
    // Get the current page scroll position 
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; 
  
    // if any scroll is attempted, set this to the previous value 
    window.onscroll = function() { 
        window.scrollTo(scrollLeft, scrollTop); 
    }; 
  
    

    setTimeout(()=> {
      html2canvas(mainSection)
      .then((canvas) => {
        var pdf = new jsPDF({
          orientation: 'p',
          unit: 'mm',
          format: 'a4',
        });


        
        pdf.addImage(canvas, 'JPG', 10, 10, 190, mainSection.offsetHeight * 200 / 750);
        pdf.save("curriculum_vitae.pdf");  
      });

      setTimeout(() => {
        //Remove classes
        document.getElementById('main-section-personal-information').style.display = "none"; 
        mainSection.classList.remove("mainSectionPDF");
        mainSection.getElementsByClassName('main-section-profile-picture')[0].classList.remove('profilePicturePDF'); 
        for(let i = 0; i < mainSection.getElementsByClassName('main-section-description-title').length; i++){
          mainSection.getElementsByClassName('main-section-description-title')[i].classList.remove('titlePDF');
        }
        for(let i = 0; i < mainSection.getElementsByClassName('main-section-description').length; i++){
          mainSection.getElementsByClassName('main-section-description')[i].classList.remove('paragraphPDF');
        }
        for(let i = 0; i < mainSection.getElementsByClassName('main-section-description-bubble').length; i++){
          mainSection.getElementsByClassName('main-section-description-bubble')[i].classList.remove('bubblesPDF');
        }
        for(let i = 0; i < document.getElementsByClassName('main-section-bubbles-container').length; i++){
          document.getElementsByClassName('main-section-bubbles-container')[i].style.margin = "0px 0px"
        }
  
        document.getElementById('downloadButton').classList.remove("hide"); 
        document.getElementById('languageButton').classList.remove("hide"); 
        //Remove classes

        //Scroll again
        window.onscroll = function() { 
          window.onscroll = function() {}; 
        }; 
        document.getElementById('loading').style.display = "none";
      }, 500); 
    }, 500); 
  }  

  render(){
    return (
      <div>
        <div id="loading">
          <figure>
            <img src="./objects/loading.gif" alt="Loading"></img>
          </figure>
        </div>
        <Header handleClick={this.handleClick} lang={this.state.lang}></Header>
        <MainSection lang={this.state.lang} renderCV={this.renderCV}></MainSection>
      </div>
    );
  } 
}

export default App;

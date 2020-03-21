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
  }  

  render(){
    return (
      <div>
        <Header handleClick={this.handleClick} lang={this.state.lang}></Header>
        <MainSection lang={this.state.lang} renderCV={this.renderCV}></MainSection>
      </div>
    );
  } 
}

export default App;

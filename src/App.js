import React from 'react';
import Header from './Header';
import MainSection from './MainSection';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "en"
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      lang: this.state.lang === "en"? "es": "en"
    }); 
  }

  render(){
    return (
      <div>
        <Header handleClick={this.handleClick} lang={this.state.lang}></Header>
        <MainSection lang={this.state.lang}></MainSection>
      </div>
    );
  } 
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from "./components/jumbotron.js"
import Controls from "./components/controls.js"
import CardHolder from "./components/cardholder.js"

class App extends Component {
  state = {
    score: 0,
    highScore: 0
  }

  handleCardClick = (card) => {
    alert(`You selected ${card}`);
    this.setState({
      score: 10,
      highScore: 10
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Jumbotron />
          <Controls score={this.state.score} highScore={this.state.highScore} />
          <CardHolder handleCardClick={this.handleCardClick.bind(this)}/>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}
export default App;

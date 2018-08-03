import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from "./components/jumbotron.js"
import Controls from "./components/controls.js"
import CardHolder from "./components/cardholder.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Jumbotron />
          <Controls />
          <CardHolder />
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;

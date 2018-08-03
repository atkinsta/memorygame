import React, { Component } from 'react';
import './App.css';
import Jumbotron from "./components/jumbotron.js"
import Controls from "./components/controls.js"
import CardHolder from "./components/cardholder.js"

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    currentlyDisplayed: ["AC", "KH", "4C", "5S", "6H", "7D"],
    alreadyGuessed: [],
    cardList: ["2C", "2S", "2H", "2D", "3C", "3S", "3H", "3D", "4C", "4S", "4H", "4D", "5C", "5S", "5H", "5D", "6C", "6S", "6H", "6D", "7C", "7S", "7H", "7D", "8C", "8S", "8H", "8D", "9C", "9S", "9H", "9D", "10C", "10S", "10H", "10D", "AC", "AS", "AH", "AD", "JC", "JS", "JH", "JD", "QC", "QS", "QH", "QD", "KC", "KS", "KH", "KD"]
  }

  freshCardList = () => ["2C", "2S", "2H", "2D", "3C", "3S", "3H", "3D", "4C", "4S", "4H", "4D", "5C", "5S", "5H", "5D", "6C", "6S", "6H", "6D", "7C", "7S", "7H", "7D", "8C", "8S", "8H", "8D", "9C", "9S", "9H", "9D", "10C", "10S", "10H", "10D", "AC", "AS", "AH", "AD", "JC", "JS", "JH", "JD", "QC", "QS", "QH", "QD", "KC", "KS", "KH", "KD"]

  handleCardClick = (card) => {
    if (this.state.alreadyGuessed.includes(card)) {
      return this.resetState();
    }
    else {
      var newScore = this.state.score + 1;
      var newHighScore = this.state.highScore;
      if (this.state.highScore < newScore) {
        newHighScore = this.state.highScore + 1;
      }
      var newGuessed = [...this.state.alreadyGuessed, card]
      console.log(newGuessed)
    }

    var sortedList = this.state.cardList.sort(() => 0.5 - Math.random());
    var chosenCards = sortedList.splice(0, 6);
    this.setState({
      score: newScore,
      highScore: newHighScore,
      currentlyDisplayed: chosenCards,
      alreadyGuessed: newGuessed,
      cardList: this.freshCardList()
    });
  }

  resetState = () => {
    this.setState({
      score: 0,
      highScore: this.state.highScore,
      currentlyDisplayed: ["AC", "KH", "4C", "5S", "6H", "7D"],
      alreadyGuessed: [],
      cardList: this.freshCardList()
    });
  }

  seenEmAll = () => {
    //wip function
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Jumbotron />
          <Controls score={this.state.score} highScore={this.state.highScore} resetState={this.resetState} seenEmAll={this.seenEmAll}/>
          <CardHolder
            handleCardClick={this.handleCardClick.bind(this)}
            currentlyDisplayed={this.state.currentlyDisplayed}
            alreadyGuessed={this.state.alreadyGuessed}
            cardList={this.state.cardList}
          />
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}
export default App;

import React, { Component } from "react";

class Controls extends Component {
    state = {
        score: 0,
        highScore: 0
    }

    resetScore = () => {
        this.setState({
            score: 0,
            highScore: 0
        });
    }

    addScore = () => {
        this.setState({
            score: this.state.score + 1,
            highScore: this.state.score + 5
        });
    }

    render() {
        return (
            <div className="controls">
                <button onClick={this.resetScore}>Reset</button>
                <button onClick={this.addScore}>OnScore</button>
                <h3>Current Score: {this.state.score} | High Score: {this.state.highScore}</h3>
            </div>
        )
    }
}

export default Controls
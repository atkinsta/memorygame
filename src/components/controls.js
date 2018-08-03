import React, { Component } from "react";

class Controls extends Component {
    state = {
        score: 0,
        highScore: 0
    }

    resetScore() {
        this.setState({
            score: 0,
            highScore: 0
        });
    }
    render() {
        return (
            <div className="controls">
                <button onClick={this.resetScore}>Reset</button>
                <h3>Current Score: {this.state.score} | High Score: {this.state.highScore}</h3>
            </div>
        )
    }
}

export default Controls
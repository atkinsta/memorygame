import React, { Component } from "react";

class Controls extends Component {

    resetScore = () => {
        this.setState({
            score: 0,
            highScore: 0
        });
    }

    render() {
        return (
            <div className="controls">
                <button onClick={this.resetScore}>Reset</button>
                <button onClick={this.addScore}>OnScore</button>
                <h3>Current Score: {this.props.score} | High Score: {this.props.highScore}</h3>
            </div>
        )
    }
}

export default Controls
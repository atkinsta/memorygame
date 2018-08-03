import React, { Component } from "react";

class Controls extends Component {
    render() {
        return (
            <div className="controls">
                <button onClick={this.props.resetState}>Reset</button>
                <button onClick={this.addScore}>OnScore</button>
                <h3>Current Score: {this.props.score} | High Score: {this.props.highScore}</h3>
            </div>
        )
    }
}

export default Controls
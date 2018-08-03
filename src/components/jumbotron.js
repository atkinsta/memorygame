import React, { Component } from "react";

class Jumbotron extends Component {
    render() {
        return(
            <div className="jumbotron">
                <h3>52 - The Memory Game</h3>
                <h5>Select cards that you have not clicked on before.</h5>
                <h5>Be careful, click the same card twice and you lose!</h5>
            </div>
        )
    }
}

export default Jumbotron;
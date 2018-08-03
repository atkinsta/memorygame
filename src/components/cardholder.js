import React, {Component} from "react";
import Card from "./card.js";

class CardHolder extends Component {
    state = {
        currentlyDisplayed: {},
        newCards: ["AC", "KH", "4C", "5S", "6H"],
        alreadyGuessed: []
    }

    render() {
        return(
            <div className="CardHolder">
                {this.state.newCards.map(card => <Card value={card.toString()}/>)}
            </div>
        )
    }
}

export default CardHolder;
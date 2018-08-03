import React, {Component} from "react";
import Card from "./card.js";

class CardHolder extends Component {
    state = {
        currentlyDisplayed: {},
        newCards: [],
        alreadyGuessed: []
    }

    render() {
        return(
            <div className="CardHolder">
                <Card />
            </div>
        )
    }
}

export default CardHolder;
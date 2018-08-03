import React, {Component} from "react";
import Card from "./card.js";

class CardHolder extends Component {
    constructor(props) {
        super(props)
        this.handleCardClick = props.handleCardClick
    }

    state = {
        currentlyDisplayed: {},
        newCards: ["AC", "KH", "4C", "5S", "6H", "7D"],
        alreadyGuessed: []
    }

    updateState = (card) => {
        this.setState({
            newCards: ["AS", "4H", "9S", "6C", "7C"],
            alreadyGuessed: [card]
        });
    }

    render() {
        return(
            <div className="CardHolder">
                {this.state.newCards.map(card => <Card
                    handleCardClick={this.handleCardClick.bind(this)}
                    updateState={this.updateState.bind(this)}
                    key={card}
                    value={card.toString()}
                />)}
            </div>
        )
    }
}

export default CardHolder;
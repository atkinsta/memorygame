import React, {Component} from "react";
import Card from "./card.js";

const style = {
    holder: {
        alignContent: "center"
    }
}

class CardHolder extends Component {
    constructor(props) {
        super(props)
        this.handleCardClick = props.handleCardClick
        this.updateState = props.updateState
    }

    render() {
        return(
            <div className="CardHolder row" style={style.holder}>
                {this.props.currentlyDisplayed.map(card => <Card
                    handleCardClick={this.handleCardClick.bind(this)}
                    key={card}
                    value={card.toString()}
                />)}
            </div>
        )
    }
}

export default CardHolder;
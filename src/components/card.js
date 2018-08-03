import React, { Component } from "react";

const style = {
    contianer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between"

    },
    images: {
        width: 100,
        display: "inline-block",
        float: "left"
    }
}

class Card extends Component {
    constructor(props) {
        super(props);
        this.value = props.value;
        this.handleCardClick = props.handleCardClick
    }

    render() {
        return(
            <div around="m" style={style.container} className="card" onClick={() => this.handleCardClick(this.value)}>
                <img style={style.images} src={`../images/${this.value}.png`} alt={this.value} />
            </div>
        ) 
    }
}

export default Card;
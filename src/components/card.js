import React, { Component } from "react";

const style = {
    container: {
        margin: "auto"
    },
    images: {
        width: 150,
        display: "flex",
        justifyContent: "space-evenly"
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
            <div style={style.container} className="col-md-2 card col-sm-6" onClick={() => this.handleCardClick(this.value)}>
                <img style={style.images} src={`../../images/${this.value}.png`} alt={this.value} />
            </div>
        ) 
    }
}
//Minor change
export default Card;
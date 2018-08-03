import React, { Component } from "react";

const style = {
    images: {
        width: 100,
        display: "inline-block"
    }
}

class Card extends Component {
    constructor(props) {
        super(props);
        this.value = props.value;
    }
    render() {
        return(
            <div className="card">
                <img style={style.images} src={`../images/${this.value}.png`} alt={this.value} />
            </div>
        ) 
    }
}

export default Card;
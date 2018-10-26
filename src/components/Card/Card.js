import React, { Component} from 'react';
import './Card.css';
class Card extends Component {
    render(){
        return(
            <div className="box">
                <h1>
                    {this.props.title}
                </h1>
                <p>{this.props.picture}</p>
            </div>
        )
    }
}

export default Card;
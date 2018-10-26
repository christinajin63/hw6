import React, { Component} from 'react';
import './Card.css';
class Card extends Component {
    render(){
        return(
            <div className="box">
                <img width="208px" src={process.env.PUBLIC_URL + this.props.foodpic}/>
                <p className="money">{this.props.money}</p>
                <h1 className="foodname">
                    {this.props.title}
                </h1>
                <p className="des">{this.props.description}</p>
            </div>
        )
    }
}

export default Card;
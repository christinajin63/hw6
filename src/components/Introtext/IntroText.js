import React, { Component } from 'react';
import './IntroText.css';

class IntroText extends Component {
    render(){
        return(
                <div className="card">
                    <div className="picture">
                        <img width="400px" src={process.env.PUBLIC_URL + this.props.picture}/>
                    </div>
                    <div className="about">
                        <p className="city" >{this.props.city}</p>
                        <h1 className="landmark" >{this.props.landmark}</h1>
                        <p className="description" >{this.props.des}</p>
                    </div>
                    
                    
                </div>
        )
    }
}

export default IntroText;


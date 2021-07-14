import React, { Component } from 'react';

export default class Sample extends Component {

    state = {
        a: "Hello"
    };
    ClickButton = () => {
        alert("You pressed button");
        // this.state.a = "You pressed button";
        this.setState({
            a: "You pressed button"
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.a}</h2>
                <button type="button" onClick={this.ClickButton}>
                    Click Me
                </button>
            </div>
        );
    }
}

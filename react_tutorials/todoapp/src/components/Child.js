import React, { Component } from 'react';

export default class Child extends Component {
    render() {
        return (
            <div>
                <h4>I am a child Component</h4>
                <h6>{this.props.Title}</h6>
            </div>
        )
    }
}

import React, { Component } from 'react';
import Child from './Child';

export default class Parent extends Component {
    render() {
        return (
            <div>
                <h4>I am a Parent Component</h4>
                <Child Title="I am text from parent"></Child>
            </div>
        )
    }
}

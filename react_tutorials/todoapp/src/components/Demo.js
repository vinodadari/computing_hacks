import React, { Component } from 'react';

export class Demo extends Component {
    render() {
        return (
            <div>
                <h1>This is class Component</h1>
            </div>
        );
    }
}

export function Demo2() {
    return (
        <div>
            <h2>This is functional Component</h2>
        </div>
    );
}

export const Demo3 = (props) => {
    return (
        <div>
            <h2>This is Arrow function</h2>
            <p>{props.Vinod}</p>
        </div>
    );
}

export const Demo4 = () => (
    <div>
        <h2>This is second way arrow function</h2>
    </div>
);
// export default Demo;


import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: this.props.initialCount
        };
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    reset = () => {
        this.setState({
            count: this.props.initialCount
        });
    }

    render() {
        return (
            <div style={{
                textAlign: "center",
                padding: "20px"
            }}>

                <h2>{this.props.title}</h2>

                <h3>{this.state.count}</h3>

                <p>Current Count</p>

                <button onClick={this.decrement}>
                    - Decrement
                </button>

                <button onClick={this.increment}>
                    + Increment
                </button>

                <br /><br />

                <button onClick={this.reset}>
                    Reset
                </button>

            </div>
        );
    }
}

Counter.defaultProps = {
    title: "Counter Application",
    initialCount: 0
};

export default Counter;

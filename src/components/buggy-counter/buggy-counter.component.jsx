import React, { Component } from 'react';

class BuggyCounter extends Component {
    state = { counter: 0 };

    handleOnClick = () => {
        let { counter: count } = this.state;
        this.setState({ counter: (count += 1) });
    };

    render() {
        const { counter } = this.state;

        if (counter > 6) {
            throw new Error('Count cannot be greater than 5');
        } else {
            return <h2 onClick={this.handleOnClick}>{counter}</h2>;
        }
    }
}

export default BuggyCounter;

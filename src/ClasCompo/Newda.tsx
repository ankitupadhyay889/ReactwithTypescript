import React, { Component } from 'react';

type Cosa = {
    time: Date;
}

class Newda extends Component<{} , Cosa> {

    // setstate method
    co = () => {
        this.setState({time: new Date()})
    }

    // Before the component mounts, we initialise our state
    componentWillMount() {
        this.co();
    }

    componentDidMount() {
        setInterval(() => this.co() , 1000)
    }

    render() {
        return (
            <div>
                <h2> Current Time </h2>
                <h1>The current time is {this.state.time.toLocaleTimeString()} </h1>
            </div>
        );
    }
}

export default Newda;
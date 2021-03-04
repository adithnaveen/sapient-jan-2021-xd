import React, { Component } from 'react'


class CounterApp extends Component {
    state = { count: 1 }
    num = 1;
    // mounting stage
    constructor() {
        super();
        console.log("CounterApp-Contructor");
    }

    render() {
        console.log("CounterApp.render() called... ");
        return (
            <div className="container">
                <hr />
                <h3 className="alert alert-danger">{this.props.title} </h3>
                <p>Value of Counter {this.state.count}</p>
                <p>Value of Num  {this.num}</p>
                <button className="btn btn-primary"
                    onClick={() => {
                        this.setState({ count: this.state.count + 1 })
                    }}

                >Increment Count</button>

                <button className="btn btn-danger"
                    onClick={() => {
                        this.num++;
                        console.log("Num Value : ", this.num);
                        this.forceUpdate();
                    }}
                >Increment Num</button>



            </div>
        );
    }

    // most time the data fetching can go here
    componentDidMount() {
        console.log("CounterApp.componentDidMount()...");
    }

    componentWillUnmount() {
        console.log("CounterApp.componentWillUnmount()...");
    }
    // most time the data fetching can go here
    componentDidUpdate() {
        console.log("CounterApp.componentDidUpdate()...");
    }
}

export default CounterApp;
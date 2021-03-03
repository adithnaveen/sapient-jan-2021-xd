import React, { Component } from 'react';


import 'bootstrap/dist/css/bootstrap.css';


// stateless component to render button
const MyButton = ({ caption, handler }) => {
    return (<button className="btn btn-secondary" onClick={handler}>{caption}</button>)
}


class App extends Component {
    /* 
        constructor() {
            super();
            console.log("hi i'm in constructor");
            this.btnHandler = this.btnHandler.bind(this);
        }
    
        btnHandler() {
            console.log("You clicked", this);
        } */

    // when you mutate the state variable 
    // the render is implicitly called 
    state = { num: 100 };

    btnHandler = () => {
        console.log("You Clicked ", this);
    }

    increment = () => {
        this.setState({ num: this.state.num + 1 });
    }

    decrement = () => {
        this.setState({ num: this.state.num - 1 });
    }

    // version 2.0 
    // we will have 1 function based on the param it should increment 
    // or decrement 

    incrementOrDecrement = (val) => {
        this.setState({ num: this.state.num + val });
    }

    render() {
        return (
            <div className="container">
                <h3>This is component Area of the application</h3>
                <hr />
                <p>The value of state is : {this.state.num} </p>
                <button className="btn btn-primary" onClick={this.btnHandler}>Button-1</button>
                <button className="btn btn-primary" onClick={this.btnHandler}>Button-2</button>

                <hr />
                <button className="btn btn-danger" onClick={this.increment}>Increment</button>
                <button className="btn btn-danger" onClick={this.decrement}>Decrement</button>

                <hr />
                <button className="btn btn-warning" onClick={() => { this.incrementOrDecrement(1) }}>Increment</button>
                <button className="btn btn-warning" onClick={() => { this.incrementOrDecrement(-1) }} >Decrement</button>

                <hr />
                <MyButton caption="INCREMENT" handler={() => { this.incrementOrDecrement(1) }} />
                <MyButton caption="DECREMENT" handler={() => { this.incrementOrDecrement(-1) }} />
            </div>
        );
    }
}

export default App;
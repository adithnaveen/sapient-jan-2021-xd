import React, { Component } from 'react'

import CounterApp from '../life-cycle/counter-app'
import 'bootstrap/dist/css/bootstrap.css';
import '../life-cycle/app.css';

class AppLifeCycle extends Component {
    state = {
        showCounterApp: false,
        title: "Counter App"
    }
    render() {
        let output = null;
        if (this.state.showCounterApp === true) {
            output = <CounterApp title={this.state.title} />;
        }

        return (
            <div className="container">
                <h1 className="alert alert-info">React Component LifeCycle</h1>
                <button className="btn btn-primary"
                    onClick={() => {
                        if (this.state.title === 'Counter App') {
                            this.setState({ title: 'Counter App V1' })
                        } else {
                            this.setState({ title: 'Counter App' })
                        }
                    }}
                >Toggle Title</button>
                <button className="btn btn-warning"
                    onClick={() =>
                        this.setState({ showCounterApp: !this.state.showCounterApp })
                    }>Show / Hide Counter App</button>
                { output}



            </div >
        );
    }
}

export default AppLifeCycle;
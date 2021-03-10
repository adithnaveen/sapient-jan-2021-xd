import React, { Component } from 'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

import ContactsList from './components/ContactList'
import ContactForm from './components/ContactForm'; 

class App extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="alert alert-info">React Redux Application </h2>
                <div className="row">
                    <div className="col-md-5">
                        <ContactForm  />
                    </div>
                    <div className="col-md-7">
                        <ContactsList  />
                    </div>
                </div>

            </div>
        );
    }
}
ReactDom.render(<App/>, document.getElementById("root")); 
import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import ContactList from '../contact-app/contact-list'
class ContactApp extends Component {
    state = {
        contacts: []
    }

    async componentDidMount() {
        // you can use jQuery, fetch, axios 
        // since the state is mutated the render is invoked 
        // fetch("http://localhost:4000/contacts/")
        //     .then(resp => resp.json())
        //     .then(respJson => this.setState({ contacts: respJson }));


        let resp = await fetch("http://localhost:4000/contacts/"); 
        let contacts = await resp.json(); 
        this.setState({ contacts })


    }

    render() {
        return (
            <div className="conatiner">
                <h1 className="alert alert-info">Fetching Data from rest server</h1>
                <p>Number Of Records {this.state.contacts.length}</p>
                <div className="row">
                    <div className="col">
                        <ContactList contacts={this.state.contacts} />
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        );
    }
}

export default ContactApp;
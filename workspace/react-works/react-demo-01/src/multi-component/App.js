import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css'

import ContactsList from './ContactsList'
import ContactForm from './ContactForm'; 


class App extends Component {

    // all the functions go here 
    // convert it so that we will have the data from end point 
    addContact = (contact) => {
        let { contacts } = this.state;
        contacts.unshift(contact);
        this.setState({ contacts });
    }

    deleteContact= (id) => {
        let {contacts} = this.state; 
        let index = contacts.findIndex(c => c.id ===id); 
        if(index !==-1){
            contacts.splice(index, 1)
            this.setState({contacts})
        }
    }

    state = {
        contacts: [
            {
                "id": 101,
                "sex": "male",
                "name": "bibhu",
                "email": "bibhu@ps.com",
                "phone": "+91 88349 34839",
                "picture": "https://randomuser.me/api/portraits/men/1.jpg"
            },
            {
                "id": 102,
                "sex": "female",
                "name": "astha",
                "email": "astha@gmail.com",
                "phone": "+91 88349 34822",
                "picture": "https://randomuser.me/api/portraits/women/2.jpg"
            },
            {
                "id": 103,
                "sex": "male",
                "name": "nagesh",
                "email": "nagesh@yahoo.com",
                "phone": "+91 88349 34837",
                "picture": "https://randomuser.me/api/portraits/men/3.jpg"
            }
        ]
    }


    render() {
        return (
            <div className="container">
                <h2 className="alert alert-info">Contact Application V1.0</h2>

                <div className="row">
                    <div className="col-md-5">
                        <ContactForm addContact={this.addContact} />
                    </div>
                    <div className="col-md-7">

                        <ContactsList contacts={this.state.contacts} deleteContact ={this.deleteContact} />

                    </div>
                </div>

            </div>
        );
    }
}

export default App;
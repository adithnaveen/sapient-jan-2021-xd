import React, { Component } from 'react'

import ContactCard from './ContactCard'

class ContactsList extends Component {

    render() {

        let list = null; 
        let contacts = this.props; 

        if(contacts instanceof Array && contacts.length >0 ) {
         contacts.map(
            c => <ContactCard key={c.id} contact={c} />)
         }
     
        return ( 
            <div className="container">
                <h3>Contact List</h3>
                {list}
            </div>
        );
    }
}

export default ContactsList;
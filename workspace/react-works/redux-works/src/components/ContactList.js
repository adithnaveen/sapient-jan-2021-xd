import React, { Component } from 'react'
import ContactCard from './ContactCard'

import {fetchContacts} from '../actions/contacts-action';
import {connect} from 'react-redux';

class ContactsList extends Component {
    componentDidMount() {
        this.props.getAllContacts();
    }
    render() {
        let list = null;
        let {contacts} = this.props; 
        if(contacts instanceof Array && contacts.length >0 ) {
          list = contacts.map(c => <ContactCard key={c.id} contact={c} />)
        }
        return ( 
            <div className="container">
                <h3>Contact List</h3>
                {list}
            </div>
        );
    }
}

const stateAsProps = (reducer) => {
    return  {
        contacts: reducer.contactsReducer.contacts
    }
}
const actionAsProps =  {
    getAllContacts: fetchContacts 
}; 
export default connect(stateAsProps, actionAsProps)(ContactsList);
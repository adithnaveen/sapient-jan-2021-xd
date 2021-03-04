import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import ContactCard from '../contact-app/contact-card'

class ContactApp extends Component {


    render() {
        const contacts = [
            {
                "id": 1,
                "name": "Kumar",
                "gender": "male",
                "email": "naveen@probits.in",
                "phone": "9900524255",
                "picture": "https://randomuser.me/api/portraits/men/30.jpg"
            },
            {
                "id": 2,
                "name": "Charan",
                "gender": "male",
                "email": "charan@ps.com",
                "phone": "3434343434",
                "picture": "https://randomuser.me/api/portraits/men/31.jpg"
            },
            {
                "id": 3,
                "name": "Monika",
                "gender": "female",
                "email": "monika@ps.com",
                "phone": "8989898989",
                "picture": "https://randomuser.me/api/portraits/men/30.jpg"
            }
        ];

        const contactsList = contacts.map(c => <ContactCard contact={c} key={c.id} />)
        return (
            <div className="container">
                <h1 className="alert alert-info">Showing array of contact cards</h1>
                {/* <ContactCard contact={contacts[0]} />
                <ContactCard contact={contacts[1]} />
                <ContactCard contact={contacts[2]} /> */}
                <hr />
                {contactsList}

            </div>
        );
    }
}

export default ContactApp;

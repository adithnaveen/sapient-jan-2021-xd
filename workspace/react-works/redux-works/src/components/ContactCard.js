import {deleteContact} from '../actions/contacts-action'; 
import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom'

const ContactCard = ({ contact, deleteContact}) => (
    <div className="card">
        <div className="row">
            <div className="col-md-4">
                <img src={contact.picture}
                    className="card-img" alt={contact.name}
                    style={{ width: 100, height: 100 }} />
            </div>
            <div className="col-md-7">
                <div className="card-body">
                    <h4 className="card-title">
                        <Link to={"/contact-detail/" + contact.id}>
                            {contact.name}
                        </Link> 
                        
                         <button className="btn btn-danger" 
                        onClick ={() => {
                           deleteContact(contact.id); 
                        }}
                    >&times;</button>
                    </h4>
                   
                    <h4 className="card-text">{contact.email}</h4>
                    <h4 className="card-text">{contact.phone}</h4>
                </div>
            </div>
        </div>
    </div>
)
export default  connect(null, {deleteContact}) (ContactCard); 
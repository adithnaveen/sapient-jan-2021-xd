import React from 'react'

const ContactCard = ({ contact }) => {
    // .card>.row>(.col-md-4+.col-md-8)
    return (<div className="card" style={{ width: "400px", height: "150px", padding: "10px", margin: "10px" }} >
        <div className="row">
            <div className="col-md-4">
                <img src={contact.picture} alt={contact.name} className="card-img"
                    style={{ width: "100px", height: "100px" }} />
            </div>
            <div className="col-md-8">
                <h4 className="card-title">{contact.name}</h4>
                <h4 className="card-text">{contact.email}</h4>
                <h4 className="card-text">{contact.phone}</h4>
            </div>
        </div>
    </div>)
}

export default ContactCard;
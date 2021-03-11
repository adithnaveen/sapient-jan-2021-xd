import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContactById } from '../actions/contacts-action';

class ContactDetails extends Component {

    componentDidMount() {
        let { id } = this.props.match.params;
        this.props.getContact(id);
    }

    render() {

        console.log("contact is : ", this.props.contact);

        let { contact } = this.props;
        if (!contact) contact = {};

        return (
            <div>
                <h3> Details of Contact  </h3>
                <div className="row">
                    <div className="col-md-4">
                        <img src={contact.picture} alt={contact.name} style={{ height: 200 }}
                            className="img img-thumbnail" />
                    </div>

                    <div>
                        <table class="table table-striped">
                            <tr>
                                <td class="table-primary">Name</td>
                                <td><div className="card-title">{contact.gender === 'male' ? "Mr: " : "Ms/Mrs: "}{contact.name}  </div></td>
                            </tr>
                            <tr>
                                <td class="table-primary">Email </td>
                                <td>  <div className="card-text">{contact.email}</div></td>
                            </tr>
                            <tr>
                                <td class="table-primary">Phone </td>
                                <td><div className="card-text">{contact.phone}</div></td>
                            </tr>

                        </table>

                    </div>
                </div>
            </div>
        )
    }
}

const stateAsProps = (reducers) => (
    {
        contact: reducers.contactsReducer.contact
    }
)

const actionsAsProps = {
    getContact: getContactById
}
export default connect(stateAsProps, actionsAsProps)(ContactDetails);
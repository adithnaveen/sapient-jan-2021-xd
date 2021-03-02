import React, { Component, Fragment } from 'react'

class AppHeader extends Component {
    render() {
        console.log(this.props);

        return (
            <Fragment>
                <h1>This from Header</h1>
                <hr />
                Company Name : {this.props.companyName},
                     Developed By : {this.props.createdBy}

            </Fragment>
        );
    }
}

export default AppHeader;
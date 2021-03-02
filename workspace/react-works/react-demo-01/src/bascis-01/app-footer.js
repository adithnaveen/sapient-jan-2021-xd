import React, { Component, Fragment } from 'react'

import './app-footer.css';

class AppFooter extends Component {
    render() {
        return (
            <div className="app-footer">
                <Fragment>
                    <h1>This from Footer</h1>
                    <p>Copy right 2021, {this.props.company},
                    {this.props.country}</p>
                </Fragment>
            </div>
        );
    }
}

export default AppFooter;
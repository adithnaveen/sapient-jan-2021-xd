import React, { Component } from 'react'

import AppHeader from './bascis-01/app-header';
import AppContent from './bascis-01/app-content';
import AppFooterFn from './bascis-01/app-footer-fn'


class App extends Component {

    render() {
        const footerProps = {
            company:"Sapient", 
            website: "http://ps.com", 
            year:2021
        }
        return (
            <div className="app">
                <AppHeader companyName="Sapient India Pvt Ltd.," createdBy="Naveen" />
                <AppContent />
                {/* <AppFooterFn company= {footerProps.company} website= {footerProps.website}  /> */}
                <AppFooterFn {...footerProps} /> 
            </div>

        );
    }
}

export default App;


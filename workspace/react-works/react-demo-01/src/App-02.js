import React, { Component } from 'react'

import AppHeader from './bascis-01/app-header';
import AppFooter from './bascis-01/app-footer';
import AppContent from './bascis-01/app-content';



class App extends Component {

    render() {
        const footerProps = {
            company:"Sapient", 
            country: "India"
        };

        return (
            <div className="app">
                <AppHeader companyName="Sapient India Pvt Ltd.," createdBy="Naveen" />
                <AppContent />
                {/* <AppFooter company={footerProps} /> */}
                <AppFooter company={footerProps.company} country={footerProps.country} />
            </div>
        );
    }
}

export default App;


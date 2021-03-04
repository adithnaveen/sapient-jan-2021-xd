import React, { Component } from 'react'


function loading (OldComponent) {
    return class NewComponent extends Component {
        render() {

            let output = <OldComponent {...this.props} /> 

            if(this.props.contacts.length===0){
                output = <p className="alert alert-danger">Loading Please Wait... </p>
            }
            return output; 
        }
    }
}

export default loading; 
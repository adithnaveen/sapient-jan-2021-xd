import React, { Component } from 'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

import ContactsList from './components/ContactList'
import ContactForm from './components/ContactForm'; 

import {createStore} from 'redux'; 
import rootReducer from './reducers/root-reducer';
// dont use this in production
import {composeWithDevTools} from 'redux-devtools-extension'; 
import {Provider} from 'react-redux';
const store = createStore(rootReducer, composeWithDevTools());


class App extends Component {
    render() {
        return (
           <Provider store={store}>
                <div className="container">
                <h2 className="alert alert-info">React Redux Application </h2>
                <div className="row">
                    <div className="col-md-5">
                        <ContactForm  />
                    </div>
                    <div className="col-md-7">
                        <ContactsList  />
                    </div>
                </div>

            </div>
           </Provider>
        );
    }
}
ReactDom.render(<App/>, document.getElementById("root")); 
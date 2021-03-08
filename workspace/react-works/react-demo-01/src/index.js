/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App-02';
// import App from './App-03';
// import App from './apps/App-Event-04'
// import App from './apps/App-Product'
// import AppLifeCycle from './apps/App-Life-Cycle-06'
import ContactApp from './apps/Contact-App-08'

ReactDOM.render(
    <ContactApp />,document.getElementById('root')
);

export default ContactApp; */
//////////////////////////////////////////////////////////////////////////////

// rendering the data on DOM, with java script 
/* let h1 = document.createElement("h1"); 
h1.setAttribute("id", "heading1"); 
h1.innerHTML = "Welcome to React JS"; 
document.getElementById("root").append(h1); 



let h2 = document.createElement("h2"); 
h2.setAttribute("id", "heading2"); 
h2.innerHTML = "Welcome to React JS"; 
document.getElementById("root").append(h2); 


let count = 1; 
setInterval(() => {
    let h1 = document.getElementById("heading1"); 
    h1.innerHTML ="Hello React JS"; 
    console.log("Updating the DOM ", count);


    let h2 = document.getElementById("heading2"); 
    h2.innerHTML ="Hello React JS"; 
    console.log("Updating the DOM for H2  ", count);
}, 1000);
*/ 

//////////////////////////////////////////////////////////////////////////////



import React, { Component } from 'react'
import ReactDOM from 'react-dom';


const SubHeding = (props) => {
    return (
        <h2>This is sub heading </h2>
    ); 
}

class App extends Component {
    state = {title: "Hello World"}
    count = 1; 

    componentDidMount(){
        setInterval(() => {

        let {title} = this.state;
        if(this.count %5===0) {
            if(title ==="Hello World") {
                title ="Hello World Again... "
            }else {
                title ="Hello World"; 
            }
        }
            this.setState({title}, 
                () =>  console.log("Updated the DOM ", (this.count++), "Times")); 
        }, 1000);
    }

    render() {
        return (
            <div>
                <h1>{this.state.title } </h1>
                <SubHeding /> 
            </div>

        );
    }

}

ReactDOM.render(<App/> , document.getElementById("root")); 
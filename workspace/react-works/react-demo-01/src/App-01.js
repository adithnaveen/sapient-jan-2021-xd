import React, { Component } from 'react'


class App extends Component {

  render() {
    const msg = "Hello World";
    const name = "Sapient India"
    return (

      <div>
        <h1> {msg} App Component</h1>
        <p>just another para</p>
        <p>Company Name {name} </p>
      </div>
    );
  }
}

export default App;
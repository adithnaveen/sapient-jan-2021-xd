import React, { Component } from 'react'

// import ProductForm from '../ctrl-unctrl-comp/product-form'
import ProductForm from '../ctrl-unctrl-comp/product-form-ctrl'

class App extends Component {

    render() {
        return (
            <div className="container">
                <h1>Using Refs - Uncontrolled Components</h1>
                <hr />
                <div className="row">
                    <div className="col">
                        <ProductForm />
                    </div>
                    <div className="col">
                        For Shwoing list of products
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
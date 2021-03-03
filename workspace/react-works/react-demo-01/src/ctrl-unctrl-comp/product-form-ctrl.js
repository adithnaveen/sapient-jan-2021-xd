// to show working of un-controlled component 

import React, { Component } from 'react'

import TextField from './atoms/fields'

import 'bootstrap/dist/css/bootstrap.css'

class ProductForm extends Component {


    state = {
        pname: '',
        pprice: '',
        contact: '',
        email: '',
        pic: '',
        formError: {
            name: "Product Name is Required",
            price: "Product Price is Required",
            contact: "Customer Contact Required",
            pic: "Product Picture is Required",
            email: "Customer Email Required"
        },
        errorMessages: null
    };


    tfHandler = (evt) => {
        // first version before switch case 
        // this.setState({ [evt.target.name]: evt.target.value })

        let { name, value } = evt.target;
        let { formError } = this.state;

        switch (name) {
            case 'pname':
                if (!value || value.length === 0) {
                    formError.name = "Product Name is Required"
                } else if (value.length < 3 || value.length > 20) {
                    formError.name = "Product Name should be between 3 to 20 chars";
                } else {
                    formError.name = '';
                }
                break;
            case 'pprice':
                if (!value || value.length === 0) {
                    formError.price = "Product Price is required"
                } else if (!value.match(/\d{2,4}$/)) {
                    formError.price = "Please enter product price between 2 to 4 number"
                } else {
                    formError.price = '';
                }
                break;

            case 'contact':
                if (!value || value.length === 0) {
                    formError.contact = "Customer Contact Required"
                } else if (!value.match(/\d{10,12}$/)) {
                    formError.contact = "Contact should be between 10 to 12 chars"
                } else {
                    formError.contact = '';
                }
                break;

            case 'email':
                if (!value || value.length === 0) {
                    formError.email = "Customer Email Required"
                } else if (!value.match(/[a-zA-Z0-9._]+@[a-zA-Z0-9]+[^a-zA-Z0-9]{1}[com|in]{2,3}/)) {
                    formError.email = "Email Format Invalid"
                } else {
                    formError.email = '';
                }
                break;
            case 'pic':
                if (!value || value.length === 0) {
                    formError.pic = "Picture Required"
                } else if (value.length < 3) {
                    formError.pic = "Please enter valid picture URL ";
                } else {
                    formError.pic = '';
                }
                break;
            default:
                break;
        }

        this.setState({ [name]: value, formError });

    }

    validateForm = (formErrors) => {
        let valid = true;
        Object.values(formErrors).forEach(err => valid = valid && err.length === 0);
        return valid;
    }

    // submitHandler 
    addNewProduct = (event) => {
        console.log("Submit Handler Called... ");
        event.preventDefault();

        let { formError } = this.state;

        let errorMessages;

        if (this.validateForm(formError)) {
            errorMessages = null;
            this.setState({ errorMessages });
            alert("Form Submitted... ")
        } else {
            errorMessages = Object.values(formError).map((err, idx) =>
                err.length === 0 ? null : <li key={idx}>{err}</li>
            )

            // you have to update update the view for this 
            // invoke render (update setState) which will invairably
            // call render and view gets updated 
            this.setState({ errorMessages });
        }
    }

    render() {
        return (
            <div className="container">

                <pre>{JSON.stringify(this.state, null, 3)}</pre>

                <h3>Product Entry Form</h3>
                <div className="container" >
                    <form className="form" onSubmit={this.addNewProduct}>
                        <TextField type="text" caption="Product Name" name="pname" handler={this.tfHandler} />
                        <TextField type="number" caption="Product price" name="pprice" handler={this.tfHandler} />
                        <TextField type="text" caption="Customer Contact" name="contact" handler={this.tfHandler} />
                        <TextField type="email" caption="Customer Email" name="email" handler={this.tfHandler} />
                        <TextField type="text" caption="Proudct Picture" name="pic" handler={this.tfHandler} />
                        <button className="btn btn-danger">Submit</button>
                    </form>
                </div>
                <hr />
                <ul>
                    {this.state.errorMessages}
                </ul>
            </div >
        );
    }
}

export default ProductForm;
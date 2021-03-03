import React from 'react'
 


export default function TextField ({type, caption, name, handler}) {
    return(
        <div className="form-group row">
        <label htmlFor="product-name" className="control-label col-md-4">{caption}</label>
        <div className="col-md-8">
            <input type={type} onChange={handler} name={name} className="form-control" />
        </div>
    </div>
    );
}

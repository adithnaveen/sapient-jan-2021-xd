import React from 'react'

import './app-footer.css';

export default function AppFooterFn(props) {
    console.log(props);
    return (
        <div>
            <hr />
            <p className="app-footer">This is footer</p>
            <p className="app-footer">Company Name : {props.company},
             WebSite: <a href={props.website}>Sapient</a> , Year : {props.year} </p>
        </div>
    );
}

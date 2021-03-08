import React, { Suspense } from 'react'
import {  Route, BrowserRouter as Router, Switch } from "react-router-dom";
  
// import Hello from './Hello'
// import Sample from './Sample'
// import Home from './Home'

import Home from './Home'
const Sample = React.lazy(() => import('./Sample'));
const Hello = React.lazy(() => import('./Hello'));
const NotFound = React.lazy(() => import('./NotFound'));


const  App =() =>  {
    return (
        <div>
            <Router>
                <Suspense fallback ={<div>Loading... </div>}>
                    <Switch>
                        <Route exact={true} path="/">
                                <Home />
                        </Route>
                        <Route exact={true} path="/sample">
                            <Sample />
                        </Route>
                        <Route exact={true} path="/hello">
                            <Hello />
                        </Route>
                        <Route component ={NotFound} /> 
                    </Switch>
                </Suspense>
            </Router>
        </div>
    )
}
export default App; 
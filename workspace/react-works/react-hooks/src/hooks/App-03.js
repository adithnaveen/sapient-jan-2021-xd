// to show working of use effect, generally used for additional jobs like logging / fetch etc 

import React, { useState, useEffect } from 'react'

function App() {
    const [name, setName] = useState("Kartik");
    const [admin, setAdmin] = useState(false);
    // case 1: when you dont pass [] on the useEffect it will execute n number of times 
    // case 2 : when you pass [] then only once for all the event 
    // case 3: [<named>] then only the specific useState 
    useEffect(() => {
        document.title = `This is ${name} Page`;
        console.log(`This is ${name} Page`);
    }, [name]); // the useEffect is invoked for any state change, it will be invoked n number of times 

    useEffect(() => {
        console.log(`The user is ${admin ? "Admin" : "Not Admin"}`);
    }, [admin])

    return (
        <div>
            <p>Hello Mr. {name} </p>
            <p>Your Are : {admin ? "Admin" : "Not Admin"}</p>

            <button onClick={() => { setName("Kartik Batra") }}>Get Full Name</button>

            <button onClick={() => { setAdmin(true) }}>Login As Admin </button>

        </div>
    );

}

export default App;

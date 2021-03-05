// first react hook 

import React, { useState } from 'react'

const App = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Kumar");
    const [checked, setChecked] = useState(false);

    return (
        <div>
            <h1>React Hook Example  </h1>
            <p>Count Value {count}</p>
            <p>The Name is :  {name}</p>

            <p>Check box Status {checked ? "Checked" : "Un-Checked"}</p>

            <button onClick={() => {
                setCount(count + 1)
            }}
            >Increment </button>

            <button onClick={() => {
                setName("Naveen Kumar")
            }}>Change Name</button>

            <input type="checkbox" value={checked} onChange={() => {
                setChecked((checked) => !checked)
            }} />
        </div>
    )
}


export default App;

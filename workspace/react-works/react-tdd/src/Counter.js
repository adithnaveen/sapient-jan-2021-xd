import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Counter App</h1>
            <h3 id="count-value">{count}</h3>

            <button id="incr-btn" onClick={() => { setCount(count + 1) }} >Increment</button>

            <button id="decr-btn" onClick={() => { setCount(count - 1) }} >Decrement</button>


        </div>
    );
}
export default Counter;
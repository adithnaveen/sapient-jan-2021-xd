import React, {useReducer} from 'react'; 


function App() {
    // reducer is similar to state but it takes a arrow
    // function as first argument
    // and second argument is initial value
    const [number, setNumber] = useReducer((number, newNumber)   =>number +newNumber, 0); 

    return (
        <h1 onClick={() => {setNumber(20)}}>{number}</h1>
    );

}

export default App; 



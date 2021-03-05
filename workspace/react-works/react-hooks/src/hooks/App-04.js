import React, { useState, useEffect } from 'react'

function App () {
    const [data, setData] = useState([]);

    // like componentDidMount, componentDidUpdate
    useEffect(() =>{
        fetch("https://api.github.com/users")
            .then(resp => resp.json())
            // .then( res =>  setData(res));  
            .then( setData); 
    }, [])

    if(data){
        return (
            <div>
                <ul>
                    {data.map((user, key) => (
                        <li key={user.id}>{user.login}</li>
                    ))}
                </ul>

                <button onClick={() =>{setData([])}}>Remove</button>
            </div>
        );
    }

    return <p>No Users Found </p>

}


export default App; 
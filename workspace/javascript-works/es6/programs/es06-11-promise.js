import fetch from 'cross-fetch';

const data = fetch("https://jsonplaceholder.typicode.com/todos/1")

data
    .then(value =>value.json())
    .then(jsonVal => console.log(jsonVal))
    .catch(err => console.log("Error ", err))

/////////////////////////////////////////////////  

const p = new Promise((resolve, reject) => {
    // resolve("The promise is resolved... ")
    reject(Error("Oops i couldnt keep my promise...."))
})

p.
    then(data => console.log(data)).
    catch(err => console.log(err))
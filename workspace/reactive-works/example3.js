const { RxHR } = require('@akanass/rx-http-request');
const { map } = require('rxjs/operators');

const BASE_PATH = `https://jsonplaceholder.typicode.com/todos/100`;

const data = RxHR.get(`${BASE_PATH}`, {json: true}).pipe(map(response => response.body));

console.log(data);

const todoWithID = data
    .pipe(
        map(response =>  {
            console.log("testing "  , response);
            if(response.id===100) {
                console.log("Matched id with 100");
            }
        }))
    .pipe(
        map(response =>  {
            console.log("testing1111 "  , response);
        })); 


console.log("Hello");
todoWithID.subscribe(val => val);
todoWithID.subscribe(val => val);


const testPromise = new Promise(resolve => {
    console.log("i'm in promise");
    setTimeout(() => {
        resolve("I'm from promise")
    }, 1000);
})

console.log("before promise display");
testPromise.then(resp => console.log(resp)); 
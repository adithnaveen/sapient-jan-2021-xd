import {Observable} from 'rxjs';


const ticker = Observable.create((subject) => {
    console.log("I'm in Observable => ");

    const interval = setInterval(() => {
        subject.next("Inside Interval"); 
    }, 1000);
}); 

const sub = ticker.subscribe(console.log); 

setTimeout(() => {
    sub.unsubscribe(); 
}, 10000);

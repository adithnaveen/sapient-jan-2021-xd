// import { range } from "rxjs";
// import { map } from "rxjs/operators/map";
// import {filter} from 'rxjs/operators/filter'; 

const { range } = require('rxjs');
const { map, filter } = require('rxjs/operators');


range(1, 200)
  .pipe(
    filter(x => x % 2 === 1),
    map(x => x + x)
  )
  .subscribe(x => {
    console.log(x);
  });
   

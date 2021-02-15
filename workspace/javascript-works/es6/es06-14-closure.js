// closures are a function inside a function 
// they can access outer function variable 
// and also return 
// or access global variables 


function init() {
    let name = "Mozilla"; 
   function display() {
       console.log(name);
   }
   return display();
}


let myfunction = init(); 
myfunction;  


function maths(num) {
    // any variable 
    return function(mul) {
        return num * mul; 
    }
}

let num1 = maths(10)
let num2 = maths(20)

console.log(num1(3));  // 30 
console.log(num2(3));  // 60 


function myfunc() {
    let count = 0; 
    return {
        increment : function() {
            count ++; 
        }, 

        decrement : function() {
            count --; 
        }, 
        getCount : function() {
            return count; 
        }

    }
}

let mf = myfunc(); 
console.log(mf);
mf.increment();
mf.increment();
mf.increment();
mf.increment();
console.log(mf.getCount());



function sum(val1) {
    let initialVal = 100; 
    return function(val2) {
        return function(val3) {
            return function(val4) {
                return initialVal + val1 + val2 +val3 +val4; 
            }
        }
    }
}

let sum1 = (val1) =>  {
    let initVal = 100; 
    return (val2) => (val3) => (val4) => initVal + val1 + val2 +val3 +val4; 
}



// currying 
// console.log(sum(10)(20)(30)(40));
let firstCall = sum(10)
console.log(firstCall);
let secondCall = firstCall(20); 
console.log(secondCall);
let fourthCall = secondCall(30)(40)
console.log(fourthCall);

// with sum1 function 
console.log(sum1(10)(20)(30)(40));
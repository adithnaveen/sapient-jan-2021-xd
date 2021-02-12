// var function scope 

// good not to use var in the es6 standard 
function test() {
    for(let i=0; i<10; i++) {
        console.log("in the loop", i);
    }
    // since the variable is declared as let it is only within the block 
  //  console.log( "out of loop " +i);
}

test() 
// the socpe of let is only with in the block declared 
/*if(true) {
    let foo = 'bar'; 
    const bar = 'foo'
}

console.log(foo);
console.log(bar);
*/ 

const firstVar = 'First Variable' ; 
{
    console.log("First Var Value : " , firstVar);
    const secondVar = 'Second Variable'; 
    {
        const thirdVar = 'Third Variable'; 
    }
}

console.log(firstVar);
// console.log(secondVar);


let myobj = {name:"Harry"}
 myfreezeVar = Object.freeze(myobj); 
console.log(myfreezeVar);
myobj.age = 33; 
// myfreezeVar.age = 20; 


console.log(myfreezeVar);








const num = {type:"integer"}; 
num.type = "float"
console.log(num);

// hoising 
helloWorld(); 

function helloWorld() {
    console.log('====================================');
    console.log("Hello Wolrd");
    console.log('====================================');
}

console.log(myvariable);

var myvariable=100; 
console.log(myvariable);


console.log(letvariable); 
let letvariable = 200; 


/* does not work as class Emp{} decl after, as JS hoisting will not work */ 
// new Emp()
// class Emp{}
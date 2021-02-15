function myFunction(name1, name2, name3) {
    console.log(name1, name2, name3);
}

myFunction("Vidya", "Ujjwal", "Mahavir")
myFunction("Vidya", "Ujjwal")

function myFunction1(...names) {
    console.log(names);
}
myFunction1("Vidya", "Ujjwal", "Mahavir")
myFunction1("Vidya", "Ujjwal")
myFunction1()

// if you are using rest operator then that should be last 
function displayProducts(category,  ...products) {
    console.log("Category ", category);
    console.log("Products ", products);
}

displayProducts("Stationary", "Pen",  "Pencil", "Eraser", "Compass")

let p1 = {
    name:"Shalini", 
    city:"Hyderabad", 
    email:"shalini@ps.com"
}

function sayHello(name, city) {
    console.log(`Name is ${name}, City is : ${city}`);
}
function sayHello1 ({city,name}) {
    console.log(`Name is ${name}, 
     City is : ${city}`);
}
 
sayHello("Shalini", "Hyderabad")
sayHello(p1.name, p1.city)
sayHello1(p1)

const str ="Learning Javascript new way "
console.log(str.startsWith("Learning")); // true 
console.log(str.startsWith("Something")); // false 

console.log(str.endsWith("way")); // true 
console.log(str.endsWith("Learning")); // false  

console.log(str.includes("Javascript")) // true 
console.log(str.includes("new")) // true 
console.log(str.includes("Sapient")) // false

console.log(str.repeat(2));


// keys can be dynamic 
// let i =1; 
// const myarr ={
//         ['name' + i++ ] : i, 
//         ['name' + i++ ] : i, 
//         ['name' + i++ ] : i
// }

// console.log(myarr.name1);
// console.log(myarr.name2);
// console.log(myarr.name3);

let i=0; 
const myarr1 ={
    [ `name${++i}` ] : i, 
    [ `name${++i}` ] : i, 
    [ `name${++i}` ] : i
}

console.log(myarr1.name1);
console.log(myarr1.name2);
console.log(myarr1.name3);











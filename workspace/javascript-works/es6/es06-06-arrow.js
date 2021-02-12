const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];


const fnGetLength = () =>  {
    for(let m of materials) {
        console.log(m);
    }

    console.log("---------------------------");

    for(let m in materials) {
        console.log(m);
    }
}

fnGetLength(); 

const add = (x, y) => { return x + y}; 
console.log(add(10, 20));

const sayHello = () => console.log("Hello ");
const sayHello1 = (name) => console.log("Hello ", name );


sayHello1("Harry"); 
/* function add(x, y) {
    return x + y; 
}
*/ 
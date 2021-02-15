const person ={
    first:"Somen", 
    last: "Kumar", 
    location:  {
        city: "Bengaluru", 
        state: "Karnataka"
    }
};

// const first = person.first; 
// const last = person.last;

const {first:firstName, last} = person; 
const {city:place, state} = person.location; 

console.log(`Hello ${firstName}, ${last} you are from City: ${place}, State : ${state}`);

const box = {color:'black', height:20, width:50}; 

const {color, height, width=15}= box; 

console.log(`color ${color}, height ${height}, width ${width}`);

// destructing with arrays 
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];

  const [acid1, acid2, , acid4] = materials; 
//   const [acid3] = 
  console.log(acid1);
  console.log(acid2);
//   console.log(acid3);
  console.log(acid4);


// spread / rest  operators  

let nums =[12,23,34,45,67,78]; 
console.log(nums);

let anums = [100, 200, nums]
console.log(anums);


let anums1 = [100, 200, ...nums]
console.log(anums1);


let anums2 = [...anums1]; 
console.log(anums2);
anums1.push(777); 
console.log(anums2);

// the person object is put 
let employee ={designation:"software engg", project:"Development",person }; 
console.log(employee);

// the values of person object is extracted and push 
let employee2 ={designation:"software engg", project:"Development",...person }; 
console.log(employee2);

let employee3 ={designation:"software engg", project:"Development"}; 
let employee1 = {...employee}
console.log(employee3===employee1);

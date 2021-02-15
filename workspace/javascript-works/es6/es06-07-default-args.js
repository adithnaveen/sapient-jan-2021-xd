// version 1.0 
// function calcualateSalary(salary, tax, incentives) {
//     if(tax === undefined) {
//         tax = 0; 
//     }
//     if(incentives === undefined) {
//         incentives =0; 
//     }
//     return salary + tax + incentives; 
// }


// version 2.0 (little better )
// function calcualateSalary(salary, tax, incentives) {
//    tax = tax || 0 ; 
//    incentives = incentives || 0; 
//     return salary + tax + incentives; 
// }

// version 3.0 
function calcualateSalary(salary, tax=0, incentives=0) {
    
     return salary + tax + incentives; 
 }


// const total = calcualateSalary(1000, 200, 800); 
const total = calcualateSalary(1000, undefined , 800); 

console.log(total);

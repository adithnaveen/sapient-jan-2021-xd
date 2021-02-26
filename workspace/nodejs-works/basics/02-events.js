const EventEmitter = require("events"); 
const eventEmitter = new EventEmitter(); 



eventEmitter.on("myjob", () => {
    console.log("Sample event invoked... myjob");
}); 

eventEmitter.on("yourjob", () => {
    console.log("Sample event invoked... your job");
}); 

eventEmitter.on("maths", (num1, num2) => {
    console.log("Addition is " , (num1 + num2));
}); 

eventEmitter.emit("myjob"); 
eventEmitter.emit("yourjob"); 
eventEmitter.emit("maths", 10,20); 

class Person extends EventEmitter {
    constructor(name, salary) {
        super(); 
        this._name = name; 
        this._salary = salary; 
    }
    get name() {return this._name}; 
    set name(pname) {this._name = pname; }

    get salary() {return this._salary;}
    set salary(psalary) {this._salary = psalary; }
}

let p1 = new Person("Vidya", 1234); 
let p2 = new Person("Ganesh", 2233); 

p1.on("person", () => {
    console.log("Persona Name : ", p1.name + ", Salary " + p1.salary); // p1.salary -> p1.getSalary(); 
})

p2.on("person", () => {
    console.log("Persona Name : ", p1.name + ", Salary " + p1.salary);
})

p1.emit("person")
console.log("--------------------------");
p2.emit("person")
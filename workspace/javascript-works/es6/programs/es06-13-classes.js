class Person {
    // javascript implicitly creates the variable 
    constructor(name, city=23) {
        this.name = name; 
        this.city = city; 
    }

    get getname() {
        return this.name; 
    }
    set setname (name ) {
        this.name = name.toUpperCase();
    }

    printPerson() {
        console.log("Name is ", this.name);
        console.log("City is ", this.city);
    }

    static commonFunction() {
        console.log("i'm a common function which can be used by any object... ");
    }


}

// inheritance 
class Employee extends Person {
    constructor(name, city, designation) {
        super(name, city)
        this.designation = designation; 
    }

    printPerson() {
        super.printPerson();
        console.log("Designation ", this.designation);
    }

}

console.log(Person.commonFunction());

// create an object (allocating memory, heap)

let p1 = new Person("Sahil", 22); 
console.log(p1);
p1.printPerson(); 

p1.setname  = "Sahil Kumar"
p1.printPerson(); 

console.log(typeof(p1));

let p2 = new Person("Venkat")
console.log(p2);
p2.printPerson(); 

console.log("--------------------------------");
let e1 = new Employee("Rishab", "Delhi", "Engineer"); 
console.log(e1);
e1.printPerson();

/*
let str = "Hello"
console.log(typeof(str));

let num = 123; 
console.log(typeof(num));

*/ 
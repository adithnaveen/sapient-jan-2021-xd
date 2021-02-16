// creating the class 
// Immutable - With Constructors 
// Mutable - Getters & Setters 

class Car {
    constructor(doors, engine, color) {
        this.doors = doors; 
        this.engine = engine; 
        this. color = color; 
    }
}

const ford = new Car(4, "Turbo", "Blue"); 
console.log(ford);


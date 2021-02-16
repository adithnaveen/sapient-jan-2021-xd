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

class SUV extends Car {
    constructor(doors, engine, color, wheelDrive) {
        super(doors, engine, color); 
        this.wheelDrive = wheelDrive; 
    }
}


const ford = new Car(4, "Turbo", "Blue"); 
console.log(ford);

const fordEndeveour = new SUV(4, "Turbo", "Red", "Four Wheel Drive")
console.log(fordEndeveour);


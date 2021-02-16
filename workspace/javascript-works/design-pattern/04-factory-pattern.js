
// factory pattern 
class Car {
    constructor(doors, engine, color) {
        this.doors = doors; 
        this.engine = engine; 
        this. color = color; 
    }
}

class CarFactory {
    createCar(type) {
        switch (type) {
            case 'ford':
              return new Car(4, "Turbo", "Black")
            case 'bmw':
              return new Car(3, "V8", "White")
            default:
                return null; 
        }
    }
}
const factory = new CarFactory(); 

const myFord = factory.createCar("ford");
console.log(myFord);

const mybmw = factory.createCar("bmw")
console.log(mybmw);







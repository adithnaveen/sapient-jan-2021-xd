class Car {
    constructor(doors, engine, color) {
        this.doors = doors; 
        this.engine = engine; 
        this. color = color; 
    }
}
class SUV {
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
class SuvFactory {
    createCar(type) {
        switch (type) {
            case 'x1':
              return new SUV(4, "TurboJet", "Grey"); 
            case 'santafe':
              return new SUV(4, "V6", "Maroon")
            default:
                return null; 
        }
    }
}

let carMixin = {
 
    premierCarSound() {
        console.log("gzzzzz.gzzzz.z..");
    }, 
    normalCarSound() {
        console.log("Wrrrom... Wrrrom... ");
    }
}

const carFactory = new CarFactory(); 
const suvFactory = new SuvFactory(); 

const autoManufacturer = (type, model) => {
    switch (type) {
        case "car":
            return carFactory.createCar(model); 

        case "suv":
            return suvFactory.createCar(model); 
    }
}

Object.assign(Car.prototype, carMixin)

const bmw = autoManufacturer("car", "bmw")

console.log(bmw);
bmw.premierCarSound(); 
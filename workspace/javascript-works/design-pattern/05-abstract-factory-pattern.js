// abstract factory pattern 

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

const x1 = autoManufacturer("suv", "x1")

console.log("X1 BUILDING ", x1);



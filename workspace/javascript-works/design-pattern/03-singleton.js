// single ton 

let carInstance = null; 
 
class Car {
    constructor(doors, engine, color) {
        if(!carInstance){
            this.doors = doors; 
            this.engine = engine; 
            this.color = color; 
            carInstance = this; 
        }else {
            return carInstance; 
        }
    }
}


const ford = new Car(4, "Turbo", "Blue"); 
const ford1 = new Car(5, "V6", "red"); 
console.log(ford);
console.log(ford1);


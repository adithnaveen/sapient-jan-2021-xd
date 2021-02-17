
// version 1 

/* let car ={
    move: true, 
    break:"should have break"
}; 

let ford = {
    wheels: 4, 
    doors:5
}

ford.__proto__ = car; 

console.log(car);
console.log(ford);
console.log(ford.move);
console.log(ford.break); */

// version 2 
let car = {
    break:"Has Breaks", 
    speed:0, 
    move() {
        console.log("Moves with some speed : ", this.speed);
    }, 

    set carSpeed(speed) {
        this.speed = speed; 
    }, 
    get carSpeed() {
        return this.speed; 
    }
}

let ford = {
    wheels:4, 
    __proto__:car, 
    specification() {
        console.log("All ford cars have safety kit");
    }
}

let ikon = {
    type:"SUV", 
    __proto__ : ford
}
// overriding 
// ikon.move = function() {
//     console.log("ford Car is Moving... ");
// }



console.log(ford);
ford.move();
console.log(ikon);
ikon.specification() ; 
ikon.move(); 
ikon.carSpeed = 10; 
ikon.move(); 
console.log("Getting the speed of the Car : ", ikon.carSpeed);








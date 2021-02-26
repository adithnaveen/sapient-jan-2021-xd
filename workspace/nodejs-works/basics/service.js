const sum = (num1, num2) => num1 + num2;
const PI = 3.14; 

const sample = () => console.log("hello");


class MyBusinessLogic {
    constructor(name) {
        console.log("Creating MyBusinessLogic");
        this.name = name;
    }
}

// version 1 
// module.exports.sum = sum; 
// module.exports.PI = PI;
// module.exports.MyBusinessLogic  = MyBusinessLogic; 


// version 2 
// module.exports = {sum:sum, PI:PI, MyBusinessLogic:MyBusinessLogic}

// version 3 (possible from es6)
module.exports = {sum, PI, MyBusinessLogic}
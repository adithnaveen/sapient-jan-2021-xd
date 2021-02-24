let myvar = "Hello";
function log(message) {
    console.log(message);
}
let message = "Hi How are you";
log(message);
let numberVar;
let boolVar;
let strVar;
let anyVar;
let numArr = [1, 2, 3, 4, 5];
let anyArr = [1, "hello", true];
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
let myColor = color.Red;

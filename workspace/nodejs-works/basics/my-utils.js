module.exports.factorial = factorial = function(num) {
    if(num <=1) return 1; 
    return num * factorial(num-1); 
}

module.exports['fibonacci'] = function(num) {
    console.log("Your Fibonacci series goes Here : ", num );

    return num; 
}
 
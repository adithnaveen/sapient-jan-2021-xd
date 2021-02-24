// ahead of time 
function totalLength(x, y) {
    let total = x.length + y.length;
    // type gaurd 
    if (x instanceof Array) {
        x.push("New Content");
    }
    if (x instanceof String) {
        x.substr(0, 2);
    }
    return total;
}
totalLength([1, 2, 4], "Hello");
totalLength("Hello", [1, 2, 4]);

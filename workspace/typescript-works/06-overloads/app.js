// ahead of time, union data type 
function totalLength1(x, y) {
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
totalLength1("Hello", "hi");


// intensive programs go here // to run in background 

function sum() {
    var result = 0; 
    for(var i=0; i<1000000; i++) {
        console.log('====================================');
        console.log("in Outer loop ");
        console.log('====================================');
        for(var j=0; j<100000; j++) {
        result += j; 
        }   
    }

    return result; 
}

onmessage = function(event) {
    var result = sum(); 

    postMessage({
        result : result 
    });
}

// global 
int1=100; 
var int2 = 200; 

function fn1() {
    console.log('====================================');
    console.log("Hi i'm from external File from function ");
    console.log('====================================');
}


function varEx() {
    var strVar = "MyString"
    var intVar = 100; 
    var boolVar = true; 

    console.log(strVar);
    console.log(intVar);
    console.log(boolVar);

    console.log(strVar + intVar); // it acts as concatination 
    console.log(intVar =="100"); // this is valid in JS

    // ===, !==, 
    console.log(intVar ==="100"); // this will give you false because mismatch of Datatype 

    console.log(10/"hello");
    console.log(10/"hello"==NaN);
    console.log(isNaN(10/"hello"));

    console.log(2 << 1);
    // ?, *, +, . 
}

function fnOffers() {
    var name = prompt("Enter Your Name")
    var age = parseInt(prompt("Enter Your Age", "18")); 

    if(age>50) {
        console.log("You have senior citizen offer: "+ name);
    }else if(age > 30 && age<50){
        console.log("Visit store for the offer : "+ name);
    }else {
        console.log("Please apply coupon code to get offer: " + name);
    }
}

function fnLoops() {
    var number = 0; 
    var result = 0; 

    do{
        result = result + number; 
    }while ((number = parseInt(prompt("Enter a number", "0"))) !=0) 
    
    console.log("Total Value is " + result);

}

function fnLoopsConfirm() {
    var number = 0; 
    var result = 0; 

    do{
        number = parseInt(prompt("Enter a number", "0")) 
        result = result + number; 
    }while (confirm("Do you want to contine")) 
    
    console.log("Total Value is " + result);
}

function display() {
   console.log("Display without args");
   console.log(display.arguments.length) 
   
   for(var i=0; i<display.arguments.length; i++) {
       console.log("Argument Passed: " + display.arguments[i]);
   }

   arr = new Array()
   console.log(arr);
}


function fnVarScope() {
    int3=300; // global 
    var int4= 400;  // local 

    console.log(int3);
    console.log(int4);

    for(var i=0; i<5;i++) {
        console.log(i);
    }
    console.log("-----------------------------");
    console.log(i);

    //////////////////////////////////
    for(let j=0; j<5;j++) {
        console.log(j);
    }
    console.log("-----------------------------");
    console.log(j);

}

function fnVarScope2() {
    console.log(int3);
    console.log(int4);
}



// function display(val1) {
//     console.log("One Arg Display" +val1);
// }
const readline = require("readline"); 

const rl = readline.createInterface({input:process.stdin, output:process.stdout}); 

let num1 = Math.floor((Math.random() *20)+1); 
let num2 = Math.floor((Math.random() *20)+1); 

let answer = num1 + num2; 
 
// accept value from command line 
rl.question(`what is sum of ${num1}, ${num2} ?\n`, (userInput) => {
    if(parseInt(userInput) ===answer){
        console.log("you are correct");
        rl.close(); 
    }else{
        rl.setPrompt("Sorry wrong value, enter again"); 
        rl.prompt();
        rl.on("line", (userInput) => {
            if(parseInt(userInput) ===answer){
                console.log("you are correct");
                rl.close(); 
            }else {
                rl.setPrompt("Sorry wrong value, enter again"); 
                rl.prompt();
            }
        })
    }
})

rl.on("close", () => {
    console.log("invoked close event & going out");
})
 
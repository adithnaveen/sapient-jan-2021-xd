const fs = require("fs"); 


// fs.writeFile("sample.txt", "Sample Data Goes Here", (err) => {
//     if(err) {
//         console.log(err);
//     }else {
//         console.log("File Created... ");
//     }
// } )


fs.readFile("sample.txt", "UTF-8" , (err, data) => {
    if(err) {
        console.log("Some error " + err);
    }else {
        console.log(data);
    }
})


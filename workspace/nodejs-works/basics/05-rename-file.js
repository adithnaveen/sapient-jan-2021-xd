const fs = require("fs"); 

// rename the file (sync) - in procedural languages 
// try {
// // fs.rename("sample.txt", "sample1.txt"); 
// }catch(err){
// }

// async 
fs.rename("sample.txt", "sample1.txt", (err) => {
    if(err) {
        console.log("Error while renaming ", err);
    }else {
        console.log("File renamed... ");
    }
})
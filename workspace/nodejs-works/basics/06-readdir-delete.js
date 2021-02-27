const fs = require("fs"); 

fs.readdir("./myfolder", (err, files) => {
    'use strict';
    if(err) {
        console.log("Error reading folder ");
    }else {
        for (let file of files) {
            fs.unlink( "./myfolder/"+file, (err) => {
                if(err) {
                    console.log("File not found");
                }else {
                    console.log("File deleted... ");
                }
            })
        }
    }
} )
const fs = require("fs"); 
const zlib  = require("zlib");

const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip(); 

// const readStream = fs.createReadStream("./sample.txt", "UTF-8"); 
const readStream1 = fs.createReadStream("./sample2.txt.gz"); 
const writeStream = fs.createWriteStream("./sample1.txt", "UTF-8"); 
// const writeStreamZip = fs.createWriteStream("./sample2.txt.gz", "UTF-8"); 
const writeStreamNewFile = fs.createWriteStream("./sample3.txt", "UTF-8"); 

// the data will be read in the form of chunks 
// readStream.on("data", (chunk) => {
//     console.log("--- "+chunk);
//     writeStream.write(chunk); 
// })

// writeStream.on("finish", () => {
//     console.log("sample1.txt closed... ");
// })

// storing the sample.txt to zip 
// readStream.pipe(gzip).pipe(writeStreamZip); 


// update this program to get the zip content to 
// unzipped file 
readStream1.pipe(gunzip).pipe(writeStreamNewFile); 
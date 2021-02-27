
const http = require("http");
const fs = require("fs"); 

// to send html file to client 
// http.createServer((req,res) => {
//     const rs = fs.createReadStream("./static/index.html"); 
//     res.writeHead(200, {'content-type': 'text/html'});
//     rs.pipe(res);
// }).listen(3000);


http.createServer((req,res) => {
    const rs = fs.createReadStream("./json/emp.json"); 
    res.writeHead(200, {'content-type': 'text/html'});
    rs.pipe(res);
}).listen(3000);
// hello world 

const http = require("http");

const server= http
    .createServer((req, res) => {
        // res.write("Hello World From NodeJs")
        // res.end();

        // root of the web application 
        'use strict';
        if (req.url === "/") {
            res.write("Root Page invoked... ");
        } else {
            res.write("Some other page invoked... ");
        }
        res.end();
    });


server.listen('3000'); 

    console.log("Server Started on 3000");
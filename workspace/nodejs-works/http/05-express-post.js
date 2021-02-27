const express = require("express"); 
const path = require("path"); 
const app = express(); 

const bodyParse = require("body-parser"); 
const bodyParser = require("body-parser");

// false means i dont part any images 
app.use(bodyParser.urlencoded({extended:false}))

// from the browser the req is get 
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "html",  "postform.html")); 
})

app.post("/", (req, res) => {
    console.log(req.body);
    // you also send one more html 
    res.send("Data Submitted sucessfully"); 
})
app.listen(3000); 
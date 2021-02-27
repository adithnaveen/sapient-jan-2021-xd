const express = require("express"); 
const path = require("path"); 
const app = express(); 


app.use("/public", express.static(path.join(__dirname, "static"))); 
// is to return the html 
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "static", "index.html"));
})

app.get("/someaction", (req,res) => {
    res.send("some action called... ")
})

app.listen(3000);
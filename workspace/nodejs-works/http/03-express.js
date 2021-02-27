const express = require("express"); 
const app = express(); 

// create routes 
app.get("/",(req,res) => {
    res.send("Example route for get / ");
})
app.get("/example", (req,res) => {
    res.send("Example route called... ")
})

app.get("/example/:name/:age", (req, res) => {
    console.log(req.params);

    // http://localhost:3000/example/sahil/23?city=jaipur&country=india 
    console.log("City : ", req.query.city);
    console.log("Country : ", req.query.country);

    // getting path params 
    console.log("Name : ", req.params.name);
    console.log("Age : ", req.params.age);
    let retval ={
        name:req.params.name, 
        age:req.params.age, 
        city:req.query.city, 
        country:req.query.country
    };
    // res.send(req.params);
    res.send(retval);
})

app.listen(3000); 
const bodyParser = require("body-parser");
const express = require("express"); 
const port = 3000; 
const ContactService = require("./services/contact-service-async"); 
const cs = new ContactService(); 

const app = express(); 

app.use(bodyParser.json()); 

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "*");
    next(); 
})


// get 1 record
// version 1.0 
 app.get("/api/contacts/:id", (req, res) => {
    const id = req.params.id
    cs.getContactById(+id,(err, data) =>{
        if(err) {
            console.log("error " + err);
            res.json(err)
        }else {
            res.json(data);
        }
    })
}) 

// get 1 record 
// version 2.0 
/* app.get("/api/contacts/:id", async (req, res) => {
    const id = parseInt(req.params.id); 
    try {
        const contact = await cs.getContactById(id);
        res.json(contact); 
    }catch(err) {
        console.log(err);
        res.json(err); 
    }
}) */ 


app.post("/api/contacts/", (req, res) => {
    cs.addContact(req.body, (err, data) => {
        if(err) {
            res.json(err); 
        }else {
            res.json(data); 
        }
    })
})




// start your server 
app.listen(port, () => console.log(`Server started at port number http://localhost:${port}/`)); 
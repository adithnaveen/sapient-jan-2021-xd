const bodyParser = require("body-parser");
const express = require("express"); 
const port = 3000; 
const ContactService = require("./services/contact-service-mongodb"); 
const cs = new ContactService(); 

const app = express(); 

app.use(bodyParser.json()); 

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "*");
    next(); 
})


app.post("/api/db/contacts", (req, res) => {
    cs.addContact(req.body)
        .then( data => {
            let output = {}; 
            output.id = data; 
            output.address = `http://localhost:${port}/api/db/contacts/${data}`; 
            res.json(output); 
        })
        .catch( err  =>  res.json(err)) ; 
})

app.get("/api/db/contacts/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const contact = await cs.getContactById(id); 
        res.json(contact); 
    }catch(err){
        res.json(err); 
    }


   /*  cs.getContactById(id)
        .then(data => res.json(data))
        .catch(err => res.json(err))
    */ 
})

app.get("/api/db/contacts/", async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const contacts = await cs.getAllContacts(); 
        res.json(contacts); 
    }catch(err){
        res.json(err); 
    } 
})




// start your server
app.listen(port, () => console.log(`Server started at port number http://localhost:${port}/`)); 
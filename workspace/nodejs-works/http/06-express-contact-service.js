const bodyParser = require("body-parser");
const express = require("express"); 
const port = 3000; 
const ContactService = require("./services/contact-service"); 
const cs = new ContactService(); 

const app = express(); 

app.use(bodyParser.json()); 

// get 1 record
app.get("/api/contacts/:id", (req, res) => {
    const id = req.params.id
    console.log("Id Got is ", id);
    try {
        // use parseInt(id) or +id 
        const contact = cs.getContactById(+id); 
        console.log(contact);
      res.json(contact); 
    }catch(error) {
        res.error(error); 
    }
})
// get all records
app.get("/api/contacts/", (req, res) => {
    try {
        res.json(cs.getAllContacts()); 
    } catch (error) {
        res.error(error);
    }
})
// add record
app.post("/api/contacts/", (req,res) => {
    try { 
        const contact = cs.addContact(req.body); 
        res.json(contact);
    }catch(err) {
        res.error(err);
    }
})



// start your server 
app.listen(port, () => console.log(`Server started at port number http://localhost:${port}/`)); 
const ContactService = require("../services/contact-service")


const cs = new ContactService(); 
// get contact 
// let retContact = cs.getContactById(2); 
// console.log(retContact);

let contact = {
    name:"Karthik", 
    email: "karthik@ps.com",
    phone: "23344567",
    city:"Washington"
}; 

let retContact = cs.addContact(contact); 
console.log(retContact);


let  allContacts = cs.getAllContacts(); 
console.log(allContacts);

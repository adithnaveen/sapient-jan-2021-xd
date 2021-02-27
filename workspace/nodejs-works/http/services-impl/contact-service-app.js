const ContactService = require("../services/contact-service")


const cs = new ContactService(); 

let retContact = cs.getContactById(2); 

console.log(retContact);

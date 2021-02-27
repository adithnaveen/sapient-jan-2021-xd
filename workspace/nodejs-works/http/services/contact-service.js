class ContactService {
    constructor() {
        this.data  = {
            idCounter: 2, 
            contacts: [
                {id:1, name:"Venkat", email:"venkat@ps.com", phone:"9349839483", city:"Landon"},
                {id:2, name:"Manasvi", email:"manasvi@ps.com", phone:"656556656", city:"New York"}
            ]
        };
    }


    getContactById(id) {
        if(!id || typeof id !== 'number') {
            throw new Error("Sorry please enter valid number")
        }

        const contact = this.data.contacts.find(c => c.id ===id); 

        if(contact){
            return contact; 
        }else {
            return null; 
        }
    }

    getAllContacts() {
        return [...this.data.contacts]; // spread operator 
    }

    addContact(contact){
        // error first approach
        if(!contact || typeof contact != 'object') {
            throw new Error("contact was not an object")
        }

        // check all the fields are passed
        const requiredFields = ['name', 'email', 'phone', 'city'];
        const missingFields = [];

        requiredFields.forEach(function(field){
            if(!(field in contact)){
                missingFields.push(field)
            }
        });

        if(missingFields.length!==0){
            throw new Error("rquired fields Mssing ", missingFields.join())
        }

        contact.id = ++this.data.idCounter; 
        this.data.contacts.push(contact); 
        return {...contact};
    }
}


module.exports = ContactService;
const path = require("path"); 
const fs = require("fs"); 

const filename = path.join(__dirname, "data", "contacts.json"); 


class ContactService {
    constructor(){ 
        try {
            this.data = JSON.parse(fs.readFileSync(filename, "utf-8")); 
        }catch(err) {
            this.data  = {
                idCounter: 2, 
                contacts: [
                    {id:1, name:"Venkat", email:"venkat@ps.com", phone:"9349839483", city:"Landon"},
                    {id:2, name:"Manasvi", email:"manasvi@ps.com", phone:"656556656", city:"New York"}
                ]
            };
        }
    }


    // id is a number 
    // callback is a function, which is supposed to be executed
    // if there is an error, callback is called using the error object
    // dont throw exceptions for any kind of error, but communication with callback function 
    // only case when error is thrown is when callback function is not passed 

    getContactById(id, callback){
        if(!callback || typeof callback != 'function') {
            throw new Error("Expected callback to be a function, but got " + typeof (callback)); 
        }

        setTimeout(() => {
            if(!id || typeof id !== 'number') {
                let err ={};
                err.code = 1001;
                err.message = "Id Was Not Supplied or was not a number"
                callback(err);
                return;
            }

            let contact = this.data.contacts.find(c => c.id ===id); 
            if(!contact) return null; 

            callback(null, contact); 
        }, 0);
    }


  addContact(contact, callback){

    if(!callback || typeof callback != 'function') {
        throw new Error("Expected callback to be a function, but got " + typeof (callback)); 
    }

    setTimeout(() => {
        // error first approach
        if(!contact || typeof contact != 'object') {
            let err ={}; 
            err.code = 1002; 
            err.message = "contact was not supplied or was not an object"; 
            callback(err); 
            return ;
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
            let err ={}; 
            err.code = 1003; 
            err.message = "required fields missing" + missingFields.join(); 
            callback(err); 
            return ;
        }

        contact.id = ++ this.data.idCounter;
        this.data.contacts.push(contact);

        fs.writeFile(filename, JSON.stringify(this.data), 'utf-8', (err, data) => {
            if(err) {
                callback(err);
                return ;
            }
            callback(null, contact);
        })
    }, 0);
}





// TODO 
    getAllContacts() {
       // check for callback
       // get the content from the file 
       // return 
    }


}

module.exports = ContactService;

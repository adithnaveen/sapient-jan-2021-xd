const mc = require("mongodb").MongoClient; 
const ObjectId = require("mongodb").ObjectId; 


const url = "mongodb://localhost";
const dbName = "sap-db";
const collection = "contacts";

// helper function thats gives the mongo client, with a callback function 
function getContactsCollection(callback) {
    // parameters for the callback 
    // 1. err -> if any error exits, error is sent 
    // 2. client -> reference to mongo-client, we can use it to close the connection
    // 3. contacts -> referenc to the contact collection in sap-db 
    mc.connect(url,(err, client) => {
        if(err) {
            callback(err); 
            return; 
        }
        const db = client.db(dbName); 
        const contactsCollections = db.collection(collection); 
        callback(null, client, contactsCollections); // 1st arg is null as there is no error here 

    })
} 



class ContactService  {

    addContact(contact){

    return new Promise((resolve, reject) => {
        if(!contact || typeof contact != 'object') {
            let err ={}; 
            err.code = 1002; 
            err.message = "contact was not supplied or was not an object"; 
            reject(err); 
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

        getContactsCollection((err, client, contacts) => {
            if(err) {
                reject(err); 
                return ; 
            }
        contacts.insertOne(contact, (err, doc) => {
            if(err) {
                reject(err); 
            }else {
                resolve(doc.insertedId); 
            }
            client.close();
        })

    })
    }) 
    }

    getContactById(id) {
        return new Promise((resolve, reject) => {
            if(!id || typeof id !== 'string') {
                let err ={};
                err.code = 1001;
                err.message = "it should be in string format "
                callback(err);
                return;
            }

            getContactsCollection((err, client, contacts) => {
                if(err) {
                    reject(err); 
                    client.close(); 
                    return; 
                }

                try {
                    id = new ObjectId(id); 
                }catch(err) {
                    reject(err);
                    client.close();
                    return ;
                }
                contacts.findOne()
                contacts.findOne({_id : id}, (err, data) => {
                    if(err) {
                        reject(err); 
                    }else {
                        resolve(data); 
                    }

                    client.close(); 
                }); 
            }); 
        }); 
    }

    getAllContacts() {
        return new Promise((resolve, reject) => {
            getContactsCollection((err, client, contacts) => {
                if(err) {
                    reject(err); 
                    client.close(); 
                    return; 
                }

                contacts.find().toArray((err, data) => {
                    if(err) {
                        reject(err); 
                    }else {
                        resolve(data)
                    }
                    client.close(); 
                })

            })
        })
    }


}


module.exports = ContactService;
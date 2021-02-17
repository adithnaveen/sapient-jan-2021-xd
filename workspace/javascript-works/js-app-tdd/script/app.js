const {  validateInput } = require('./util');
const initApp =() => {
    // registring the button 
    const newUserBtn = document.querySelector("#btnAddUser"); 
    newUserBtn.addEventListener("click", addUser)
}

const addUser = () =>{
    
    const newUserName = document.querySelector("input#name")
    const newUserAge = document.querySelector("input#age")

    if(
        !validateInput(newUserName.value, true, false) || 
        !validateInput(newUserAge.value, false, true)) {
            return ; 
        }
        console.log("User Name : ", newUserName.value);
        console.log("User Age : ", newUserAge.value);
     
        
}

initApp(); 
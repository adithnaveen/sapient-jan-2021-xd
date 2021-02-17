const {  validateInput, generateText, createElement } = require('./util');
const initApp =() => {
    // registring the button 
    const newUserBtn = document.querySelector("#btnAddUser"); 
    newUserBtn.addEventListener("click", addUser)
}

const addUser = () =>{
    const newUserName = document.querySelector("input#name")
    const newUserAge = document.querySelector("input#age")

    if( !validateInput(newUserName.value, true, false) || 
        !validateInput(newUserAge.value, false, true)) {
            return ; 
        }
       
        const userList = document.querySelector(".user-list")
        const outputText = generateText(newUserName.value, newUserAge.value)
        
        const element = createElement('li', outputText, 'user-item')
        userList.appendChild(element)

        document.querySelector("input#name").value = ''; 
        document.querySelector("input#age").value = ''; 
}

initApp(); 
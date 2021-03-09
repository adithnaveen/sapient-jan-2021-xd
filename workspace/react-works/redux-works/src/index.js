import 'bootstrap/dist/css/bootstrap.css'
import './index.css'; 

import  {createStore} from 'redux'; 

// temporarily to declare a variable 
const initialState = ['Sahil', 'Nagesh']; 

//  the reducer is a function, which takes current state from the store
// as an argument, as start since there is no store a value is 
// injected 
const reducer = (state=initialState, action) => {
  switch (action.type) {
  
    case "ADD_NAME":
      return [...state, action.data]; 

    case "DELETE_NAME":
      let names = [...state];
      names.splice(action.data, 1); 
      return names; 

    default:
     return state; 
  }
}

const store = createStore(reducer); 
window['store']= store; 


// submit handler for Add Name 
const submitHandler = (evt) => {
  evt.preventDefault();
  const name = document.getElementById("name").value; 
  const action = {type:"ADD_NAME", data:name}; 
  store.dispatch(action); 

  document.getElementById("name").value =''; 
  document.getElementById("name").focus(); 
}

document.getElementById("formName").onsubmit = submitHandler; 


const updatedList = () => {
  let names = store.getState(); 
  let list = names.map((name, index) => 
    '<li class="list-group-item">'
    + '<button class="btn btn-danger" onclick="deleteName('+index+')">X</button>'
    + name + '</li>'
  )
  let listitems = list.join(''); 
  document.getElementById("namesList").innerHTML = listitems; 
}

// put it in window scope / you can see it on console 
window['updatedList']= updatedList;

// for the first time invocation 
updatedList(); 
store.subscribe(updatedList); 

window['deleteName'] = (index) => {
  const action = {type:"DELETE_NAME", data:index}; 
  store.dispatch(action); 
}






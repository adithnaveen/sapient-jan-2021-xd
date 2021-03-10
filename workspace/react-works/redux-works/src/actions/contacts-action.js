import {ADD_CONTACT, DELETE_CONTACT, FETCH_CONTACTS} from '../constants/types'; 

const url ="http://localhost:4000/contacts/";

export const fetchContacts = () => {
    // once the operation is done dispatch it to redux 
    return async (dispatch) => {
        let resp = await fetch(url); 
        let contacts = await resp.json(); 
        let action = {type:FETCH_CONTACTS, data: contacts}; 
        dispatch(action); 
    }
}

export const addContact =  (contact) =>  async (dispatch)   => {
    let resp = await fetch(url, {
        method  :"POST",
        body : JSON.stringify(contact),
        headers : {
            'Content-Type' :"application/json"
        }
    }); 

    let newContact = await resp.json(); 
    dispatch({type:ADD_CONTACT, data: newContact})
}

export const deleteContact =(id) => async (dispatch) => {
    await fetch(url + id, {method : "DELETE"});
    dispatch({type:DELETE_CONTACT, data: id});
}

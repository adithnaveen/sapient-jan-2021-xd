import {ADD_CONTACT, DELETE_CONTACT, FETCH_CONTACTS} from '../constants/types';

export default (state = {contacts: []}, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            let contacts = [...state.contacts]; 
            contacts.push(action.data);
            return {...state, contacts};

        case DELETE_CONTACT:
            let contacts = [...state.contacts];
            let index = contacts.findIndex(c => c.id === action.data);
            if(index !==-1) {
                contacts.splice(index, 1);
            }
            return {...state, contacts}; 

        case FETCH_CONTACTS:
            return {...state, contacts: action.data};
        default:
            state;
    }
}



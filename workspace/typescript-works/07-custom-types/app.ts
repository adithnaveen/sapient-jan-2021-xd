
// 1. use interface to define the model 

interface Todo {
    name:string, 
    // optional but when you give it has to be boolean(true/false)
    completed ?: boolean; 
}


interface ITodoService {
    add(todo:Todo) :Todo; 
    delete(todo: Todo) : void; 
    getAll() : Todo []; 
    getById(todo: Todo) : Todo; 
}
var todo : Todo = {
    name:"Get Groceries"
}; 

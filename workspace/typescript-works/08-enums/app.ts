interface Todo {
    name:string, 
    state: TodoState
}


enum TodoState {
    New, 
    Active, 
    Completed, 
    Deleted 
}

let todo : Todo = {
    name :"Have a hair cut", 
    state : TodoState.New
}

function deleteTodo (todo: Todo) {
    if(todo.state != TodoState.Completed) {
        throw "Cant Delete incomplete task"; 
    }
}


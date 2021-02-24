interface Todo {
    name:string, 
    state: TodoState
} 

class TodoService {
    static todoId: number =0; 

    constructor(private todos : Todo[]) {}
    add(todo: Todo) {
        let newId = TodoService.getNextId(); 
        // some code to write to add to todos 
    }
    getAll() {
        return this.todos; 
    }

    // create method to delete the todo 

    // create method to get 1 todo which is on top 

    static getNextId() {
        return TodoService.todoId ++; 
    }
}

enum TodoState {
    New, 
    Active, 
    Completed, 
    Deleted 
}
let todo : Todo = {
    name :"give cloths to dry cleaning", 
    // state : TodoState.Active
    get state() {
        return this.state; 
    }, 
    set state (state) {
        // you can write some BL 
        this.state = state;
    }
}; 

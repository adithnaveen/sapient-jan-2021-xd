interface Todo {
    id: number, 
    name:string, 
    state: TodoState
} 

class TodoService {
    static todoId: number =0; 

    constructor(private todos : Todo[]) {}
    
    add(todo: Todo) {
        let todo1 : Todo =   {id:TodoService.getNextId(), ...todo} ; 
        this.todos.push(todo1); 
    }

    getAll() {
        return this.todos; 
    }
    delete(id: number) {
        this.todos.splice(id, 1); 
    }
    getTodo(id: number) {
        return this.todos.filter(todo => todo.id=== id); 
    }
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

/*
let todo : Todo = {
    id:1, 
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
*/ 
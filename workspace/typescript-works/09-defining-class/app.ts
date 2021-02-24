// old code 
/* 
function TodoService () {
    this.todos = []; 
}

TodoService.prototype.getAll = function() {
    return this.todos; 
}

TodoService.prototype.addTodo = function(todo) {
    this.todos.splice(0, 0, todo); 
    return todo; 
}
 */

// TS Code 

export interface Todo {
    name:string, 
    state: TodoState
}


class TodoService {
    // version 1 
    // private todos: Todo []; 
    // constructor(todos: Todo []) {
    //     this.todos = todos; 
    // }

    // version 2 
    // since we have used private(access specifier), there will be instance variable 
    // created by TS 
    constructor(private todos: Todo[]) {}

    getAll(){
        return this.todos; 
    }
    addTodo(todo : Todo) : Todo {
        this.todos.unshift(todo); 
        return todo; 
    }

}


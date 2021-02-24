"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
class TodoService {
    // version 1 
    // private todos: Todo []; 
    // constructor(todos: Todo []) {
    //     this.todos = todos; 
    // }
    // version 2 
    // since we have used private(access specifier), there will be instance variable 
    // created by TS 
    constructor(todos) {
        this.todos = todos;
    }
    getAll() {
        return this.todos;
    }
    addTodo(todo) {
        this.todos.unshift(todo);
        return todo;
    }
}

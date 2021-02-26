class TodoService {
    constructor(todos) {
        this.todos = todos;
    }
    add(todo) {
        let todo1 = Object.assign({ id: TodoService.getNextId() }, todo);
        this.todos.push(todo1);
    }
    getAll() {
        return this.todos;
    }
    delete(id) {
        this.todos.splice(id, 1);
    }
    getTodo(id) {
        return this.todos.filter(todo => todo.id === id);
    }
    static getNextId() {
        return TodoService.todoId++;
    }
}
TodoService.todoId = 0;
var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 0] = "New";
    TodoState[TodoState["Active"] = 1] = "Active";
    TodoState[TodoState["Completed"] = 2] = "Completed";
    TodoState[TodoState["Deleted"] = 3] = "Deleted";
})(TodoState || (TodoState = {}));
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

class TodoService {
    constructor(todos) {
        this.todos = todos;
    }
    add(todo) {
        let newId = TodoService.getNextId();
        // some code to write to add to todos 
    }
    getAll() {
        return this.todos;
    }
    // create method to delete the todo 
    // create method to get 1 todo which is on top 
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
let todo = {
    name: "give cloths to dry cleaning",
    // state : TodoState.Active
    get state() {
        return this.state;
    },
    set state(state) {
        // you can write some BL 
        this.state = state;
    }
};

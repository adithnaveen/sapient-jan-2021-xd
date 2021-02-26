var TodoState4;
(function (TodoState4) {
    TodoState4[TodoState4["New"] = 0] = "New";
    TodoState4[TodoState4["Active"] = 1] = "Active";
    TodoState4[TodoState4["Completed"] = 2] = "Completed";
    TodoState4[TodoState4["Deleted"] = 3] = "Deleted";
})(TodoState4 || (TodoState4 = {}));
// you cannot create an instance of abstract class 
class TodoStateChanger {
    constructor(newState) {
        this.newState = newState;
    }
    // you can have concrete method 
    changeState(todo) {
        if (this.canChangeState(todo)) {
            todo.state = this.newState;
        }
        return todo;
    }
}
// new -> Active -> completed -> delete - Jira, MS Teams 
class JiraCompleteTodoStateChanger extends TodoStateChanger {
    constructor() {
        super(TodoState4.Completed);
    }
    canChangeState(todo) {
        return todo.state == TodoState4.Active;
    }
}

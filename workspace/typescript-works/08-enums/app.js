var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 0] = "New";
    TodoState[TodoState["Active"] = 1] = "Active";
    TodoState[TodoState["Completed"] = 2] = "Completed";
    TodoState[TodoState["Deleted"] = 3] = "Deleted";
})(TodoState || (TodoState = {}));
let todo = {
    name: "Have a hair cut",
    state: TodoState.New
};
function deleteTodo(todo) {
    if (todo.state != TodoState.Completed) {
        throw "Cant Delete incomplete task";
    }
}

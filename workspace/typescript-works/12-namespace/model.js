var TodoApp;
(function (TodoApp) {
    var Model;
    (function (Model) {
        let TodoState;
        (function (TodoState) {
            TodoState[TodoState["New"] = 0] = "New";
            TodoState[TodoState["Active"] = 1] = "Active";
            TodoState[TodoState["Completed"] = 2] = "Completed";
            TodoState[TodoState["Deleted"] = 3] = "Deleted";
        })(TodoState = Model.TodoState || (Model.TodoState = {}));
    })(Model = TodoApp.Model || (TodoApp.Model = {}));
})(TodoApp || (TodoApp = {}));

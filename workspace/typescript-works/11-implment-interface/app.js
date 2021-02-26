class TodoService2 {
    constructor(todos) {
        this.todos = todos;
    }
    get nextId() {
        return TodoService._lastId += 1;
    }
    add(todo) {
        let todo1 = Object.assign({ id: TodoService.getNextId() }, todo);
        this.todos.push(todo1);
        return todo1;
    }
    deleteTodo(id) {
        this.todos.splice(id, 1);
    }
    getAll() {
        var val = JSON.stringify(this.todos);
        return JSON.parse(val);
    }
    getById(todoId) {
        let retVal = this.todos.filter(t => t.id === todoId);
        if (retVal.length) {
            return retVal[0];
        }
        return null;
    }
}
TodoService2._lastId = 0;

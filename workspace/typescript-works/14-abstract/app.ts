interface Todo4 {
    name : string, 
    state : TodoState4
}


enum TodoState4 {
    New, 
    Active, 
    Completed, 
    Deleted 
}

// you cannot create an instance of abstract class 
abstract class TodoStateChanger {
    constructor(private newState : TodoState4) {}
    abstract canChangeState(todo: Todo4) :boolean; 
    // you can have concrete method 

    changeState(todo :Todo4) : Todo4 {
        if(this.canChangeState(todo)) {
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
    canChangeState(todo: Todo4) :boolean {
        return  todo.state == TodoState4.Active ; 
    }
}
 
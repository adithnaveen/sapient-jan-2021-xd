interface Todo {
    id: number, 
    name:string, 
    state: TodoState
} 


interface ITodoService2 {
    add(todo:Todo) :Todo; 
    deleteTodo(id : number) :void  ; 
    getAll() : Todo []; 
    getById(todoId : number ) : Todo; 
}

interface IIDGenerator {
    nextId: number; 
}
 
class TodoService2 implements ITodoService2, IIDGenerator {

    private static _lastId :number =0; 

    constructor(private todos : Todo[]) {}

    get nextId() {
        return TodoService._lastId +=1; 
    }

    add(todo:Todo) :Todo{
        let todo1 : Todo =   {id:TodoService.getNextId(), ...todo} ; 
        this.todos.push(todo1); 
        return todo1 ; 
    }
    deleteTodo(id : number) :void {
        this.todos.splice(id, 1); 
    }
    getAll() : Todo [] {
      var val = JSON.stringify(this.todos); 
      return JSON.parse(val); 
    }

    getById(todoId  : number ) : Todo {
        let retVal :Todo[] =  this.todos.filter(t => t.id === todoId );  

        if(retVal.length) {
            return retVal[0]; 
        }
        return null; 
    }
}
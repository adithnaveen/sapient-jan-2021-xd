namespace TodoApp.Model {
    export interface Todo {
        id: number, 
        name:string, 
        state: TodoState
    } 

}
namespace DataAccess {
    import Model = TodoApp.Model; 
    import Todo = Model.Todo; 
 
    interface ITodoService2 {
        add(todo:Todo) :Todo; 
        deleteTodo(id : number) :void  ; 
        getAll() : Todo []; 
        getById(todoId : number ) : Todo; 
    }
}

namespace TodoApp.Model  {
    export enum TodoState {
        New, 
        Active, 
        Completed, 
        Deleted 
    }
} 


interface IIDGenerator {
    nextId: number; 
}
 
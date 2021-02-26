 
    export interface Todo3 {
        id: number, 
        name:string, 
        state: TodoState
    } 
    
   export  interface ITodoService3 {
        add(todo:Todo) :Todo; 
        deleteTodo(id : number) :void  ; 
        getAll() : Todo []; 
        getById(todoId : number ) : Todo; 
    } 
    export enum TodoState3 {
        New, 
        Active, 
        Completed, 
        Deleted 
    }
 
export interface IIDGenerator3 {
    nextId: number; 
}
 
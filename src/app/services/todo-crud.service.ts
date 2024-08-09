import { Injectable } from '@angular/core';
import { Crud } from '../interfaces/crud';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoCrudService implements Crud {
  todos: Todo[] = [
   {id:1,text:"un texte d'une tâche",isDone:false}
 ]
  constructor() { }
  onCreate(): void {
  
  }
  getTodos(): Todo[] {
    return this.todos;
  }
  updateTodo(todo: Todo): Todo {
    return todo;
  }
  deleteTodo(todoId: number): void {
    
  }
}

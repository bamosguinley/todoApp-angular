import { Injectable } from '@angular/core';
import { Crud } from '../interfaces/crud';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoCrudService implements Crud {
  id: number = 0;
  todos: Todo[] = [
   {id:1,text:"un texte d'une tâche",isDone:false}
 ]
  constructor() { }
  onCreate(todoText:string): void {
    if (this.todos.length>0) {
      this.todos.push({ id: this.id++, text: todoText, isDone: false });
    }
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

import { Injectable } from '@angular/core';
import { Crud } from '../interfaces/crud';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoCrudService implements Crud {

  constructor() { }
onCreate(): void {
  
  }
  updateTodo(todo: Todo): Todo {
    return todo;
  }
  getTodos(): Todo[] {
    return [];
  }
  deleteTodo(todoId: number): void {
    
  }
}

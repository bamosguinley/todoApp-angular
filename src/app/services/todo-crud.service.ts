import { Injectable } from '@angular/core';
import { Crud } from '../interfaces/crud';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoCrudService implements Crud {
  id: number = 0;
  nombre: number = 0;
  doneNomber: number = 0;
  unDoneNumber: number = 0;
  todos: Todo[] = [];
  constructor() {}
  onCreate(todoText: string): void {
    if (todoText.trim() !== '') {
      this.todos.push({
        id: this.id++,
        text: todoText,
        isDone: false,
        isEditable: false,
        
      });
    }
    this.nombre = this.todos.length;

  }
  getTodos(): Todo[] {
    return this.todos;
  }
  updateTodo(todo: Todo): void {
    todo.isEditable = !todo.isEditable;
  }
  deleteTodo(todoId: number): void {
    this.todos = this.todos.filter((t: Todo) => {
      return t.id !== todoId;
    });
    // this.todos.splice(todoId, 1);
  }
}

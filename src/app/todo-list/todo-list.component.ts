import { Component } from '@angular/core';
import { TodoCrudService } from '../services/todo-crud.service';
import { Todo } from '../interfaces/todo';
import { of } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todos: Todo[] = [];
  nombre: number = 0;
  doneNomber: number = 0;
  unDoneNumber: number = 0;
  constructor(private crudService: TodoCrudService) { }
  ngOnInit() {
    this.todos = this.crudService.getTodos();
    this.nombre = this.crudService.nombre;
  }
  deleteTodo(todo: Todo) {
    this.crudService.deleteTodo(todo.id)
    this.todos = this.crudService.getTodos();
  }
  updateTodo(todo:Todo) {
    this.crudService.updateTodo(todo);
  }
  showDone() {
    this.todos = this.crudService.getTodos().filter((t) => t.isDone === true)
    this.doneNomber = this.todos.length;
  }
  showNotDone() {
    this.todos = this.crudService.getTodos().filter((t) => t.isDone !== true);
    this.unDoneNumber = this.todos.length;
  }
  showAll() {
    this.todos = this.crudService.getTodos();
    this.nombre = this.todos.length;
  }
}

import { Component } from '@angular/core';
import { TodoCrudService } from '../services/todo-crud.service';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todos!: Todo[];
  constructor(private crudService: TodoCrudService) {}
  ngOnInit() {
    this.todos = this.crudService.getTodos();
  }
}

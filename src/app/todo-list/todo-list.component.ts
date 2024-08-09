import { Component } from '@angular/core';
import { TodoCrudService } from '../services/todo-crud.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  constructor(private crudService:TodoCrudService){}
}

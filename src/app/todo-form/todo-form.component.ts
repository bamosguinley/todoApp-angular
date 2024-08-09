import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TodoCrudService } from '../services/todo-crud.service';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  todoText = new FormControl('', [Validators.required]);
 
  constructor(private crudService: TodoCrudService) { }
 
  onCreate() {
    this.crudService.onCreate(this.todoText.value || "");
    // console.log(this.todoText.value);
    this.todoText.setValue('');
  }
}

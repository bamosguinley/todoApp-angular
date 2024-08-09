import { Todo } from "./todo";

export interface Crud {
  onCreate(todoText: string): void;
  getTodos(): Todo[];
  updateTodo(todo: Todo): void;
  deleteTodo(todoId: number): void;
}

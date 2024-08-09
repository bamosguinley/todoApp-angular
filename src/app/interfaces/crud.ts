import { Todo } from "./todo";

export interface Crud {
  onCreate(todoText: string): void;
  getTodos(): Todo[];
  updateTodo(todo: Todo): Todo;
  deleteTodo(todoId: number): void;
}

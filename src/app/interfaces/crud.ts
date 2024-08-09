import { Todo } from "./todo";

export interface Crud {
    onCreate(): void;
    getTodos(): Todo[];
    updateTodo(todo: Todo): Todo;
    deleteTodo(todoId: number): void;
}

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../interfaces/interface';

@Injectable()
export class TodoDataService {
  todos: Todo[] = [];
  lastId = 0;
  constructor(private store: Store<any>) {
    this.store.select('todos').subscribe( todos => this.todos = todos);
  }

  addTodo(todo: Todo): void {
    this.store.dispatch({
      type: 'ADD_TODO',
      payload: {
        title: todo.title,
        id: ++this.lastId,
        completed: todo.completed,
        editable: todo.editable
      }
    });
  }

  deleteTodoById(todoId: number): void {
    this.store.dispatch({
      type: 'REMOVE_TODO',
      payload: { id: todoId }
    });
  }

  toggleTodoComplete(todoId: number): void {
    this.store.dispatch({
      type: 'TOGGLE_COMPLETE',
      payload: { id: todoId }
    });
  }

  editTodo(todoId: number): void {
    this.store.dispatch({
      type: 'EDIT_TODO',
      payload: { id: todoId }
    });
  }
}

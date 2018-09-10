import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/interface';
import { TodoDataService } from '../services/todo-data.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: Todo = new Todo();

  constructor(private todoService: TodoDataService, private store: Store<any>) {
    this.store.select('todos').subscribe(todos => this.todos = todos);
  }

  ngOnInit() {
  }

  addTodo(): void {
    this.todoService.addTodo(this.newTodo);
    this.newTodo.title = '';
  }
}

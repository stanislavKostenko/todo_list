import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/interface';
import { TodoDataService } from '../../services/todo-data.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todos: Todo[];
  @Input() newTodo: Todo;

  constructor(private todoService: TodoDataService) {

  }

  ngOnInit() {
  }

  deleteTodo(id): void {
    this.todoService.deleteTodoById(id);
  }

  completeTodo(id): void {
    this.todoService.toggleTodoComplete(id);
  }

  editTodo(id): void {
    this.todoService.editTodo(id);
  }
}


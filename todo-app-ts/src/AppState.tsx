import { observable, computed, action, decorate } from "mobx";

export class AppState{}

decorate (AppState, {
  todoList: observable,
  todoItem: observable,
  completeTask: action,
  deleteTask: action
});
var toDoItem = /** @class */ (function () {
    function toDoItem(item, status) {
        this.item = item;
        this.status = status;
    }
    return toDoItem;
}());
var toDoList = /** @class */ (function () {
    function toDoList() {
    }
    toDoList.prototype.createToDoItem = function (item) {
        var newtoDoItem = new toDoItem(item, false);
        var allToDoItems = toDoList.currentToDoList.push(newtoDoItem);
        return allToDoItems;
    };
    toDoList.prototype.getToDoIems = function () {
        return toDoList.currentToDoList;
    };
    toDoList.currentToDoList = new Array;
    return toDoList;
}());
var newToDo = document.getElementById("myTodoItem").value;
var newItem = new toDoItem(newToDo, false);
console.log(newItem);

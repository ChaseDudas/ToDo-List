class toDoItem{
	item: string;
	status: boolean;

	constructor(item: string, status: boolean)
	{
		this.item = item;
		this.status = status;
	}
}

class toDoList{
	public static currentToDoList: toDoItem[] = new Array;

	createToDoItem(item:string){
		let newtoDoItem = new toDoItem(item, false);
		let allToDoItems: number = toDoList.currentToDoList.push(newtoDoItem);
		return allToDoItems;
	}

	getToDoIems():toDoItem[]{
		return toDoList.currentToDoList;
	}
}

let newToDo : string = (document.getElementById("myTodoItem") as HTMLInputElement).value; 


let newItem = new toDoItem(newToDo, false);
console.log(newItem);
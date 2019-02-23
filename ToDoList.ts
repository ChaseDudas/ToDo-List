interface Todo
{
	name:string;
	description:string;
	completed: boolean;
}

class ToDo implements Todo
{
	constructor(public name: string, 
       			public description: string, 
                public completed: boolean)
	{

	}
}

class ToDoList
{	
	public static listOfTodos: Todo[]= new Array;

    createTodoItem(name:string,description:string):number 
    {
        let newItem = new ToDo(name,description, false);
        let totalCount: number = ToDoList.listOfTodos.push(newItem);
        return totalCount;
    }

    getTodoItems():Todo[]
    {
        return ToDoList.listOfTodos;
    }
}
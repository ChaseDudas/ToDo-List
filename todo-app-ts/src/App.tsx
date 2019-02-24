import React, { useState, Fragment } from 'react'

type FormElem = React.FormEvent<HTMLFormElement>

interface ITodo 
{
  text: string
  complete: boolean
}

interface MyToDo
{

}

function App(): JSX.Element {
  const [value, setValue] = useState<string>('')
  const [todos, setTodos] = useState<ITodo[]>([])

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }]
    setTodos(newTodos)
  }

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = todos
    newTodos[index].complete = !newTodos[index].complete
    setTodos(newTodos)
  }

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = todos
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <Fragment>
      <h1>Things To Do</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder = "What needs to be done?"
          required
        />
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => (
          <div key={index} style={{ display: 'flex' }}>
            <div style={{ textDecoration: todo.complete ? 'line-through' : '' }} >
              {todo.text}
            </div>
            <button type='button' onClick={() => completeTodo(index)}>
              {todo.complete ? 'Incomplete' : 'Complete'}
            </button>
            <button onClick={() => removeTodo(index)}>x</button>
          </div>
        ))}
      </section>
      <h2>Tasks left: {todos.length}</h2>
    </Fragment>
  )
}

export default App
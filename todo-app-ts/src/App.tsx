import React, { useState, Fragment } from 'react'

type FormElem = React.FormEvent<HTMLFormElement>

interface ITodo {
  text: string
  complete: boolean
}

function App(): JSX.Element {
  const [value, setValue] = useState<string>('')
  const [trigger, setTrigger] = useState<string>('')
  const [todos, setTodos] = useState<ITodo[]>([])

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  const triggerUpdate = (c: FormElem): void => {
    c.preventDefault
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
    return
  }

  const findTodo = (): number => {
    var totalTasks = 0
    for (var i = 0; i < todos.length; ++i) 
    {
      if(todos[i].complete == false)
      {
        totalTasks++
      }
    }
    return totalTasks
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
            <input
                type='checkbox'
                value = {index}
                onChange={c => setValue(c.target.value)}
                onClick ={() => completeTodo(index)} >
            </input>
            <div style={{ textDecoration: todo.complete ? 'line-through' : '' }}>
                {todo.text}
            </div>
            <input
                type='checkbox'
                value = {index}
                onChange={c => setValue(c.target.value)}
                onClick ={() => removeTodo(index)}
            />
          </div>
        ))}
      </section>
      <hr></hr>
      <span> Tasks left {findTodo()} </span>
    </Fragment>
  )
}

export default App
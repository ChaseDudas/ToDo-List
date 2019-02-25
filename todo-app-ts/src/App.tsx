import React, { useState, Fragment } from 'react'
import './App.css'


type FormElem = React.FormEvent<HTMLFormElement>
var randomString = require('random-string');

interface ITodo {
  text: string
  complete: boolean
}

function App(): JSX.Element {
  const [value, setValue] = useState<string>('')
  const [trigger, setTrigger] = useState<string>('')
  const [del, setDel] = useState<string>('')
  const [todos, setTodos] = useState<ITodo[]>([])

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  const triggerUpdate = (c: FormElem): void => {
    c.preventDefault()
    setTrigger('')
  }

  const delUpdate = (v: FormElem): void => {
    v.preventDefault()
    setDel('')
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
    <div className = "card todo-list-container">
      <form onSubmit={handleSubmit} className = "todo-list-form">
        <section className = "header-section"> 
              <h1 className = "text-center white-text">Things To Do</h1>
        </section>
        <section className = "content-section">
          <input
            type='text'
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder = "What needs to be done?"
            required
            className = "todo-list-input"
            >
          </input>
        </section>
      </form>
      <section className = "todo-items">
        {todos.map((todo: ITodo, index: number) => (
          <div key={index} style={{ display: 'flex' }}>
            <input
                type='checkbox'
                value = {randomString()}
                onChange={c => setTrigger(c.target.value)}
                onClick ={() => completeTodo(index)} 
                className = "todo-list-complete" >
            </input>
            <div style={{ textDecoration: todo.complete ? 'line-through' : '' }} className = "todo-list-item">
                {todo.text}
            </div>
            <input
                type='checkbox'
                value = {randomString()}
                onChange={v => setDel(v.target.value)}
                onClick ={() => removeTodo(index)}
                className = "todo-list-delete" >
            </input>
          </div>
        ))}
      </section>
      <hr></hr>
      <span className = "text-italic tasks-left"> Tasks left: {findTodo()} </span>
      </div>
    </Fragment>
  )
}

export default App
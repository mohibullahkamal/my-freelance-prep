import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  // const [listtt, setTodos] = useState(['data1', 'data2'])
  // const [listtt, setTodos] = useState([{ id: 1, name: 'todo1', complete: true }])
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    // console.log(name)
    setTodos(prevTodos => {
      // return [...prevTodos, { id: uuidv4, name: name, complete: false }]
      return [...prevTodos, { id: Math.random(), name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos(e) {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
      <br></br>
      <br></br>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  )
}

export default App;

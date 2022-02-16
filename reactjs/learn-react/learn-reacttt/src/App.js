import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import uuid from 'uuid/v4'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  // const [listtt, setTodos] = useState(['data1', 'data2'])
  // const [listtt, setTodos] = useState([{ id: 1, name: 'todo1', complete: true }])
  const [listtt, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    localStorage.setItem()
  }, [listtt])

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    // console.log(name)
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuid(), name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }

  return (
    <>
      <TodoList todos={listtt} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>

    </>
  )
}

export default App;

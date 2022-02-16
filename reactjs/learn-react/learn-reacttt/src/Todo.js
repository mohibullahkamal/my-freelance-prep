import React from 'react'

export default function Todo({ todo, toggleTodo }) {
    return (
        <div>
            <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
            {todo.name}
        </div>
    )
}

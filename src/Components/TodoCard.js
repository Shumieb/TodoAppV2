import React from 'react'

function TodoCard() {
    return (
        <div>
            <input type="checkbox" name="completeTodo" id="completeTodo" />
            <p>Todo one</p>
            <input type="button" value="Delete" />
            <input type="button" value="Edit" />
        </div>
    )
}

export default TodoCard
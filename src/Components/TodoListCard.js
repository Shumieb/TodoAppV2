import React from 'react'
import { Link } from 'react-router-dom'

function TodoListCard() {
    return (
        <div className='bg-darkTeal mx-auto py-3 px-6 text-lg text-lightSlate rounded-lg cursor-pointer min-w-60'>
            <Link to="/todolist/1">Todo List One</Link>
        </div>
    )
}

export default TodoListCard
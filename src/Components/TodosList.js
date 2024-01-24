import React from 'react'
import TodoCard from './TodoCard'

function TodosList({ displayEditTodoForm }) {
    return (
        <div className='p-4 mx-auto w-3/4 mb-6'>
            <TodoCard displayEditTodoForm={displayEditTodoForm} />
            <TodoCard displayEditTodoForm={displayEditTodoForm} />
            <TodoCard displayEditTodoForm={displayEditTodoForm} />
            <TodoCard displayEditTodoForm={displayEditTodoForm} />
            <TodoCard displayEditTodoForm={displayEditTodoForm} />
        </div>
    )
}

export default TodosList
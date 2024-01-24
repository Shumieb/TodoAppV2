import React from 'react'
import TodoCard from './TodoCard'

function TodosList() {
    return (
        <div className='p-4 mx-auto w-1/2 mb-6'>
            <TodoCard />
            <TodoCard />
            <TodoCard />
            <TodoCard />
            <TodoCard />
        </div>
    )
}

export default TodosList
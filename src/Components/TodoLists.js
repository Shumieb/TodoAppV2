import React from 'react'
import TodoListCard from './TodoListCard'

function TodoLists() {
    return (
        <div className='p-4 grid grid-cols-2 gap-4 mx-auto w-1/2 mb-10'>
            <TodoListCard />
            <TodoListCard />
            <TodoListCard />
            <TodoListCard />
        </div>
    )
}

export default TodoLists
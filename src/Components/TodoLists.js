import React from 'react'
import TodoListCard from './TodoListCard'

function TodoLists({ displayEditListForm }) {
    return (
        <div className='p-2 grid grid-cols-2 gap-4 mx-auto w-3/4 mb-10'>
            <TodoListCard displayEditListForm={displayEditListForm} />
            <TodoListCard displayEditListForm={displayEditListForm} />
            <TodoListCard displayEditListForm={displayEditListForm} />
            <TodoListCard displayEditListForm={displayEditListForm} />
        </div>
    )
}

export default TodoLists
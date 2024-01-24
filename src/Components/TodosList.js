import React from 'react'
import TodoCard from './TodoCard'

function TodosList({ displayEditTodoForm, todos }) {

    const listItems = todos.map(listItem => {
        return <TodoCard key={listItem.id} displayEditTodoForm={displayEditTodoForm} todo={listItem} />
    })

    return (
        <ul className='p-4 mx-auto w-3/4 mb-6'>
            {listItems}
        </ul>
    )
}

export default TodosList
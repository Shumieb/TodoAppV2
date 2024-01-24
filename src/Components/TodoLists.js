import React from 'react'
import TodoListCard from './TodoListCard'

function TodoLists({ displayEditListForm, todoList }) {

    const listItems = todoList.map(listItem => {
        //console.log(list);
        return <TodoListCard key={listItem.id} displayEditListForm={displayEditListForm} listItem={listItem} />
    })

    return (
        <ul className='p-2 grid grid-cols-2 gap-2 mx-auto mb-10'>
            {listItems}
        </ul>
    )
}

export default TodoLists
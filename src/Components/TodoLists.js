import React from 'react'
import TodoListCard from './TodoListCard'

function TodoLists({ displayEditListForm, todoList }) {

    //console.log(todoList);

    const listItems = todoList.map(list => {
        //console.log(list);
        return <TodoListCard key={list.id} displayEditListForm={displayEditListForm} list={list} />
    })

    return (
        <ul className='p-2 grid grid-cols-2 gap-2 mx-auto mb-10'>
            {listItems}
        </ul>
    )
}

export default TodoLists
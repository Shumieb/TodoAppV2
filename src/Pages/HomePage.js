import React from 'react'
import TodoLists from '../Components/TodoLists'
import CreateNewListForm from '../Components/CreateNewListForm'
import SearchLists from '../Components/SearchLists'

function HomePage() {
    return (
        <div className="container mx-auto">
            <h2>Todo App</h2>
            <hr />
            <div>
                <input type="button" value="Create New List" />
                <input type="button" value="Search Lists" />
            </div>
            <div>
                <CreateNewListForm />
                <SearchLists />
            </div>
            <hr />
            <TodoLists />
        </div>
    )
}

export default HomePage
import React from 'react'
import TodosList from '../Components/TodosList'
import AddNewTodoForm from '../Components/AddNewTodoForm'
import SearchTodoForm from '../Components/SearchTodoForm'
import EditTodoForm from '../Components/EditTodoForm'

function TodoListPage() {
    return (
        <div className='container p-2 my-3 text-center'>
            <p className='p-2 mb-1 text-3xl text-darkTeal'>Todo List One</p>
            <div className='home-page-heading-hr mb-1'>
                <hr />
            </div>
            <p className='p-2 text-lg text-darkTeal italic mb-5'>Created: </p>
            <div className='mx-1 px-1 mb-7'>
                <input
                    type="button"
                    value="Add New Todo"
                    className='cursor-pointer px-2 py-1 mx-3 rounded-lg 
                                border-4 border-darkFuscia text-lightSlate 
                                bg-darkFuscia text-lg hover:text-lighterFuscia'
                />
                <input
                    type="button"
                    value="Search Todos"
                    className='cursor-pointer px-2 py-1 mx-3 rounded-lg 
                                border-4 border-darkFuscia text-lightSlate 
                                bg-darkFuscia text-lg hover:text-lighterFuscia'
                />
            </div>
            <div>
                <AddNewTodoForm />
                <SearchTodoForm />
                <EditTodoForm />
            </div>
            <div className='home-page-heading-hr mb-8'>
                <hr />
            </div>
            <div className='mx-1 px-1'>
                <input
                    type="button"
                    value="Hide Completed"
                    className='cursor-pointer px-2 py-1 mx-3 rounded-lg 
                                border-4 border-lightRose text-lightSlate 
                                bg-lightRose text-lg hover:text-lighterFuscia'
                />
                <input
                    type="button"
                    value="Sort A-Z"
                    className='cursor-pointer px-8 py-1 mx-3 rounded-lg 
                                border-4 border-lightRose text-lightSlate 
                                bg-lightRose text-lg hover:text-lighterFuscia'
                />
            </div>
            <TodosList />
        </div>
    )
}

export default TodoListPage
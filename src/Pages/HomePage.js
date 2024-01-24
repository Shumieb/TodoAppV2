import React from 'react'
import TodoLists from '../Components/TodoLists'
import CreateNewListForm from '../Components/CreateNewListForm'
import SearchLists from '../Components/SearchLists'

function HomePage() {
    return (
        <div className="container mx-auto text-center">
            <h2 className='p-2 mb-1 text-3xl text-darkTeal'>Todo App</h2>
            <div className='home-page-heading-hr mb-6'>
                <hr />
            </div>
            <div className='mx-1 px-1 mb-6'>
                <input
                    type="button"
                    value="Create New List"
                    className='cursor-pointer px-2 py-1 mx-3 rounded-lg 
                                border-4 border-darkFuscia text-lightSlate 
                                bg-darkFuscia text-lg hover:text-lighterFuscia'
                />
                <input
                    type="button"
                    value="Search Lists"
                    className='cursor-pointer px-2 py-1 mx-3 rounded-lg 
                                border-4 border-darkFuscia text-lightSlate 
                                bg-darkFuscia text-lg hover:text-lighterFuscia'
                />
            </div>
            <div>
                <CreateNewListForm />
                <SearchLists />
            </div>
            <div className='home-page-heading-hr mb-8'>
                <hr />
            </div>
            <TodoLists />
        </div>
    )
}

export default HomePage
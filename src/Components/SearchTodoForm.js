import React from 'react'

function SearchTodoForm() {
    return (
        <div className='m-1 px-3'>
            <form className='my-1 mx-auto py-5 px-3 bg-darkTeal w-3/4 rounded-lg mb-8'>
                <input
                    type="text"
                    name="searchTodo"
                    id="searchTodo"
                    placeholder='Search'
                    className='mx-auto px-2 py-1 text-lg bg-darkTeal 
                                text-lightSlate outline-none border-4 border-darkTeal 
                                border-b-lightSlate'
                />
                <input
                    type="submit"
                    value="Search"
                    className='mx-auto ml-3 p-2 cursor-pointer bg-lightSlate 
                                rounded-lg text-lg text-darkTeal hover:bg-lighterTeal'
                />
            </form>
        </div>
    )
}

export default SearchTodoForm
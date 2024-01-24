import React from 'react'

function EditListForm() {
    return (
        <div className='m-1 px-3'>
            <form className='my-1 mx-auto mb-8 py-4 px-3 bg-darkTeal w-3/4 rounded-lg'>
                <p className='p-2 mb-1 text-2xl text-lightSlate'>Edit Todo List</p>
                <div className='mb-7 lighter-hr-med'>
                    <hr />
                </div>
                <input
                    type="text"
                    name="editTodoList"
                    id="editTodoList"
                    autoComplete='off'
                    className='block mx-auto mb-1 px-2 py-1 text-lg bg-darkTeal 
                                text-lightSlate outline-none border-4 border-darkTeal 
                                border-b-lightSlate'
                />
                <p className='p-2 mb-8 text-lightRed'>Todo List Already exists.</p>
                <input
                    type="submit"
                    value="Edit Todo List"
                    className='block mx-auto mb-4 p-2 cursor-pointer bg-lightSlate 
                                rounded-lg text-lg text-darkTeal hover:bg-lighterTeal'
                />
            </form>
        </div>
    )
}

export default EditListForm
import React from 'react'
import { Link } from 'react-router-dom'

function TodoListCard({ displayEditListForm, listItem }) {
    //console.log(list);
    return (
        <div className='bg-darkTeal mx-auto py-3 px-6 text-lg text-lightSlate rounded-lg min-w-96 mb-6'>
            <p className='mb-2'>{listItem.name}</p>
            <p className='text-base italic'>Created: </p>
            <p className='text-base italic mb-4'>Number of List Items:  </p>
            <div className='mb-5'>
                <Link
                    to={`/todolist/${listItem.id}`}
                    className='mx-auto ml-3 py-2 px-6 cursor-pointer bg-lightSlate 
                rounded-md text-base text-darkTeal hover:bg-lighterTeal'
                >View List</Link>
            </div>
            <div>
                <input
                    type='button'
                    value="Edit Name"
                    onClick={() => displayEditListForm(listItem)}
                    className='mx-auto ml-3 py-1 px-2 cursor-pointer bg-darkLime 
                            rounded-md text-base text-lightSlate hover:text-lighterTeal'
                />
                <input
                    type='button'
                    value="Delete List"
                    className='mx-auto ml-3 py-1 px-2 cursor-pointer bg-darkRed 
                            rounded-md text-base text-lightSlate hover:text-lighterTeal'
                />
            </div>

        </div>
    )
}

export default TodoListCard
import React from 'react'
import Checkbox from 'react-custom-checkbox'

function TodoCard({ displayEditTodoForm, todo }) {
    return (
        <li className='bg-darkTeal rounded-lg flex flex-row justify-between align-center py-2 px-4 my-6 text-lightSlate text-lg'>
            <div className='flex flex-row justify-start align-center py-2'>
                <Checkbox
                    icon={
                        <div
                            style={{
                                display: "flex",
                                flex: 1,
                                backgroundColor: "#f8fafc",
                                alignSelf: "stretch",
                            }}
                        >
                        </div>}
                    name="completeTodo"
                    className='cursor-pointer'
                    borderColor="#f8fafc"
                    checked={false}
                />
                <p className='px-2'>{todo.name}</p>
                <p className='italic pl-3 text-lighterTeal text-sm pt-1'>Completed - </p>
            </div>
            <div className='flex flex-row justify-end align-center'>
                <input
                    type="button"
                    value="Delete"
                    className='cursor-pointer px-2 py-1 mx-3 rounded-lg 
                                border-4 border-darkRed text-lightSlate 
                                bg-darkRed text-lg hover:text-lighterFuscia'
                />
                <input
                    type="button"
                    value="Edit"
                    onClick={() => displayEditTodoForm(todo.name)}
                    className='cursor-pointer px-2 py-1 mx-3 rounded-lg 
                                border-4 border-darkLime text-lightSlate 
                                bg-darkLime text-lg hover:text-lighterFuscia'
                />
            </div>
        </li>
    )
}

export default TodoCard
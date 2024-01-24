import React, { useState } from 'react'

function AddNewTodoForm({ addNewTodoToList }) {

    const [newTodoName, setNewTodoName] = useState("")
    const [displayErrorMsg, setDisplayErrorMsg] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    const addNewTodo = (e) => {
        e.preventDefault()
        if (newTodoName !== "") {
            addNewTodoToList(newTodoName)
            setNewTodoName("")
        } else {
            setDisplayErrorMsg(true)
            setErrorMsg("Please enter a Todo.")
        }
    }

    const hideErrorMsg = () => {
        if (displayErrorMsg) {
            setDisplayErrorMsg(false);
            setErrorMsg("");
        }
    }

    return (
        <div className='m-1 px-3'>
            <form
                onSubmit={addNewTodo}
                className='my-1 mx-auto mb-8 py-4 px-3 bg-darkTeal w-3/4 rounded-lg'
            >
                <p className='p-2 mb-1 text-2xl text-lightSlate'>Add New Todo</p>
                <div className='mb-7 lighter-hr'>
                    <hr />
                </div>
                <input
                    type="text"
                    name="newTodo"
                    id="newTodo"
                    value={newTodoName}
                    onFocus={hideErrorMsg}
                    onChange={(e) => setNewTodoName(e.target.value)}
                    placeholder='New Todo'
                    autoComplete='off'
                    className='block mx-auto mb-1 px-2 py-1 text-lg bg-darkTeal 
                                text-lightSlate outline-none border-4 border-darkTeal 
                                border-b-lightSlate'
                />
                {displayErrorMsg ? <p className='p-2 text-lightRed'>{errorMsg}</p> : null}
                <input
                    type="submit"
                    value="Add Todo"
                    className='block mx-auto mt-8 mb-4 p-2 cursor-pointer bg-lightSlate 
                                rounded-lg text-lg text-darkTeal hover:bg-lighterTeal'
                />
            </form>
        </div>
    )
}

export default AddNewTodoForm
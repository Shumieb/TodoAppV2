import React from 'react'
import { useState } from "react"

function CreateNewListForm({ addNewListToList }) {

    const [newTodoListName, setNewTodoListName] = useState("");
    const [displayErrorMsg, setDisplayErrorMsg] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const addNewTodoList = (e) => {
        e.preventDefault();
        if (newTodoListName !== "") {
            //console.log(newTodoListName);
            addNewListToList(newTodoListName);
            setNewTodoListName("");
        } else {
            setDisplayErrorMsg(true);
            setErrorMsg("Please enter a Todo List Name.")
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
                onSubmit={addNewTodoList}
                className='my-1 mx-auto mb-8 py-4 px-3 bg-darkTeal w-3/4 rounded-lg'
            >
                <p className='p-1 text-2xl text-lightSlate'>Create New List</p>
                <div className='mb-7 lighter-hr'>
                    <hr />
                </div>
                <input
                    type="text"
                    name="newTodoList"
                    id="newTodoList"
                    value={newTodoListName}
                    onChange={(e) => setNewTodoListName(e.target.value)}
                    onFocus={hideErrorMsg}
                    placeholder='Add New Todo List'
                    autoComplete='off'
                    className='block mx-auto mb-1 px-2 py-1 text-lg bg-darkTeal 
                                text-lightSlate outline-none border-4 border-darkTeal 
                                border-b-lightSlate'
                />
                {displayErrorMsg ? <p className='pt-2 text-lightRed'>{errorMsg}</p> : null}
                <input
                    type="submit"
                    value="Create List"
                    className='block mx-auto mt-8 mb-4 p-2 cursor-pointer bg-lightSlate 
                                rounded-lg text-lg text-darkTeal hover:bg-lighterTeal'
                />
            </form>
        </div>
    )
}

export default CreateNewListForm
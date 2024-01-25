import React, { useEffect, useState } from 'react'

function EditListForm({ listToEdit, editListNameInList }) {

    //console.log(listNameToEdit);

    // const [editedList, setEditedList] = useState({})
    const [nameToEdit, setNameToEdit] = useState("")
    const [displayErrorMsg, setDisplayErrorMsg] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    useEffect(() => {
        setNameToEdit(listToEdit.name)
    }, [listToEdit])

    const editListName = (e) => {
        e.preventDefault()

        if (nameToEdit === listToEdit.name) {
            setDisplayErrorMsg(true);
            setErrorMsg("Please update the List Name.")
            return;
        }

        if (nameToEdit !== "") {
            let newList = { id: listToEdit.id, name: nameToEdit }
            editListNameInList(newList)
            setNameToEdit("")
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
                onSubmit={editListName}
                className='my-1 mx-auto mb-8 py-4 px-3 bg-darkTeal w-3/4 rounded-lg'
            >
                <p className='p-2 mb-1 text-2xl text-lightSlate'>Edit List Name</p>
                <div className='mb-7 lighter-hr-med'>
                    <hr />
                </div>
                <input
                    type="text"
                    name="editTodoList"
                    id="editTodoList"
                    onFocus={hideErrorMsg}
                    value={nameToEdit}
                    onChange={(e) => setNameToEdit(e.target.value)}
                    autoComplete='off'
                    className='block mx-auto mb-1 px-2 py-1 text-lg bg-darkTeal 
                                text-lightSlate outline-none border-4 border-darkTeal 
                                border-b-lightSlate'
                />
                {displayErrorMsg ? <p className='p-2 text-lightRed'>{errorMsg}</p> : null}
                <input
                    type="submit"
                    value="Edit Todo List"
                    className='block mx-auto mt-8 mb-4 p-2 cursor-pointer bg-lightSlate 
                                rounded-lg text-lg text-darkTeal hover:bg-lighterTeal'
                />
            </form>
        </div>
    )
}

export default EditListForm
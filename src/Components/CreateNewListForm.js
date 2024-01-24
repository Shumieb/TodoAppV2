import React from 'react'

function CreateNewListForm() {
    return (
        <div>
            <form>
                <p>Create New List</p>
                <input type="text" name="newTodoList" id="newTodoList" />
                <input type="submit" value="Create List" />
            </form>
        </div>
    )
}

export default CreateNewListForm
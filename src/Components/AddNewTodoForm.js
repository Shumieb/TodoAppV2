import React from 'react'

function AddNewTodoForm() {
    return (
        <div>
            <form>
                <p>Add New Todo</p>
                <input type="text" name="newTodo" id="newTodo" placeholder='New Todo' />
                <input type="submit" value="Add Todo" />
            </form>
        </div>
    )
}

export default AddNewTodoForm
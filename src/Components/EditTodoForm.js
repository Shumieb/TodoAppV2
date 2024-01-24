import React from 'react'

function EditTodoForm() {
    return (
        <div>
            <form>
                <p>Edit Todo</p>
                <input type="text" name="editTodo" id="editTodo" />
                <input type="submit" value="Edit" />
            </form>
        </div>
    )
}

export default EditTodoForm
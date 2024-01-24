import React from 'react'

function SearchTodoForm() {
    return (
        <div>
            <form>
                <input type="text" name="searchTodo" id="searchTodo" />
                <input type="submit" value="search" />
            </form>
        </div>
    )
}

export default SearchTodoForm
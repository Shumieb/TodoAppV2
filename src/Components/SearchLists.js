import React from 'react'

function SearchLists() {
    return (
        <div>
            <form>
                <input type="text" name="searchTodoLists" id="searchTodoLists" />
                <input type="button" value="Search" />
            </form>
        </div>
    )
}

export default SearchLists
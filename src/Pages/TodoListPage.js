import React from 'react'
import TodosList from '../Components/TodosList'
import AddNewTodoForm from '../Components/AddNewTodoForm'
import SearchTodoForm from '../Components/SearchTodoForm'
import EditTodoForm from '../Components/EditTodoForm'

function TodoListPage() {
    return (
        <div>
            <p>Todo List One</p>
            <hr />
            <p>Created: </p>
            <div>
                <input type="button" value="addNewTodo" />
                <input type="button" value="searchTodos" />
            </div>
            <div>
                <AddNewTodoForm />
                <SearchTodoForm />
                <EditTodoForm />
            </div>
            <hr />
            <div>
                <input type="button" value="Hide Completed" />
                <input type="button" value="Sort" />
            </div>
            <TodosList />
        </div>
    )
}

export default TodoListPage
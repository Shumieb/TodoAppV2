import React from 'react'
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'

import TodoLists from '../Components/TodoLists'
import CreateNewListForm from '../Components/CreateNewListForm'
import SearchLists from '../Components/SearchLists'
import EditListForm from '../Components/EditListForm'

function HomePage() {

    const [showCreateNewListForm, setShowCreateNewListForm] = useState(false);
    const [showSearchListsForm, setShowSearchListsForm] = useState(false);
    const [showEditListForm, setShowEditListForm] = useState(false);
    const [listToEdit, setListToEdit] = useState("")

    const [todoList, setTodoList] = useState([{ id: 1, name: "Todo List One" }, { id: 2, name: "Todo List Two" }]);

    const displayCreateNewListForm = () => {
        //console.log("display create new list form");
        showCreateNewListForm ? setShowCreateNewListForm(false) : setShowCreateNewListForm(true);
        if (showSearchListsForm || showEditListForm) {
            setShowSearchListsForm(false);
            setShowEditListForm(false);
        }
    };

    const displaySeachListsForm = () => {
        //console.log("display search lists form");
        showSearchListsForm ? setShowSearchListsForm(false) : setShowSearchListsForm(true);
        if (showCreateNewListForm || showEditListForm) {
            setShowCreateNewListForm(false);
            setShowEditListForm(false);
        }
    };

    const displayEditListForm = (list) => {
        //console.log("display edit list form");
        //console.log(listName)
        if (showEditListForm) {
            setListToEdit("")
            setShowEditListForm(false)
        } else {
            setListToEdit(list)
            setShowEditListForm(true)
        }

        if (showCreateNewListForm || showSearchListsForm) {
            setShowCreateNewListForm(false);
            setShowSearchListsForm(false);
        }
    };

    const addNewListToList = (listName) => {
        let newListId = uuidv4()
        let newList = { id: newListId, name: listName }
        setTodoList((prevState) => [...prevState, newList])
    }

    const editListNameInList = (listToEdit) => {
        console.log(listToEdit);
        let listToeditIndex = todoList.findIndex((list) => list.id == listToEdit.id)
        let newTodos = [...todoList]
        newTodos[listToeditIndex] = listToEdit
        setTodoList(newTodos)
    }

    return (
        <div className="container mx-auto text-center">
            <h2 className='p-2 mb-1 text-3xl text-darkTeal'>Todo App</h2>
            <div className='home-page-heading-hr mb-8'>
                <hr />
            </div>
            <div className='mx-1 px-1 mb-6'>
                <input
                    type="button"
                    value="Create New List"
                    onClick={displayCreateNewListForm}
                    className='cursor-pointer px-4 py-2 mx-3 rounded-lg 
                                border-4 border-darkFuscia text-lightSlate 
                                bg-darkFuscia text-lg hover:text-lighterFuscia'
                />
                <input
                    type="button"
                    value="Search Lists"
                    onClick={displaySeachListsForm}
                    className='cursor-pointer px-4 py-2 mx-3 rounded-lg 
                                border-4 border-darkFuscia text-lightSlate 
                                bg-darkFuscia text-lg hover:text-lighterFuscia'
                />
            </div>
            <div>
                {showCreateNewListForm ? <CreateNewListForm addNewListToList={addNewListToList} /> : null}
                {showSearchListsForm ? <SearchLists /> : null}
                {showEditListForm ?
                    <EditListForm listToEdit={listToEdit} editListNameInList={editListNameInList} />
                    : null}
            </div>
            <div className='home-page-heading-hr mb-4'>
                <hr />
            </div>
            <TodoLists
                todoList={todoList}
                displayEditListForm={displayEditListForm}
            />
        </div>
    )
}

export default HomePage
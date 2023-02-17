import React, { createContext, useContext, useState, useReducer} from "react";
import listReducer from "./listReducer"

const initialState = {
    todoLists: []
}

 export const Context = createContext()

 export const StateContext = ({ children }) => {
    const [todoLists, setTodoLists] = useState([])
    const [editList, setEditList] = useState({})
    const [editText, setEditText] = useState("")
 
    function onAdd(list) {
        setTodoLists([list, ...todoLists])
    }
    function onDelete(id) {
       const updatedLists = todoLists.filter((list) => {
        if (list._id != id) return list 
       })
       setTodoLists(updatedLists)
    }
    function onUpdate(updatedList) {
       const updatedLists = todoLists.filter((list) => {
        if (list._id == updatedList._id) return updatedList
        return list 
       })
       setTodoLists(updatedLists)
    }

    function onSave(updatedList) {
       const updatedLists = todoLists.filter((list) => {
        if (list._id == updatedList._id) return updatedList
        return list 
       })
       setTodoLists(updatedLists)
       setEditList({})
    }
    function onEdit(list) {
      setEditList(list)
      setEditText(list.text)
    }

    return (<Context.Provider value={{
         todoLists,
         editList,
         editText,
         setTodoLists,
         onAdd,
         onDelete,
         onUpdate,
         onSave,
         setEditList,
         setEditText,
         onEdit
    }}>{ children }</Context.Provider>)
}

export const useStateContext = () => useContext(Context)
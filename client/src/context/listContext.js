import React, { createContext, useContext, useState, useReducer} from "react";
import listReducer from "./listReducer"

const initialState = {
    todoLists: []
}

 export const Context = createContext()

 export const StateContext = ({ children }) => {
    const [todoLists, setTodoLists] = useState([])
    const [editList, setEditList] = useState({})
 
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

    function onEdit(updatedList) {
       const updatedLists = todoLists.filter((list) => {
        if (list._id == updatedList._id) return updatedList
        return list 
       })
       setTodoLists(updatedLists)
       setEditList({})
    }

    return (<Context.Provider value={{
         todoLists,
         editList,
         setTodoLists,
         onAdd,
         onDelete,
         onUpdate,
         onEdit,
         setEditList
    }}>{ children }</Context.Provider>)
}

export const useStateContext = () => useContext(Context)
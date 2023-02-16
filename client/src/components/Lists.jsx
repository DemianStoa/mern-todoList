import React, { useState, useEffect, useReducer } from 'react'
import { Box, Divider, Typography } from "@mui/material"
import List  from "./List"
import { useStateContext } from "../context/listContext"
import { getLists } from '../api/todoListApi'
import EditForm from './EditForm'

const Lists = () => {
  const { todoLists, setTodoLists } = useStateContext()

  const fetchLists = async() => {
    try {
      const {data} = await getLists()
        setTodoLists(data)
    }catch(err){console.log(err)}
 }
  useEffect(() => {
    fetchLists()
    }, []); 


 const getCompletedAmount = (lists) => {
    if(lists.length>0){
      return lists.reduce((total,list)=>{
        if(list.isCompleted) return total+1
        return total
      }) 
    }
    return 0
 }
  return (
    <Box 
    sx={{
      display: "flex",
      flexDirection: "column"
    }}>
       <EditForm />
      <Box my=".6rem" display="flex" justifyContent="space-around">
        <Typography>Total Tasks: <span>{todoLists.length}</span></Typography>
        <Typography>Completed Tasks: <span>{0}</span></Typography>
      </Box>
         {
          todoLists && todoLists.length >0
         && todoLists?.map(
            ( list, index) => {
            return (           
               <List  
              key={list._id}
              list={list}
              index={index}
              />)
            }
          )} 
         
    </Box>
  )
}

export default Lists
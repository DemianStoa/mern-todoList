import React, { useState, useReducer, useEffect } from 'react'
import { Box, Button, TextField } from "@mui/material"
import { createList } from '../api/todoListApi'
import { useStateContext } from '../context/listContext'
import {  updateList } from '../api/todoListApi';


const EditForm = () => {
  const [text, setText] = useState("start edit")
  const { onEdit, editList } = useStateContext()
  

  const handleEdit = async () => {
    const list = {...editList}
    list.text = text
    try {
      await updateList(list)
        onEdit(list)
    }catch(err){console.log(err)}
   }

   useEffect(() => {
    if(Object.keys(editList).length > 0) {
       
    }
    }, editList); 

  return (
    <Box sx={{ display: "flex", justifyContent: "center", 
    position:"absolute", zIndex:"100" ,top: ( Object.keys(editList).length > 0)? "50px" : "-500rem"}}>
        <TextField 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{backgroundColor:"#eee", 
        margin:"0", padding:"0",width:"75%",
         }}/>
        <Button width="20%" color="primary" onClick={handleEdit}>
            Save
        </Button>
    </Box>
  )
}

export default EditForm
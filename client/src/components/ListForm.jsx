import React, { useState, useReducer } from 'react'
import { Box, Button, TextField } from "@mui/material"
import { createList } from '../api/todoListApi'
import { useStateContext } from '../context/listContext'


const ListForm = () => {
  const [text, setText] = useState("")
  const { onAdd } = useStateContext()

  const handleClick = async() => {
    if(text){
      try {
        const {data} = await createList(text)  
        onAdd(data)
        setText("")
      }catch(err){console.log(err)}
    }
    else {
      alert("cannot be empty")
    }
 }
  return (
    <Box sx={{ display: "flex", justifyContent: "center"}}>
        <TextField 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{backgroundColor:"#eee", 
        margin:"0", padding:"0",width:"75%",
         placeholder:'Add a Task'}}/>
        <Button width="20%" color="primary" onClick={handleClick}>
            Add
        </Button>
    </Box>
  )
}

export default ListForm
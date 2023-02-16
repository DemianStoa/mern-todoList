import { IconButton, Typography, Box } from '@mui/material'
import React,{ useState } from 'react'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ModeIcon from '@mui/icons-material/Mode';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useStateContext } from "../context/listContext"
import { deleteList, updateList } from '../api/todoListApi';


const List = ({ index, list}) => {
  const { onDelete, onUpdate, setEditList,  } = useStateContext()

  const handleDelete = async() => {
      try {
        await deleteList(list._id)
        onDelete(list._id)
      }catch(err){console.log(err)}
    
 }

 const handleUpdate = async () => {
  list.isCompleted = !list.isCompleted 
  try {
    await updateList(list)
      onUpdate(list)
  }catch(err){console.log(err)}
 }

 const handleEdit =  () => {
   setEditList(list)
 }


 
  return (
    <Box display="flex" justifyContent="space-around" 
    backgroundColor={list.isCompleted? "grey":"#fff"} marginBottom=".5rem"
    borderRadius="5px"
    >
      <Box>
        <Typography>{`${index+1}.`} <span>{list.text.toUpperCase()}</span></Typography>
      </Box>
      <Box display="flex" width="60px" justifyContent="space-around">
        <IconButton  color="success"  onClick={handleUpdate}>
          <TaskAltIcon />
        </IconButton>
        <IconButton color="info"  onClick={handleEdit}>
          <ModeIcon />
        </IconButton>
        <IconButton color="warning" onClick={handleDelete}>
          <HighlightOffIcon/>
        </IconButton>
      </Box>

    </Box>
    
  )
}

export default List
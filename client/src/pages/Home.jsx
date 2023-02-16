import React, {  useEffect } from 'react'
import { Box, Typography, Paper } from "@mui/material"
import Lists from "../components/Lists"
import ListForm from "../components/ListForm"


const Home = () => {

  return (
    <Box width="100vw" display="grid" justifyContent="center" alignItems="center" height="100vh">
    <Paper sx={{width:"clamp(400px, 80%, 700px)" ,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexend",
    gap: "1rem"}}>
      <Box
        mx="20px"
        sx={{

        }}
        >
            <Typography variant='h5' margin=".7rem" textAlign={"center"}>Task Manager</Typography>
            <ListForm />
            <Lists />
        </Box>
    </Paper>
    </Box>

  )
}

export default Home
import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
  var[name,setname]=useState("Akshaya")
  var[val,Change]=useState()
  const handleInput = (e) => {
    console.log(e.target.value)
    setname(e.target.value)
  }
 
  const nameChange = () => {
  Change(name)
  }

  return (
    <div>
       <Typography Variant="h6"> <h1>welcome {val}</h1></Typography>
       <TextField Variant="Outlined" label="Enter name" onChange={handleInput} ></TextField><br/><br/>
       <Button variant='contained'onClick={nameChange}>Name</Button>
    </div>
  )
}

export default StateBasics
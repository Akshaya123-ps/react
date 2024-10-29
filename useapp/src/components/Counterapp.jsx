import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counterapp = () => {
    var [val,setChange] = useState(0)
    const Plus =  () => {
        setChange(val+1)
    } 
    const Minus = () =>{
        setChange(val-1)
    }
  return (
    <div>
        <Typography variant="h6" ><h1>Count:{val}</h1></Typography>
        <Button variant="contained" onClick={Plus} color='success'>+</Button>&nbsp;&nbsp;
        <Button variant="contained" onClick={Minus} color="error">-</Button>
    </div>
  )
}

export default Counterapp
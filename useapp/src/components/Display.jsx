import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const display= () => {
  var[val,name]=useState()
  
  const react= () =>{
    name("React")
  }
  const angular= () =>{
    name("Angular")
  }
  const vue= () =>{
    name("Vue")
  }
  // use effect
 useEffect(() =>{
  angular()
 },[])
  return (
    <div>
        <Typography ><h1>Welcome to {val} </h1></Typography>
        <Button variant="contained" onClick={react} color='success'>React</Button>&nbsp;&nbsp;
        <Button variant="contained" onClick={angular} color='secondary'>Angular</Button>&nbsp;&nbsp;
        <Button variant="contained" onClick={vue} color='error'>vue</Button>&nbsp;&nbsp;
    </div>
  )
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

export default display
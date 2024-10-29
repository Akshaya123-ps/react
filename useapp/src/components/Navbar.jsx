import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar color="warning">
            <Toolbar>
                <Typography variant="h5">My_App</Typography>
                <div id="i">
                <Link to='/s'>
                
                <Button variant="contained" color="warning" >State</Button>&nbsp;&nbsp;
                
                </Link>
                <Link to='/c'>
                <Button variant="contained" color="warning">Counter</Button>&nbsp;&nbsp;
               
                </Link>
                <Link to='/n'>
                <Button variant="contained" color="warning">Display</Button>
               
                </Link>
                </div>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Counterapp from './components/Counterapp'
import Display from './components/Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
       
      <Route path='/c' element={<Counterapp/>}/>
        <Route path='/s' element={<StateBasics/>}/>
        <Route path='/n' element={ <Display/>}/>
      </Routes>
    </>
  )
}

export default App

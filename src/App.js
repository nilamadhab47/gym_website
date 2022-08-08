import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material'

import "./App.css"
import Navbar from './component/Navbar'
import Home from './Pages/Home'
import ExerciseDetails from './Pages/ExerciseDetails'
import Footer from './component/Footer'
import Explore from './Pages/Explore'
import Features from './component/Features'

function App() {
  return (
    <Box width = "400px" sx ={{width : {xl : '1488px'}}} m="auto">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exercise/:id" element={<ExerciseDetails/>}/>
        <Route path="/explore" element={<Explore/>}/>
      </Routes>
      <Footer/>

    </Box>
  )
}

export default App
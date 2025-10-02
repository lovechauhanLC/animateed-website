import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Agency from './pages/Agency'
import Work from './pages/Work'

const App = () => {
  return (
    <div>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/agency' element={<Agency/>} />
      <Route path='/work' element={<Work/>} />
    </Routes>
    </div>
  )
}

export default App

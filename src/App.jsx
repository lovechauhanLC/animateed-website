import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Agency from './pages/Agency'
import Work from './pages/Work'
import Navbar from './components/navigations/Navbar'
import FullScreenNav from './components/navigations/FullScreenNav'

const App = () => {
  return (
    <div>
      <Navbar/>
      <FullScreenNav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/agency' element={<Agency/>} />
        <Route path='/work' element={<Work/>} />
      </Routes>
    </div>
  )
}

export default App

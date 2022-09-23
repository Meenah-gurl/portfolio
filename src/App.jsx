import { useState, Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import About from './pages/About'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Routes>
        {/* Guest Routes */}
        <Route element={<AppLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>

        {/* Auth Routes */}
      </Routes>
      
    </div>
  )
}

export default App

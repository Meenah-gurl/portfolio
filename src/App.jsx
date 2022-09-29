import { useEffect } from 'react'
import { useState, Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import './remixicon/fonts/remixicon.css'
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>

function App() {
  return (
    <div>
      <Routes>
        {/* Guest Routes */}
        <Route element={<AppLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/contact' element={<Contact/>} />
        </Route>

        {/* Auth Routes */}
      </Routes>
      
    </div>
  )
}



export default App

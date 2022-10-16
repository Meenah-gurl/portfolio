import { useEffect } from 'react'
import { useState, Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Login from './Auth/Login'
import './remixicon/fonts/remixicon.css'
import AuthLayout from './layouts/AuthLayout'
import Register from './Auth/Register'
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

        <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path ='/register' element={<Register/>} />
        </Route>
      </Routes>
      
    </div>
  )
}



export default App

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Navbar from './component/Navbar'

import "./App.css"
import ThemeProvider from './component/ThemeProvider'

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <ThemeProvider />
      <Routes>
        <Route index Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/contact' Component={Contact} />
        <Route path='/portfolio' Component={Portfolio} />
        
      </Routes>
    </BrowserRouter>
  )
}

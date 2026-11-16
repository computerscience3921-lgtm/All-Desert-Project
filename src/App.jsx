import React from 'react'
import Home from './Home.jsx'
import Header from './Header.jsx'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/appliance-repairs' element={<h1>Appliance Repairs</h1>} />
        <Route path='/appliance-parts' element={<h1>Appliance Parts</h1>} />
        <Route path='/used-appliances' element={<h1>Used Appliances</h1>} />
        <Route path='/current-inventory' element={<h1>Current Inventory</h1>} />
        <Route path='/financing' element={<h1>Financing</h1>} />
        <Route path='/contact-us' element={<h1>Contact Us</h1>} />
      </Routes>
    </>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'

const Allrouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
  )
}

export default Allrouter

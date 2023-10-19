import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Register from './Register'
import Login from './Login'

export default function AllRoutes() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/home" element={<HomePage/>} />
        </Routes>
    </>
  )
}

